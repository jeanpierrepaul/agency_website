import { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  icon: string;
  title: string;
  bgImage: string;
  isInView: boolean;
  idx: number;
}

export const Card: FC<Props> = ({ id, icon, title, bgImage, isInView, idx }) => {
  return (
    <Link to={`/services/${id}`} className="services__item-link">
      <motion.div 
        className="services__item"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{
          duration: 0.6,
          delay: idx * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          y: -12,
          scale: 1.03,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <div className="services__bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="services__content">
          <div className="services__front">
            <motion.span 
              className="services__icon"
              whileHover={{
                scale: 1.15,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <i className={icon} />
            </motion.span>
            <h3 className="services__title">{title}</h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
