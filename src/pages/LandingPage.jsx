import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaBalanceScale, FaUsers, FaQuoteLeft, FaChartLine } from 'react-icons/fa';

const impactNumbers = [
  {
    number: "3,000+",
    label: "Vụ án được điều tra",
    icon: FaBalanceScale
  },
  {
    number: "500+",
    label: "Nghìn tỷ đồng thu hồi",
    icon: FaChartLine
  },
  {
    number: "2,000+",
    label: "Cán bộ bị xử lý",
    icon: FaUsers
  }
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/90 z-10" />
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/corruption.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Tham nhũng – Thách thức cho
              <span className="text-accent"> Đảng và Nhà nước</span>
            </h1>

            <motion.div
              className="text-xl md:text-2xl mb-8 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaQuoteLeft className="inline-block mr-2 text-accent" />
              <span>Tham nhũng là từ trong Đảng mà ra</span>
              <p className="text-lg mt-2">- Đại biểu Dương Trung Quốc -</p>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Hãy cùng tìm hiểu về thực trạng, nguyên nhân và giải pháp 
              cho vấn đề tham nhũng - một trong những thách thức lớn nhất 
              đối với sự phát triển của đất nước.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button
                className="btn btn-accent text-lg group"
                onClick={() => navigate('/tu-tuong')}
              >
                Bắt đầu hành trình
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                className="btn bg-white/20 text-white hover:bg-white/30 text-lg"
                onClick={() => navigate('/boi-canh')}
              >
                Tìm hiểu bối cảnh
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Cuộn xuống</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Impact Numbers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactNumbers.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="text-4xl text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">{item.number}</h2>
                  <p className="text-lg text-gray-600">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hãy cùng chung tay đấu tranh chống tham nhũng
            </h2>
            <p className="text-lg mb-8">
              Mỗi người dân đều có thể đóng góp vào công cuộc phòng, chống tham nhũng 
              thông qua việc nâng cao nhận thức và tích cực tham gia giám sát.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;