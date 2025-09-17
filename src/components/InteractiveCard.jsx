import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveCard = ({ title, content, icon: Icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front */}
      <div
        className={`absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center
          ${isFlipped ? 'backface-hidden' : ''}`}
      >
        {Icon && <Icon className="text-4xl text-primary mb-4" />}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">Click để xem chi tiết</p>
      </div>

      {/* Back */}
      <div
        className={`absolute inset-0 bg-secondary text-white rounded-xl shadow-lg p-6 flex items-center justify-center text-center
          ${!isFlipped ? 'backface-hidden' : ''}`}
        style={{ transform: 'rotateY(180deg)' }}
      >
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default InteractiveCard;


