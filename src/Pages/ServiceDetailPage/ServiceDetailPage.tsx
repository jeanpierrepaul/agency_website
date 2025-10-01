import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import './serviceDetailPage.css';

export const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h1>Service non trouvé</h1>
          <Link to="/services" className="back-btn">← Retour aux services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <motion.section 
        className="service-detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="service-detail-hero__overlay"></div>
        <div className="container">
          <Link to="/services" className="back-link">
            <i className="ri-arrow-left-line" /> Retour aux services
          </Link>
          <motion.div
            className="service-detail-hero__icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <i className={service.icon} />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="service-detail-hero__description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {service.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-detail-main">
            {/* Left side - Text content */}
            <motion.div
              className="service-detail-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="service-intro">
                <strong>Chez DigiDesk,</strong> {service.description}
              </p>

              <div className="service-objective">
                <div className="objective-icon">
                  <div className="target-icon">
                    <div className="target-center"></div>
                  </div>
                </div>
                <div className="objective-text">
                  <h3>Notre promesse :</h3>
                  <p>{service.benefits.join(', ')}</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="service-detail-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={service.image} alt={service.title} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prestations Section */}
      <section className="service-prestations-section">
        <div className="container">
          <motion.h2
            className="prestations-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nos Prestations
          </motion.h2>
          <div className="prestations-grid">
            {service.details.map((detail, i) => {
              // Fonction intelligente pour mapper chaque prestation à une icône unique
              const getUniqueIcon = (text: string, index: number) => {
                const lower = text.toLowerCase();
                
                // Mots-clés spécifiques avec icônes uniques
                if (lower.includes('planification') && lower.includes('rendez-vous')) return 'ri-calendar-check-line';
                if (lower.includes('rédaction') && lower.includes('mail')) return 'ri-mail-send-line';
                if (lower.includes('réunion') && lower.includes('compte-rendu')) return 'ri-team-line';
                if (lower.includes('reporting') || lower.includes('pilotage')) return 'ri-bar-chart-box-line';
                
                if (lower.includes('visuels') && lower.includes('réseaux sociaux')) return 'ri-image-edit-line';
                if (lower.includes('calendrier') && lower.includes('éditorial')) return 'ri-calendar-event-line';
                if (lower.includes('newsletter') && lower.includes('impactante')) return 'ri-mail-star-line';
                if (lower.includes('campagne') && lower.includes('communication')) return 'ri-megaphone-line';
                
                if (lower.includes('facturation') || lower.includes('émission')) return 'ri-file-text-line';
                if (lower.includes('archivage') && lower.includes('document')) return 'ri-folder-open-line';
                if (lower.includes('déclaration') && (lower.includes('tva') || lower.includes('irpp'))) return 'ri-file-list-3-line';
                if (lower.includes('rapprochement') && lower.includes('bancaire')) return 'ri-bank-card-line';
                if (lower.includes('trésorerie') || lower.includes('budget')) return 'ri-money-dollar-circle-line';
                
                if (lower.includes('contrat') && lower.includes('rédaction')) return 'ri-file-edit-line';
                if (lower.includes('cgv') || lower.includes('révision')) return 'ri-shield-check-line';
                if (lower.includes('création') && lower.includes('entreprise')) return 'ri-building-2-line';
                if (lower.includes('veille') && lower.includes('juridique')) return 'ri-search-eye-line';
                if (lower.includes('contentieux') || lower.includes('litige')) return 'ri-scales-3-line';
                
                if (lower.includes('analyse') && lower.includes('besoin')) return 'ri-search-2-line';
                if (lower.includes('comparaison') && lower.includes('offre')) return 'ri-contrast-2-line';
                if (lower.includes('souscription')) return 'ri-checkbox-circle-line';
                if (lower.includes('sinistre')) return 'ri-alert-line';
                if (lower.includes('veille') && lower.includes('continue')) return 'ri-eye-line';
                
                if (lower.includes('stratégie') && lower.includes('rse')) return 'ri-lightbulb-flash-line';
                if (lower.includes('gouvernance') && lower.includes('locale')) return 'ri-government-line';
                if (lower.includes('environnement') || lower.includes('veille environnementale')) return 'ri-leaf-line';
                if (lower.includes('réseau') && lower.includes('partenaire')) return 'ri-links-line';
                
                if (lower.includes('stratégie') && lower.includes('image')) return 'ri-user-star-line';
                if (lower.includes('gestion') && lower.includes('réseaux sociaux')) return 'ri-smartphone-line';
                if (lower.includes('veille') && lower.includes('médiatique')) return 'ri-newspaper-line';
                if (lower.includes('gestion') && lower.includes('crise')) return 'ri-shield-star-line';
                if (lower.includes('rédaction') && lower.includes('discours')) return 'ri-quill-pen-line';
                
                // Fallback avec icônes variées basées sur l'index
                const fallbackIcons = [
                  'ri-star-line', 'ri-trophy-line', 'ri-rocket-line', 'ri-presentation-line',
                  'ri-bookmark-line', 'ri-flag-line', 'ri-compass-line', 'ri-map-pin-line'
                ];
                return fallbackIcons[index % fallbackIcons.length];
              };

              const icon = getUniqueIcon(detail, i);

              return (
                <motion.div
                  key={i}
                  className="prestation-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="prestation-icon">
                    <i className={icon}></i>
                  </div>
                  <p>{detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-detail-content">
        <div className="container">
          <motion.div
            className="service-detail-cta"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Intéressé par ce service ?</h2>
            <p>Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé</p>
            <div className="cta-buttons">
              <Link to="/contact" className="primary__btn">
                Demander un devis
              </Link>
              <Link to="/services" className="secondary__btn">
                Voir tous les services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
