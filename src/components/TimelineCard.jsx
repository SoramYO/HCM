import { motion } from 'framer-motion';

const TimelineCard = ({ title, content, date, index, icon: Icon }) => {
  return (
    <motion.div
      className="flex gap-4 relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="w-1 bg-primary relative">
        <div className="absolute w-10 h-10 bg-primary rounded-full -left-4 flex items-center justify-center">
          {Icon && <Icon className="text-white text-lg" />}
        </div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6 mb-8 ml-4">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;