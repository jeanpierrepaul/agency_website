import { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';
import { sanitizeInput, validateEmail, validatePhone, validateRequired, validateLength } from '../../utils/validation';
import './contactPage.css';

export const ContactPage = () => {
  const { addMessage } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: sanitizeInput(value)
    });
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Le nom est requis';
    } else if (!validateLength(formData.name, 2, 100)) {
      newErrors.name = 'Le nom doit contenir entre 2 et 100 caractères';
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    if (!validateRequired(formData.subject)) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Le message est requis';
    } else if (!validateLength(formData.message, 10, 1000)) {
      newErrors.message = 'Le message doit contenir entre 10 et 1000 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Sauvegarder le message dans le contexte
    addMessage(formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-hero__overlay"></div>
        <div className="container">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            className="contact-hero__subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nous sommes à votre écoute pour répondre à vos besoins
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Informations de Contact</h2>
              <p className="contact-intro">
                N'hésitez pas à nous contacter pour toute question ou demande de devis. 
                Notre équipe est disponible pour vous accompagner.
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Téléphone</h3>
                    <a href="tel:+22890081372">(+228) 90 08 13 72</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:contact@digidesk.pro">contact@digidesk.pro</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Adresse</h3>
                    <p>Lomé, Togo</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="ri-time-line"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Horaires</h3>
                    <p>Lundi - Vendredi : 8h00 - 18h00</p>
                    <p>Samedi : 9h00 - 13h00</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Suivez-nous</h3>
                <div className="social-links">
                  <a 
                    href="https://wa.me/22890081372" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="ri-whatsapp-line"></i>
                  </a>
                  <a 
                    href="https://twitter.com/digidesk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </a>
                  <a 
                    href="https://linkedin.com/company/digidesk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="ri-linkedin-line"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Envoyez-nous un Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+228 XX XX XX XX"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={errors.subject ? 'error' : ''}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="gestion-administrative">Gestion Administrative</option>
                    <option value="communication">Communication & Visibilité</option>
                    <option value="comptable">Support Comptable & Fiscal</option>
                    <option value="juridique">Conseil & Appui Juridique</option>
                    <option value="assurance">Conseil en Assurance</option>
                    <option value="gouvernance">Gouvernance & RSE</option>
                    <option value="personnalite">Offre Personnalité Publique</option>
                    <option value="autre">Autre demande</option>
                  </select>
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre besoin..."
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn">
                  <i className="ri-send-plane-line"></i>
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="contact-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.11707558632!2d1.1666319!3d6.1319346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1daa4b1a10d%3A0x3c35d61c9d1b8b0!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2s!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DigiDesk Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
