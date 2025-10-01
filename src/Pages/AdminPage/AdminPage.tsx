import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminBlogSection } from './AdminBlogSection';
import { AdminTestimonialSection } from './AdminTestimonialSection';
import { useData } from '../../context/DataContext';
import { 
  createSession, 
  isSessionValid, 
  clearSession, 
  checkLoginAttempts, 
  recordLoginAttempt,
  getAdminCredentials 
} from '../../utils/auth';
import './adminPage.css';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

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

export const AdminPage = () => {
  const navigate = useNavigate();
  const { blogPosts, setBlogPosts, testimonials, setTestimonials, messages } = useData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'messages' | 'blog' | 'testimonials' | 'stats' | 'settings'>('dashboard');
  
  // Utiliser directement les messages du contexte
  const messagesData = messages;

  const stats = {
    totalMessages: messages.length,
    newMessages: messages.filter(m => m.status === 'new').length,
    totalServices: 7,
    monthlyVisits: 1250
  };

  useEffect(() => {
    // Vérifier si la session est valide
    if (isSessionValid()) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier le rate limiting
    const attemptCheck = checkLoginAttempts();
    if (!attemptCheck.allowed) {
      const minutes = Math.ceil((attemptCheck.lockoutTime || 0) / 60);
      setError(`Trop de tentatives. Réessayez dans ${minutes} minute(s).`);
      return;
    }

    const credentials = getAdminCredentials();
    
    if (email === credentials.email && password === credentials.password) {
      setIsAuthenticated(true);
      createSession();
      recordLoginAttempt(true);
      setError('');
    } else {
      recordLoginAttempt(false);
      const remaining = attemptCheck.remainingAttempts - 1;
      if (remaining > 0) {
        setError(`Email ou mot de passe incorrect. ${remaining} tentative(s) restante(s).`);
      } else {
        setError('Compte temporairement verrouillé. Réessayez dans 15 minutes.');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    clearSession();
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <div className="login-header">
            <i className="ri-shield-keyhole-line"></i>
            <h1>Administration DigiDesk</h1>
            <p>Connectez-vous pour accéder au panneau d'administration</p>
          </div>
          
          <form className="login-form" onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@digidesk.pro"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              <i className="ri-login-box-line"></i>
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>DigiDesk Admin</h2>
        </div>
        
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="ri-dashboard-line"></i>
            Tableau de bord
          </button>
          
          <button
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <i className="ri-mail-line"></i>
            Messages
            {stats.newMessages > 0 && (
              <span className="badge">{stats.newMessages}</span>
            )}
          </button>
          
          <button
            className={`nav-item ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog')}
          >
            <i className="ri-article-line"></i>
            Blog
          </button>
          
          <button
            className={`nav-item ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            <i className="ri-chat-quote-line"></i>
            Témoignages
          </button>
          
          <button
            className={`nav-item ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            <i className="ri-bar-chart-line"></i>
            Statistiques
          </button>
          
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="ri-settings-line"></i>
            Paramètres
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <i className="ri-logout-box-line"></i>
          Déconnexion
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {activeTab === 'dashboard' && 'Tableau de bord'}
            {activeTab === 'messages' && 'Messages'}
            {activeTab === 'blog' && 'Gestion du Blog'}
            {activeTab === 'testimonials' && 'Témoignages'}
            {activeTab === 'stats' && 'Statistiques'}
            {activeTab === 'settings' && 'Paramètres'}
          </h1>
          <div className="admin-user">
            <i className="ri-user-line"></i>
            <span>Administrateur</span>
          </div>
        </header>

        <div className="admin-content">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="dashboard">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalMessages}</h3>
                    <p>Messages totaux</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-notification-line"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.newMessages}</h3>
                    <p>Nouveaux messages</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-service-line"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalServices}</h3>
                    <p>Services actifs</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-eye-line"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.monthlyVisits}</h3>
                    <p>Visites ce mois</p>
                  </div>
                </div>
              </div>

              <div className="recent-activity">
                <h2>Activité récente</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <i className="ri-mail-line"></i>
                    <div>
                      <p><strong>Nouveau message</strong> de Jean Dupont</p>
                      <span>Il y a 2 heures</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <i className="ri-user-add-line"></i>
                    <div>
                      <p><strong>Nouvelle inscription</strong> newsletter</p>
                      <span>Il y a 5 heures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          {activeTab === 'messages' && (
            <div className="messages-section">
              <div className="messages-header">
                <input
                  type="search"
                  placeholder="Rechercher un message..."
                  className="search-input"
                />
                <select className="filter-select">
                  <option value="all">Tous</option>
                  <option value="new">Nouveaux</option>
                  <option value="read">Lus</option>
                  <option value="replied">Répondus</option>
                </select>
              </div>

              <div className="messages-list">
                {messagesData.map((msg) => (
                  <div key={msg.id} className={`message-card ${msg.status}`}>
                    <div className="message-header">
                      <div className="message-sender">
                        <i className="ri-user-line"></i>
                        <div>
                          <h3>{msg.name}</h3>
                          <p>{msg.email}</p>
                        </div>
                      </div>
                      <span className={`status-badge ${msg.status}`}>
                        {msg.status === 'new' && 'Nouveau'}
                        {msg.status === 'read' && 'Lu'}
                        {msg.status === 'replied' && 'Répondu'}
                      </span>
                    </div>
                    <div className="message-body">
                      <p><strong>Sujet:</strong> {msg.subject}</p>
                      <p><strong>Téléphone:</strong> {msg.phone}</p>
                      <p className="message-text">{msg.message}</p>
                      <span className="message-date">{msg.date}</span>
                    </div>
                    <div className="message-actions">
                      <button className="btn-reply">
                        <i className="ri-reply-line"></i>
                        Répondre
                      </button>
                      <button className="btn-archive">
                        <i className="ri-archive-line"></i>
                        Archiver
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog */}
          {activeTab === 'blog' && (
            <AdminBlogSection blogPosts={blogPosts} setBlogPosts={setBlogPosts} />
          )}

          {/* Testimonials */}
          {activeTab === 'testimonials' && (
            <AdminTestimonialSection testimonials={testimonials} setTestimonials={setTestimonials} />
          )}

          {/* Stats */}
          {activeTab === 'stats' && (
            <div className="stats-section">
              <h2>Statistiques détaillées</h2>
              <div className="charts-grid">
                <div className="chart-card">
                  <h3>Messages par mois</h3>
                  <div className="chart-placeholder">
                    <i className="ri-line-chart-line"></i>
                    <p>Graphique à venir</p>
                  </div>
                </div>
                <div className="chart-card">
                  <h3>Services populaires</h3>
                  <div className="chart-placeholder">
                    <i className="ri-pie-chart-line"></i>
                    <p>Graphique à venir</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="settings-section">
              <h2>Paramètres</h2>
              <div className="settings-card">
                <h3>Informations du compte</h3>
                <div className="setting-item">
                  <label>Email</label>
                  <input type="email" value={getAdminCredentials().email} disabled />
                </div>
                <div className="setting-item">
                  <label>Changer le mot de passe</label>
                  <button className="btn-change-password">
                    <i className="ri-lock-password-line"></i>
                    Modifier
                  </button>
                </div>
              </div>

              <div className="settings-card">
                <h3>Notifications</h3>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Recevoir les notifications par email
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Alertes pour nouveaux messages
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
