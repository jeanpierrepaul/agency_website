import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './aboutPage.css';

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero__overlay"></div>
        <div className="container">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            À Propos de DigiDesk
          </motion.h1>
          <motion.p
            className="about-hero__subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Votre partenaire de confiance pour l'externalisation de vos services
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="about-content">
        <div className="container">
          {/* Problématique */}
          <motion.div
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Le Contexte Actuel</h2>
            <p>
              Internet, freelancing, télétravail, Intelligence artificielle : les repères changent. 
              Gérer une entreprise devient plus flexible, mais pas forcément plus simple. 
              La gestion d'entreprise est en pleine transformation.
            </p>
            
            <div className="challenges-box">
              <h3>Défis rencontrés par les entreprises :</h3>
              <ul className="challenges-list">
                <li><i className="ri-alert-line"></i> Surcharge administrative</li>
                <li><i className="ri-alert-line"></i> Manque de temps et de structuration</li>
                <li><i className="ri-alert-line"></i> Manque de personnel qualifié</li>
                <li><i className="ri-alert-line"></i> Faible visibilité et organisation</li>
              </ul>
            </div>

            <p className="highlight-text">
              <strong>→</strong> Les entreprises et dirigeants ont besoin de solutions agiles, fiables et humaines pour se recentrer sur l'essentiel : 
              la vision et le développement à travers la recherche de financement et de partenaires.
            </p>
          </motion.div>

          {/* Positionnement */}
          <motion.div
            className="about-section positioning-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Notre Positionnement</h2>
            <div className="positioning-cards">
              <div className="positioning-card">
                <i className="ri-shield-star-line"></i>
                <h3>Partenaire Stratégique</h3>
                <p>Discret et humain, nous vous accompagnons dans votre croissance</p>
              </div>
              <div className="positioning-card">
                <i className="ri-rocket-line"></i>
                <h3>Externalisation Agile</h3>
                <p>Solutions simples et adaptées aux réalités locales</p>
              </div>
            </div>
          </motion.div>

          {/* Confidentialité */}
          <motion.div
            className="about-section confidentiality-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>La Confidentialité, Notre Engagement</h2>
            <div className="confidentiality-grid">
              <div className="confidentiality-item">
                <i className="ri-file-shield-2-line"></i>
                <h4>Confidentialité Contractuelle</h4>
                <p>Clauses strictes de non-divulgation dans chaque collaboration</p>
              </div>
              <div className="confidentiality-item">
                <i className="ri-user-voice-line"></i>
                <h4>Discrétion Professionnelle</h4>
                <p>Équipes formées aux bonnes pratiques de gestion des informations sensibles</p>
              </div>
              <div className="confidentiality-item">
                <i className="ri-shield-keyhole-line"></i>
                <h4>Sécurité Numérique</h4>
                <p>Outils sécurisés pour le partage de documents et la gestion des données</p>
              </div>
              <div className="confidentiality-item">
                <i className="ri-lock-password-line"></i>
                <h4>Accès Restreint</h4>
                <p>Informations accessibles uniquement aux intervenants autorisés avec traçabilité</p>
              </div>
              <div className="confidentiality-item">
                <i className="ri-database-2-line"></i>
                <h4>Archivage Sécurisé</h4>
                <p>Données stockées selon des protocoles rigoureux et confidentiels</p>
              </div>
            </div>
          </motion.div>

          {/* Nos Moyens d'Action */}
          <motion.div
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Nos Moyens d'Action</h2>
            <div className="values-grid">
              <motion.div
                className="value-card"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-team-line"></i>
                <h3>Expertise Pluridisciplinaire</h3>
                <p>Professionnels expérimentés en administration, comptabilité, droit, communication et assurances</p>
              </motion.div>

              <motion.div
                className="value-card"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-tools-line"></i>
                <h3>Outils Numériques</h3>
                <p>Plateformes collaboratives : Trello, Notion, Canva, WhatsApp Business, Google Workspace</p>
              </motion.div>

              <motion.div
                className="value-card"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-heart-line"></i>
                <h3>Approche Humaine</h3>
                <p>Proximité, confiance, réactivité et discrétion personnalisée</p>
              </motion.div>

              <motion.div
                className="value-card"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-file-chart-line"></i>
                <h3>Processus Standardisés</h3>
                <p>Méthodes claires, livrables soignés et bilans réguliers</p>
              </motion.div>

              <motion.div
                className="value-card"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-links-line"></i>
                <h3>Réseau de Partenaires</h3>
                <p>Accès à un vivier de consultants spécialisés pour vos besoins spécifiques</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Nos Tarifs */}
          <motion.div
            className="about-section pricing-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Nos Tarifs</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <i className="ri-flashlight-line"></i>
                <h3>Ponctuel</h3>
                <p className="pricing-desc">Pour une mission précise ou un besoin immédiat</p>
                <ul>
                  <li>Facturation à la tâche ou à l'heure</li>
                  <li>Flexibilité maximale</li>
                  <li>Sans engagement</li>
                </ul>
              </div>

              <div className="pricing-card featured">
                <div className="featured-badge">Populaire</div>
                <i className="ri-calendar-line"></i>
                <h3>Mensuel</h3>
                <p className="pricing-desc">Pour un accompagnement régulier</p>
                <ul>
                  <li>Formules packagées selon le volume</li>
                  <li>Engagement flexible</li>
                  <li>Suivi personnalisé</li>
                </ul>
              </div>

              <div className="pricing-card">
                <i className="ri-vip-crown-line"></i>
                <h3>Annuel</h3>
                <p className="pricing-desc">Pour un partenariat long terme</p>
                <ul>
                  <li>Tarifs préférentiels</li>
                  <li>Suivi stratégique renforcé</li>
                  <li>Relation de confiance durable</li>
                </ul>
              </div>
            </div>
            <p className="pricing-note">
              <strong>→</strong> Un devis personnalisé est toujours établi après analyse de vos besoins.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="about-cta"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Prêt à externaliser vos services ?</h2>
            <p>Contactez-nous dès aujourd'hui pour discuter de vos besoins</p>
            <Link to="/contact" className="primary__btn">
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
