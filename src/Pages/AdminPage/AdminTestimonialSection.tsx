import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  published: boolean;
}

interface Props {
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
}

export const AdminTestimonialSection = ({ testimonials, setTestimonials }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    content: '',
    image: '',
    rating: 5,
    published: true
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Mise à jour
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === editingId 
          ? { ...formData, id: editingId }
          : testimonial
      ));
    } else {
      // Création
      const newTestimonial: Testimonial = {
        ...formData,
        id: Date.now()
      };
      setTestimonials([newTestimonial, ...testimonials]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      company: '',
      content: '',
      image: '',
      rating: 5,
      published: true
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      content: testimonial.content,
      image: testimonial.image,
      rating: testimonial.rating,
      published: testimonial.published
    });
    setEditingId(testimonial.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const togglePublish = (id: number) => {
    setTestimonials(testimonials.map(t =>
      t.id === id ? { ...t, published: !t.published } : t
    ));
  };

  return (
    <div className="testimonial-section">
      <div className="section-header">
        <button 
          className="btn-add"
          onClick={() => setShowForm(!showForm)}
        >
          <i className="ri-add-line"></i>
          {showForm ? 'Annuler' : 'Nouveau témoignage'}
        </button>
      </div>

      {showForm && (
        <div className="testimonial-form-container">
          <h3>{editingId ? 'Modifier le témoignage' : 'Nouveau témoignage'}</h3>
          <form className="testimonial-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nom *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Nom du client"
                />
              </div>

              <div className="form-group">
                <label>Poste *</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  required
                  placeholder="CEO, Manager, etc."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Entreprise *</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                  placeholder="Nom de l'entreprise"
                />
              </div>

              <div className="form-group">
                <label>Note (sur 5)</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                >
                  <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                  <option value="4">⭐⭐⭐⭐ (4)</option>
                  <option value="3">⭐⭐⭐ (3)</option>
                  <option value="2">⭐⭐ (2)</option>
                  <option value="1">⭐ (1)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Témoignage *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
                rows={5}
                placeholder="Le témoignage du client..."
              />
            </div>

            <div className="form-group">
              <label>URL de la photo</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                placeholder="/images/avatar1.jpg"
              />
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

      <div className="testimonial-list">
        <h3>Témoignages ({testimonials.length})</h3>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`testimonial-card ${!testimonial.published ? 'draft' : ''}`}>
              <div className="testimonial-header">
                {testimonial.image && (
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                )}
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position} - {testimonial.company}</p>
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
                {!testimonial.published && <span className="draft-badge">Masqué</span>}
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-actions">
                <button onClick={() => togglePublish(testimonial.id)} className="btn-toggle">
                  <i className={testimonial.published ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                  {testimonial.published ? 'Masquer' : 'Publier'}
                </button>
                <button onClick={() => handleEdit(testimonial)} className="btn-edit">
                  <i className="ri-edit-line"></i>
                  Modifier
                </button>
                <button onClick={() => handleDelete(testimonial.id)} className="btn-delete">
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
