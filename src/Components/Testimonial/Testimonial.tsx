import { useRef } from 'react';
import { CustomerSlide } from './CustomerSlide';
import './testimonial.css';
import { useInView } from 'framer-motion';
import { useData } from '../../context/DataContext';
import img1 from '../../images/ava-1.jpg';

export const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { testimonials } = useData();
  
  // Filtrer uniquement les témoignages publiés
  const publishedTestimonials = testimonials.filter(t => t.published).slice(0, 3);

  return (
    <section className="testimonial" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="slider__content-top">
          <h6 className="subtitle">Témoignages</h6>
          <h2>
            La confiance de plus de
            <span className="highlight"> 100 clients !</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          {publishedTestimonials.map((testimonial) => (
            <CustomerSlide
              key={`testimonial-${testimonial.id}`}
              name={testimonial.name}
              position={`${testimonial.position}, ${testimonial.company}`}
              description={testimonial.content}
              image={testimonial.image || img1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
