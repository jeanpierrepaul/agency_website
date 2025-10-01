import { motion } from 'framer-motion';

interface PartnerLogoProps {
  image: string;
  name: string;
}

export const PartnerLogo = ({ image, name }: PartnerLogoProps) => {
  return (
    <motion.div
      className="partner__item"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <div className="partner__logo">
        <img src={image} alt={name} />
      </div>
    </motion.div>
  );
};
