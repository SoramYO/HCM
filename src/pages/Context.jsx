import { motion } from 'framer-motion';
import { FaChartLine, FaGlobe, FaBalanceScale, FaHandshake, FaNewspaper } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ImageCard from '../components/ImageCard';

const contextData = [
  {
    icon: FaChartLine,
    title: "Bối cảnh kinh tế",
    content: [
      "Tăng trưởng GDP 5.05% năm 2023, phục hồi sau đại dịch",
      "Thu hút FDI đạt 36.61 tỷ USD (2023), tăng 32.1%",
      "Kinh tế số phát triển mạnh mẽ, chiếm 14.26% GDP",
      "Tham nhũng gây thiệt hại hàng nghìn tỷ đồng mỗi năm"
    ],
    image: "/images/economic.jpg"
  },
  {
    icon: FaGlobe,
    title: "Bối cảnh quốc tế",
    content: [
      "Cạnh tranh chiến lược giữa các nước lớn gay gắt",
      "Xung đột địa chính trị ảnh hưởng đến kinh tế toàn cầu",
      "Việt Nam hội nhập sâu rộng với thế giới",
      "Áp lực minh bạch hóa và chống tham nhũng quốc tế"
    ],
    image: "/images/international.jpg"
  },
  {
    icon: FaBalanceScale,
    title: "Bối cảnh chính trị",
    content: [
      "Nghị quyết Đại hội XIII về xây dựng, chỉnh đốn Đảng",
      "Chiến lược quốc gia phòng chống tham nhũng đến 2030",
      "Đẩy mạnh cải cách hành chính, chuyển đổi số",
      "Tăng cường kỷ luật, kỷ cương trong Đảng"
    ],
    image: "/images/political.jpg"
  }
];

const recentCases = [
  {
    title: "Vụ án Vạn Thịnh Phát",
    description: "Thu hồi hơn 600 tỷ đồng và nhiều tài sản có giá trị",
    date: "2023",
    image: "/images/case1.jpg"
  },
  {
    title: "Vụ án AIC",
    description: "Thiệt hại hơn 152 tỷ đồng cho ngân sách nhà nước",
    date: "2023",
    image: "/images/case2.jpg"
  },
  {
    title: "Vụ án Việt Á",
    description: "Thu hồi hơn 1.200 tỷ đồng tài sản tham nhũng",
    date: "2022-2023",
    image: "/images/case3.jpg"
  }
];

const Context = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/context-bg.jpg')] bg-cover bg-center"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container relative z-10 text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaNewspaper className="text-4xl md:text-6xl mx-auto mb-6 text-accent" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Bối cảnh hiện nay
            </h1>
            <p className="text-xl text-gray-200">
              Phân tích tình hình kinh tế - chính trị và các vụ án điển hình
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Context Analysis */}
          <SectionTitle
            title="Phân tích bối cảnh"
            subtitle="Tình hình kinh tế - chính trị và tác động đến công tác phòng chống tham nhũng"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contextData.map((item, index) => {
              const Icon = item.icon;
              return (
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
                        <Icon className="text-xl text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.content.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Recent Cases */}
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Các vụ án điển hình"
              subtitle="Những vụ án tham nhũng lớn được phát hiện và xử lý"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentCases.map((item, index) => (
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
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Conclusion */}
            <motion.div
              className="mt-16 bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaHandshake className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Kết luận</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Trong bối cảnh hiện nay, công tác phòng chống tham nhũng đã đạt được 
                những kết quả quan trọng, thể hiện qua việc phát hiện và xử lý nhiều 
                vụ án lớn. Tuy nhiên, tình hình kinh tế - chính trị phức tạp đặt ra 
                những thách thức mới, đòi hỏi phải tiếp tục đẩy mạnh công tác này 
                với quyết tâm cao hơn, biện pháp mạnh mẽ hơn, đồng thời tăng cường 
                sự giám sát của nhân dân và vai trò của báo chí.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
