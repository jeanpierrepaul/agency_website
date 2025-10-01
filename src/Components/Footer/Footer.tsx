import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './footer.css';
import logo0 from '../../images/logo0.png';
export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();
  const quickLinks = [
    {
      name: 'Services',
      content: [
        {
          path: '#services',
          display: 'Gestion administrative',
        },
        {
          path: '#services',
          display: 'Communication',
        },
        {
          path: '#services',
          display: 'Support comptable',
        },
      ],
    },
    {
      name: 'Entreprise',
      content: [
        {
          path: '#about',
          display: 'About Us',
        },
        {
          path: '#services',
          display: 'Nos services',
        },
        {
          path: '#contact',
          display: 'Contact',
        },
      ],
    },
    {
      name: 'Contact',
      content: [
        {
          path: 'tel:+22890081372',
          display: '(+228) 90 08 13 72',
        },
        {
          path: 'mailto:contact@digidesk.pro',
          display: 'contact@digidesk.pro',
        },
        {
          path: 'https://www.digidesk.pro',
          display: 'www.digidesk.pro',
        },
      ],
    },
  ];
  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer__wrapper">
          <div
            className="footer__logo"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <img src={logo0} alt="DigiDesk" className="footer__logo-image" />
            <p className="description footer__desc">Votre Bureau externalisé</p>
            <p className="small__text description">
              DigiDesk propose des solutions d'appui professionnel modulables 
              pour les entrepreneurs, PME et personnalités publiques. 
              Nous vous accompagnons avec expertise et flexibilité dans tous 
              vos projets administratifs, juridiques, comptables et stratégiques.
            </p>
            <p className="small__text description" style={{marginTop: '10px'}}>
              📍 Lomé – Togo
            </p>
            <div className="footer__social-links" style={{marginTop: '15px', display: 'flex', gap: '15px'}}>
              <a 
                href="https://wa.me/22890081372" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                title="WhatsApp"
              >
                <i className="ri-whatsapp-line" style={{fontSize: '1.5rem'}} />
              </a>
              <a 
                href="https://twitter.com/digidesk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                title="X (Twitter)"
              >
                <i className="ri-twitter-x-line" style={{fontSize: '1.5rem'}} />
              </a>
            </div>
          </div>
          <div
            className="footer__quick-links-wrapper"
            style={{
              transform: isInView ? 'none' : 'translateX(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            {quickLinks.map((i, idx) => (
              <div key={idx} className="footer__quick-links">
                <h3 className="quick__links-title">{i.name}</h3>
                <ul className="quick__links">
                  {i.content.map((link, idx) => (
                    <li
                      key={`link-${idx}`}
                      className="quick__link-item"
                    >
                      <a key={idx} href={link.path}>
                        {link.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="copyright">
          Copyright© {year}, developed by{' '}
          <a href="https://elitistes.com">ELITISTES</a>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
