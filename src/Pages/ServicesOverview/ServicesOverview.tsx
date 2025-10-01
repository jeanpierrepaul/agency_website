import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './servicesOverview.css';

export const ServicesOverview = () => {
  return (
    <div className="services-overview">
      <div className="services-overview__container">
        {/* Left Circle Section */}
        <motion.div 
          className="services-overview__circle"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="circle-content">
            <h2 className="circle-title">NOTRE</h2>
            <h2 className="circle-title">SOLUTION</h2>
            <div className="circle-arrows">
              <i className="ri-arrow-right-line"></i>
              <i className="ri-arrow-right-line"></i>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div 
          className="services-overview__content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="content-header">
            <h1 className="main-title">DigiDesk, votre bureau externalisé</h1>
            <p className="main-subtitle">
              Une solution agile et professionnelle pour vous accompagner dans la gestion quotidienne de votre activité.
            </p>
          </div>

          <div className="services-section">
            <div className="services-header">
              <div className="services-icon">
                <i className="ri-team-line"></i>
                <i className="ri-settings-3-line"></i>
              </div>
              <h2 className="services-title">NOS PÔLES DE SERVICES</h2>
            </div>

            <div className="services-grid">
              {servicesData.map((service, idx) => (
                <motion.div
                  key={service.id}
                  className="service-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                >
                  <Link to={`/services/${service.id}`} className="service-link">
                    <i className={service.icon}></i>
                    <span>{service.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="services-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p>« Externalisez. Concentrez-vous sur l'essentiel. »</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
