import { useState } from 'react';
import { motion } from 'framer-motion';

const Quiz = ({ question, options, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const getButtonClass = (option) => {
    if (!showResult) return 'btn btn-secondary';
    if (option === correctAnswer) return 'btn bg-green-600 text-white';
    if (option === selectedAnswer && option !== correctAnswer) return 'btn bg-red-600 text-white';
    return 'btn btn-secondary opacity-50';
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">{question}</h3>
      
      <div className="space-y-4">
        {options.map((option, index) => (
          <motion.button
            key={index}
            className={`w-full ${getButtonClass(option)}`}
            onClick={() => !showResult && handleAnswer(option)}
            whileHover={!showResult ? { scale: 1.02 } : {}}
            whileTap={!showResult ? { scale: 0.98 } : {}}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {showResult && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {selectedAnswer === correctAnswer ? (
            <p className="text-green-600 font-bold">Chính xác!</p>
          ) : (
            <p className="text-red-600 font-bold">
              Chưa chính xác. Đáp án đúng là: {correctAnswer}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;


