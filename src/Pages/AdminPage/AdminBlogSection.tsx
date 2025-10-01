import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  published: boolean;
}

interface Props {
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

export const AdminBlogSection = ({ blogPosts, setBlogPosts }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'DigiDesk Team',
    category: 'Digital',
    published: true
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Mise à jour
      setBlogPosts(blogPosts.map(post => 
        post.id === editingId 
          ? { ...formData, id: editingId, date: post.date }
          : post
      ));
    } else {
      // Création
      const newPost: BlogPost = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      };
      setBlogPosts([newPost, ...blogPosts]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: 'DigiDesk Team',
      category: 'Digital',
      published: true
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author: post.author,
      category: post.category,
      published: post.published
    });
    setEditingId(post.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    }
  };

  const togglePublish = (id: number) => {
    setBlogPosts(blogPosts.map(post =>
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  return (
    <div className="blog-section">
      <div className="section-header">
        <button 
          className="btn-add"
          onClick={() => setShowForm(!showForm)}
        >
          <i className="ri-add-line"></i>
          {showForm ? 'Annuler' : 'Nouvel article'}
        </button>
      </div>

      {showForm && (
        <div className="blog-form-container">
          <h3>{editingId ? 'Modifier l\'article' : 'Nouvel article'}</h3>
          <form className="blog-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Titre *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  placeholder="Titre de l'article"
                />
              </div>

              <div className="form-group">
                <label>Catégorie</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="Digital">Digital</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Technologie">Technologie</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Extrait *</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                required
                rows={3}
                placeholder="Court résumé de l'article"
              />
            </div>

            <div className="form-group">
              <label>Contenu *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
                rows={8}
                placeholder="Contenu complet de l'article"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>URL de l'image</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="/images/blog1.jpg"
                />
              </div>

              <div className="form-group">
                <label>Auteur</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({...formData, published: e.target.checked})}
                />
                Publier immédiatement
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                <i className="ri-save-line"></i>
                {editingId ? 'Mettre à jour' : 'Publier'}
              </button>
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="blog-list">
        <h3>Articles ({blogPosts.length})</h3>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className={`blog-card ${!post.published ? 'draft' : ''}`}>
              {post.image && (
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  {!post.published && <span className="draft-badge">Brouillon</span>}
                </div>
              )}
              <div className="blog-card-content">
                <span className="blog-category">{post.category}</span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span><i className="ri-user-line"></i> {post.author}</span>
                  <span><i className="ri-calendar-line"></i> {post.date}</span>
                </div>
              </div>
              <div className="blog-card-actions">
                <button onClick={() => togglePublish(post.id)} className="btn-toggle">
                  <i className={post.published ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                  {post.published ? 'Masquer' : 'Publier'}
                </button>
                <button onClick={() => handleEdit(post)} className="btn-edit">
                  <i className="ri-edit-line"></i>
                  Modifier
                </button>
                <button onClick={() => handleDelete(post.id)} className="btn-delete">
                  <i className="ri-delete-bin-line"></i>
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
