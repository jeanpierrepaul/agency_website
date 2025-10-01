import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../../images/about-us.jpg';
import { ChoseUs } from './ChoseUs';
import './about.css';

const chooseData = [
  {
    icon: 'ri-settings-2-line',
    title: 'Solutions Sur-Mesure',
    description:
      'Chaque entreprise est unique. Nous analysons vos besoins réels pour concevoir des solutions parfaitement adaptées à vos enjeux, sans prestations superflues. Efficacité et pertinence garanties.',
  },
  {
    icon: 'ri-team-line',
    title: 'Expertise Pluridisciplinaire',
    description:
      'Une équipe polyvalente maîtrisant 7 domaines clés : gestion administrative, communication digitale, comptabilité, juridique, assurance, RSE et accompagnement VIP. Votre partenaire de confiance.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Flexibilité & Réactivité',
    description:
      'Formules adaptables (ponctuelle, mensuelle, annuelle) selon vos besoins et budget. Service réactif, accompagnement personnalisé et disponibilité optimale. Votre réussite, notre mission.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Pourquoi nous choisir ?</h6>
            <h2>DigiDesk, Votre Bureau externalisé</h2>
            <h2 className="highlight">pour entrepreneurs et PME</h2>
            <p className="description about__content-desc">
              Chaque structure est unique → nous proposons des solutions sur-mesure. 
              Avec 5+ contrats signés, 2+ clients permanents et 100% de clients accompagnés, 
              nous mettons notre expertise multi-sectorielle au service de votre réussite.
            </p>
            <div className="choose__us-item-wrapper">
              {chooseData.map((i, idx) => (
                <ChoseUs
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                  key={`choose__us-${idx}`}
                />
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};
