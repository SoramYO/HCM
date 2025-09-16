import { motion } from 'framer-motion';
import { 
  FaBalanceScale, 
  FaHandshake, 
  FaUsers, 
  FaExclamationTriangle,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';
import InteractiveCard from '../components/InteractiveCard';
import SectionTitle from '../components/SectionTitle';
import ImageCard from '../components/ImageCard';

const riskData = [
  {
    icon: FaBalanceScale,
    title: "Suy giảm niềm tin",
    content: "Tham nhũng làm suy giảm nghiêm trọng niềm tin của nhân dân vào Đảng và Nhà nước, tạo khoảng cách giữa Đảng với quần chúng.",
    image: "/images/trust.jpg"
  },
  {
    icon: FaHandshake,
    title: "Suy thoái đạo đức",
    content: "Tham nhũng dẫn đến sự suy thoái về tư tưởng chính trị, đạo đức, lối sống của một bộ phận cán bộ, đảng viên.",
    image: "/images/ethics.jpg"
  },
  {
    icon: FaUsers,
    title: "Mất đoàn kết",
    content: "Tham nhũng phá vỡ tính đoàn kết, thống nhất trong Đảng, làm suy yếu sức mạnh và năng lực lãnh đạo của Đảng.",
    image: "/images/unity.jpg"
  },
  {
    icon: FaExclamationTriangle,
    title: "Đe dọa chế độ",
    content: "Tham nhũng là nguy cơ trực tiếp đe dọa sự tồn vong của Đảng và chế độ xã hội chủ nghĩa.",
    image: "/images/threat.jpg"
  }
];

const statisticsData = [
  {
    icon: FaChartLine,
    title: "Thiệt hại kinh tế",
    value: "Hàng nghìn tỷ đồng",
    image: "/images/economic.jpg"
  },
  {
    icon: FaShieldAlt,
    title: "Vụ án được phát hiện",
    value: "Tăng 50% mỗi năm",
    image: "/images/cases.jpg"
  }
];

const CorruptionRisks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/corruption.jpg')] bg-cover bg-center"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container relative z-10 text-white text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nguy cơ từ tham nhũng
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Phân tích tác động và hệ lụy của tham nhũng đối với Đảng và Nhà nước
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Những tác động nghiêm trọng"
            subtitle="Tham nhũng gây ra những hậu quả nặng nề cho đất nước và xã hội"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {riskData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Thống kê về tham nhũng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {statisticsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-2xl text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-2xl text-primary font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Tác động tổng hợp
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Tham nhũng không chỉ gây thiệt hại về kinh tế mà còn làm suy giảm 
                  nghiêm trọng uy tín của Đảng, làm mất lòng tin của nhân dân, 
                  tạo khoảng cách giữa Đảng với quần chúng. Điều này có thể dẫn đến 
                  khủng hoảng về niềm tin và sự ủng hộ của nhân dân - yếu tố quyết định 
                  sự tồn vong của Đảng và chế độ.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <ImageCard
                  src="/images/impact.jpg"
                  alt="Tác động của tham nhũng"
                  caption="Tham nhũng - Mối đe dọa nghiêm trọng đến sự phát triển của đất nước"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorruptionRisks;