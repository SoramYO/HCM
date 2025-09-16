import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaThumbsUp, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const scenarios = [
  {
    id: 1,
    title: "Tình huống 1: Phát hiện dấu hiệu tham nhũng",
    description: "Trong quá trình công tác, bạn phát hiện một số dấu hiệu bất thường trong việc sử dụng ngân sách. Với tư cách là cán bộ, bạn sẽ:",
    options: [
      {
        id: "a",
        text: "Im lặng, vì sợ ảnh hưởng đến quan hệ đồng nghiệp",
        feedback: {
          type: "negative",
          message: "Đây không phải là lựa chọn đúng đắn. Im lặng trước các dấu hiệu tham nhũng đồng nghĩa với việc tiếp tay cho hành vi sai trái, vi phạm đạo đức công vụ và quy định của Đảng.",
          icon: FaExclamationTriangle
        }
      },
      {
        id: "b",
        text: "Báo cáo lên cấp trên và cơ quan chức năng",
        feedback: {
          type: "positive",
          message: "Đây là lựa chọn đúng đắn! Việc báo cáo kịp thời giúp ngăn chặn hành vi tham nhũng, thể hiện tinh thần trách nhiệm và đạo đức công vụ của người cán bộ.",
          icon: FaCheckCircle
        }
      },
      {
        id: "c",
        text: "Tự mình tìm hiểu và xử lý nội bộ",
        feedback: {
          type: "neutral",
          message: "Mặc dù có thiện chí, nhưng việc tự xử lý có thể không hiệu quả và thiếu tính pháp lý. Nên báo cáo cho cơ quan chức năng để có biện pháp xử lý phù hợp.",
          icon: FaThumbsUp
        }
      }
    ]
  },
  {
    id: 2,
    title: "Tình huống 2: Đề xuất chính sách mới",
    description: "Bạn được giao nhiệm vụ đề xuất một chính sách mới. Có người gợi ý 'hợp tác' để đẩy nhanh tiến độ. Bạn sẽ:",
    options: [
      {
        id: "a",
        text: "Từ chối và báo cáo hành vi tiêu cực",
        feedback: {
          type: "positive",
          message: "Xuất sắc! Đây là cách ứng xử đúng đắn, thể hiện tính liêm chính và trách nhiệm của người cán bộ.",
          icon: FaCheckCircle
        }
      },
      {
        id: "b",
        text: "Đồng ý để công việc thuận lợi",
        feedback: {
          type: "negative",
          message: "Sai lầm nghiêm trọng! Việc 'hợp tác' này chính là hành vi tham nhũng, có thể dẫn đến hậu quả nghiêm trọng.",
          icon: FaExclamationTriangle
        }
      },
      {
        id: "c",
        text: "Tìm cách trì hoãn, không rõ ràng",
        feedback: {
          type: "neutral",
          message: "Chưa thực sự đúng đắn. Thay vì trì hoãn, cần có thái độ rõ ràng và kiên quyết với các hành vi tiêu cực.",
          icon: FaThumbsUp
        }
      }
    ]
  }
];

const InteractiveScenario = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const scenario = scenarios[currentScenario];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <FaUserTie className="text-2xl text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{scenario.title}</h3>
            <p className="text-gray-600">Đặt mình vào vai trò người cán bộ</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-8">{scenario.description}</p>

        <div className="space-y-4">
          {scenario.options.map((option) => (
            <motion.button
              key={option.id}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left
                ${selectedOption?.id === option.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-primary/50'
                }
                ${showFeedback ? 'cursor-default' : 'hover:shadow-md'}
              `}
              onClick={() => !showFeedback && handleOptionSelect(option)}
              whileHover={!showFeedback ? { scale: 1.01 } : {}}
              disabled={showFeedback}
            >
              <span className="font-medium">{option.text}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && selectedOption && (
            <motion.div
              className={`mt-8 p-6 rounded-lg
                ${selectedOption.feedback.type === 'positive' ? 'bg-green-50' :
                  selectedOption.feedback.type === 'negative' ? 'bg-red-50' : 'bg-blue-50'
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-start gap-4">
                <selectedOption.feedback.icon 
                  className={`text-2xl mt-1
                    ${selectedOption.feedback.type === 'positive' ? 'text-green-500' :
                      selectedOption.feedback.type === 'negative' ? 'text-red-500' : 'text-blue-500'
                    }
                  `}
                />
                <div>
                  <h4 className="font-bold text-lg mb-2">Phản hồi:</h4>
                  <p className="text-gray-700">{selectedOption.feedback.message}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                {currentScenario < scenarios.length - 1 ? (
                  <button
                    className="btn btn-primary"
                    onClick={handleNextScenario}
                  >
                    Tình huống tiếp theo
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleRestart}
                  >
                    Thử lại
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveScenario;
