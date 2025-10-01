import { useRef } from 'react';
import { Card } from './Card';
import './services.css';
import { useInView } from 'framer-motion';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.PNG';

const servicesData = [
    {
        id: "gestion-administrative",
        icon: "ri-file-list-3-line",
        title: "Gestion Administrative",
        bgImage: img1,
    },
    {
        id: "communication-visibilite",
        icon: "ri-megaphone-line",
        title: "Communication & Visibilité",
        bgImage: img2,
    },
    {
        id: "support-comptable-fiscal",
        icon: "ri-calculator-line",
        title: "Support Comptable & Fiscal",
        bgImage: img3,
    },
    {
        id: "conseil-appui-juridique",
        icon: "ri-scales-3-line",
        title: "Conseil & Appui Juridique",
        bgImage: img4,
    },
    {
        id: "conseil-assurance",
        icon: "ri-shield-check-line",
        title: "Conseil en Assurance",
        bgImage: img5,
    },
    {
        id: "gouvernance-rse",
        icon: "ri-leaf-line",
        title: "Gouvernance & RSE",
        bgImage: img6,
    },
    {
        id: "offre-personnalite-publique",
        icon: "ri-vip-crown-line",
        title: "Offre Personnalité Publique",
        bgImage: img7,
    },
]

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Nos Services</h6>
          <h2>Des solutions modulables pour</h2>
          <h2 className="highlight">votre réussite</h2>
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card key={`services__item-${idx}`} id={i.id} title={i.title} icon={i.icon} bgImage={i.bgImage} isInView={isInView} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};
