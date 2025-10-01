import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './newsletter.css';
export const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="newsletter" id="contact" ref={ref}>
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h2
              style={{
                transform: isInView ? 'none' : 'translateX(-100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              Contactez-nous -
              <span className="highlight">
                {' '}
                Parlons de votre projet !
              </span>
            </h2>
            <form
              className="newsletter__form"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              <input
                type="email"
                className="email-input"
                placeholder="Votre email..."
              />
              <input
                type="submit"
                className="primary__btn"
                value="Nous contacter"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
