import { useRef } from 'react';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import './partners.css';
import { useInView } from 'framer-motion';

const partnersData = [
  { image: logo1, name: 'Logo 1' },
  { image: logo2, name: 'Logo 2' },
  { image: logo1, name: 'Logo 1' },
  { image: logo2, name: 'Logo 2' },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section className="our__team" ref={ref}>
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Nos Partenaires</h6>
          <h2>
            La confiance de <span className="highlight">martenaires leaders</span>
          </h2>
        </div>
        <div className="partners__slider-container">
          <div className="partners__slider">
            {[...partnersData, ...partnersData, ...partnersData].map((partner, idx) => (
              <div key={idx} className="partner__logo-item">
                <img src={partner.image} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
