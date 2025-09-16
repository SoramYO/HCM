import { motion } from 'framer-motion';

const ImageCard = ({ src, alt, caption }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg group"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-sm">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ImageCard;
