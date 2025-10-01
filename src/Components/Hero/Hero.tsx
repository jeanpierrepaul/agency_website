import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div
              className="hero__title"
              style={{
                transform: isInView ? 'none' : 'translateY(-50px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.8s ease-out 0.3s',
              }}
            >
              <h2>DigiDesk</h2>
              <h2 className="highlight">Votre Bureau externalisé</h2>
            </div>
            <p 
              className="description"
              style={{
                transform: isInView ? 'none' : 'translateY(30px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s',
              }}
            >
              Libérez votre potentiel avec nos solutions d'appui professionnel modulables. 
              Entrepreneurs, PME et personnalités publiques : nous gérons votre administratif, 
              communication, comptabilité, juridique et bien plus. Concentrez-vous sur l'essentiel, 
              nous nous occupons du reste.
            </p>
            <div 
              className="hero__btns"
              style={{
                transform: isInView ? 'none' : 'translateY(30px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.8s ease-out 0.9s',
              }}
            >
              <button className="primary__btn">
                En savoir plus
              </button>
              <button className="secondary__btn">
                Nos services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
