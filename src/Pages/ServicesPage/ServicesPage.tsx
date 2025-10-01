import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './servicesPage.css';

export const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="services-page" ref={ref}>
      {/* Hero Section */}
      <motion.section 
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="services-hero__overlay"></div>
        <div className="container">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Nos Services Professionnels</h1>
          </motion.div>
          <motion.p 
            className="services-hero__description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chaque projet est appuyé par des expertises complémentaires afin de vous offrir une vision stratégique unique. Faites le choix d'une agence digitale 360°.
          </motion.p>
          <motion.a
            href="#contact"
            className="services-hero__btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Contactez-nous →
          </motion.a>
        </div>
      </motion.section>

      {/* Services Details */}
      <section className="services-details">
        <div className="container">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx} 
              className={`service-detail ${idx % 2 === 0 ? 'service-detail--left' : 'service-detail--right'}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div 
                className="service-detail__image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
                <div className="service-detail__image-overlay"></div>
              </motion.div>
              <motion.div 
                className="service-detail__content"
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="service-detail__icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={service.icon} />
                </motion.div>
                <h2>{service.title}</h2>
                <p className="service-detail__description">{service.description}</p>
                
                <Link 
                  to={`/services/${service.id}`} 
                  className="service-detail__btn"
                >
                  En savoir plus →
                </Link>

                <div className="service-detail__section">
                  <h3>Nos prestations</h3>
                  <ul className="service-detail__list">
                    {service.details.slice(0, 4).map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ x: 10, color: 'var(--primary-color)' }}
                      >
                        <i className="ri-check-line" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="services-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prêt à démarrer ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </motion.p>
          <motion.a 
            href="#contact" 
            className="primary__btn"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Nous contacter
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};
