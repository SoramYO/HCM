import { motion } from 'framer-motion';
import { FaBook, FaExclamationTriangle, FaSearch, FaHandshake, FaQuoteRight, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const concepts = [
  {
    title: "Khái niệm tham nhũng",
    content: `Theo Luật Phòng, chống tham nhũng năm 2018, tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.`,
    details: [
      "Tham ô tài sản",
      "Nhận hối lộ",
      "Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản",
      "Lợi dụng chức vụ, quyền hạn trong khi thi hành nhiệm vụ",
      "Lạm quyền trong khi thi hành nhiệm vụ vì vụ lợi"
    ],
    icon: FaBook,
    color: "from-blue-500 to-blue-700",
    image: "/images/concept.jpg"
  },
  {
    title: "Đặc điểm của tham nhũng",
    content: "Tham nhũng có những đặc điểm riêng biệt về chủ thể, hành vi và hậu quả:",
    details: [
      "Chủ thể là người có chức vụ, quyền hạn",
      "Hành vi lợi dụng chức vụ, vi phạm pháp luật",
      "Động cơ vụ lợi cá nhân",
      "Gây thiệt hại cho Nhà nước và xã hội",
      "Tính chất nghiêm trọng và phức tạp"
    ],
    icon: FaSearch,
    color: "from-purple-500 to-purple-700",
    image: "/images/cases.jpg"
  },
  {
    title: "Nguyên nhân của tham nhũng",
    content: "Tham nhũng xuất phát từ nhiều nguyên nhân khách quan và chủ quan:",
    details: [
      "Cơ chế quản lý còn nhiều sơ hở",
      "Công tác kiểm tra, giám sát hạn chế",
      "Suy thoái về tư tưởng chính trị, đạo đức",
      "Lợi dụng kẽ hở của chính sách",
      "Thiếu tu dưỡng, rèn luyện"
    ],
    icon: FaExclamationTriangle,
    color: "from-red-500 to-red-700",
    image: "/images/causes.jpg"
  },
  {
    title: "Giải pháp phòng, chống tham nhũng",
    content: "Các giải pháp toàn diện từ thể chế đến con người:",
    details: [
      "Hoàn thiện hệ thống pháp luật",
      "Tăng cường công khai, minh bạch",
      "Đẩy mạnh cải cách hành chính",
      "Nâng cao đạo đức công vụ",
      "Xử lý nghiêm minh các vụ việc"
    ],
    icon: FaHandshake,
    color: "from-green-500 to-green-700",
    image: "/images/solutions.jpg"
  }
];

const quotes = [
  {
    text: "Tham nhũng là kẻ thù của sự phát triển và tiến bộ xã hội",
    author: "Tổng Bí thư Nguyễn Phú Trọng"
  },
  {
    text: "Chống tham nhũng là trách nhiệm của toàn Đảng, toàn dân",
    author: "Nghị quyết Đại hội XIII"
  }
];

const Theory = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/theory-bg.jpg')] bg-cover bg-center"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container relative z-10 text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <FaBook className="text-5xl md:text-7xl mx-auto mb-8 text-accent" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lý luận cơ bản về
              <span className="text-accent"> Tham nhũng</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Tìm hiểu sâu sắc về khái niệm, đặc điểm và bản chất của tham nhũng 
              trong bối cảnh hiện nay
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Khám phá thêm</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <FaQuoteRight className="text-4xl text-primary mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-serif italic mb-4">
                {quotes[0].text}
              </p>
              <p className="text-lg text-gray-600">- {quotes[0].author} -</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`bg-gradient-to-r ${concept.color} rounded-t-2xl p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <concept.icon className="text-3xl" />
                    </div>
                    <h2 className="text-3xl font-bold">{concept.title}</h2>
                  </div>
                  <p className="text-xl text-gray-100">{concept.content}</p>
                </div>
                
                <div className="bg-white rounded-b-2xl shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {concept.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <FaArrowRight className="text-primary mt-1" />
                          <p className="text-gray-700">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <img 
                        src={concept.image} 
                        alt={concept.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* References */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaBook className="text-primary" />
              Tài liệu tham khảo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-bold">1.</span> Luật Phòng, chống tham nhũng năm 2018
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">2.</span> Nghị quyết Đại hội XIII của Đảng
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-bold">3.</span> Giáo trình Lý luận chính trị
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">4.</span> Các văn bản chỉ đạo về phòng, chống tham nhũng
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Theory;
