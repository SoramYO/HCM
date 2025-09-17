import { FaQuestionCircle, FaBrain, FaLightbulb, FaUserTie } from 'react-icons/fa';
import Quiz from '../components/Quiz';
import InteractiveScenario from '../components/InteractiveScenario';
import SectionTitle from '../components/SectionTitle';

const quizData = {
  question: "Theo bạn, yếu tố nào quan trọng nhất để chống tham nhũng hiệu quả?",
  options: [
    "Kiểm soát quyền lực và trách nhiệm giải trình",
    "Nâng cao đạo đức cách mạng của cán bộ, đảng viên",
    "Phát huy vai trò giám sát của nhân dân",
    "Hoàn thiện thể chế, chính sách"
  ],
  correctAnswer: "Kiểm soát quyền lực và trách nhiệm giải trình"
};

const Interactive = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/interactive-bg.jpg')] bg-cover bg-center"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container relative z-10 text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuestionCircle className="text-4xl md:text-6xl mx-auto mb-6 text-accent" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Trải nghiệm tương tác
            </h1>
            <p className="text-xl text-gray-200">
              Hãy đặt mình vào các tình huống thực tế và đưa ra quyết định
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* Interactive Scenarios Section */}
        <section className="section">
          <div className="container">
            <SectionTitle
              title="Bạn sẽ làm gì?"
              subtitle="Đặt mình vào vai trò người cán bộ và đưa ra quyết định trong các tình huống thực tế"
            />
            
            <InteractiveScenario />
          </div>
        </section>

        {/* Quiz Section */}
        <section className="section bg-white">
          <div className="container">
            <SectionTitle
              title="Kiểm tra kiến thức"
              subtitle="Hãy chia sẻ quan điểm của bạn về công tác phòng, chống tham nhũng"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaBrain className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Suy nghĩ phản biện</h3>
                </div>
                <p className="text-gray-600">
                  Hãy suy nghĩ kỹ về các lựa chọn và đưa ra quyết định dựa trên 
                  hiểu biết của bạn về vấn đề tham nhũng và các giải pháp phòng chống.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaLightbulb className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Học hỏi từ giải thích</h3>
                </div>
                <p className="text-gray-600">
                  Sau khi trả lời, bạn sẽ được giải thích chi tiết về câu trả lời 
                  và tại sao nó quan trọng trong công tác phòng chống tham nhũng.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Quiz {...quizData} />

              <motion.div
                className="mt-16 bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Giải thích chi tiết
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Kiểm soát quyền lực và trách nhiệm giải trình là yếu tố then chốt 
                  trong phòng, chống tham nhũng. Khi quyền lực được kiểm soát chặt chẽ, 
                  công khai, minh bạch, kết hợp với cơ chế giám sát hiệu quả từ 
                  nhân dân và các cơ quan chức năng, sẽ hạn chế được các hành vi 
                  lạm quyền, tham nhũng. Đồng thời, việc đề cao trách nhiệm giải trình 
                  buộc người có chức vụ, quyền hạn phải thường xuyên báo cáo, 
                  làm rõ các quyết định và hành động của mình.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Interactive;