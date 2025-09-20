import { motion } from 'framer-motion';
import { FaRobot, FaBook, FaLightbulb, FaHandshake, FaCheck } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const AIUsage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaRobot className="text-4xl md:text-6xl mx-auto mb-6 text-accent" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI Usage Documentation
            </h1>
            <p className="text-xl text-gray-200">
              FA25_HCM202_SE1739 - ST
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Project Info */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaBook className="text-primary" />
                Thông tin dự án
              </h2>
              <div className="space-y-2">
                <p><strong>Mã lớp:</strong> FA25_HCM202_SE1739</p>
                <p><strong>Nhóm:</strong> ST</p>
                <p><strong>Độ hoàn thành:</strong> 100%</p>
              </div>
            </motion.div>

            {/* AI Tools Used */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaLightbulb className="text-primary" />
                Công cụ AI sử dụng
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">1. OpenAI GPT</h3>
                  <p className="text-gray-600">
                    - Mục đích: Hỗ trợ xây dựng cấu trúc website và tạo components<br />
                    - Prompt chính: Yêu cầu tạo layout, components và tích hợp animations<br />
                    - Kết quả: Code base cho website<br />
                    - Chỉnh sửa: Tùy chỉnh giao diện, thêm nội dung và hình ảnh phù hợp
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Academic Integrity */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaHandshake className="text-primary" />
                Cam kết liêm chính học thuật
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Minh bạch</h3>
                    <p className="text-gray-600">
                      Tài liệu này liệt kê đầy đủ công cụ AI được sử dụng, mục đích, 
                      prompt chính, kết quả và phần chỉnh sửa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Có trách nhiệm</h3>
                    <p className="text-gray-600">
                      Mọi thông tin do AI sinh ra đều được kiểm chứng với giáo trình 
                      Lý luận chính trị, nghị quyết và văn bản chính thống.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Sáng tạo</h3>
                    <p className="text-gray-600">
                      AI chỉ đóng vai trò hỗ trợ trong việc tạo sơ đồ, quiz và 
                      các thành phần tương tác. Nội dung và cấu trúc chính do 
                      sinh viên tự biên soạn.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Cam kết của sinh viên</h3>
                  <p className="text-gray-700">
                    Tôi cam kết không để AI làm thay toàn bộ bài tập. AI chỉ được 
                    sử dụng như một công cụ hỗ trợ. Mọi nội dung cuối cùng đều do 
                    tôi chịu trách nhiệm và đã được kiểm chứng với các nguồn 
                    thông tin chính thống.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIUsage;

