import { motion } from 'framer-motion';
import { FaQuoteLeft, FaBook, FaUsers, FaBalanceScale, FaExclamationTriangle } from 'react-icons/fa';
import TimelineCard from '../components/TimelineCard';
import SectionTitle from '../components/SectionTitle';
import ImageCard from '../components/ImageCard';

const timelineData = [
  {
    date: "1945",
    title: "Xây dựng Đảng trong sạch, vững mạnh",
    content: "Bác Hồ nhấn mạnh: 'Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư.'",
    icon: FaBook,
    image: "/images/hcm-1945.jpg"
  },
  {
    date: "1947",
    title: "Nhà nước của dân",
    content: "Người khẳng định: 'Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ.'",
    icon: FaUsers,
    image: "/images/hcm-1947.jpg"
  },
  {
    date: "1949",
    title: "Quyền lực thuộc về nhân dân",
    content: "Bác dạy: 'Chính quyền từ nhân dân mà ra, cho nên phải làm việc vì lợi ích của nhân dân.'",
    icon: FaBalanceScale,
    image: "/images/hcm-1949.jpg"
  },
  {
    date: "1953",
    title: "Phòng chống tham nhũng",
    content: "Người cảnh báo: 'Tham ô, lãng phí, quan liêu là kẻ thù của nhân dân, của bộ đội, của chính phủ.'",
    icon: FaExclamationTriangle,
    image: "/images/hcm-1953.jpg"
  }
];

const quotes = [
  "Cần, Kiệm, Liêm, Chính, Chí công vô tư",
  "Dân là gốc của nước",
  "Nước lấy dân làm gốc",
  "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
];

const imageGallery = [
  {
    src: "/images/hcm-work.jpg",
    alt: "Bác Hồ làm việc",
    caption: "Bác Hồ trong một buổi làm việc với cán bộ"
  },
  {
    src: "/images/hcm-people.jpg",
    alt: "Bác Hồ với nhân dân",
    caption: "Bác Hồ trong chuyến thăm và nói chuyện với nhân dân"
  },
  {
    src: "/images/hcm-writing.jpg",
    alt: "Bác Hồ viết bài",
    caption: "Bác Hồ viết bài về đạo đức cách mạng"
  }
];

const HCMThoughts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/hcm.jpg')] bg-cover bg-center"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container relative z-10 text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuoteLeft className="text-4xl md:text-6xl mx-auto mb-6 text-primary" />
            <p className="text-xl md:text-3xl italic font-serif mb-4">
              {quotes[Math.floor(Math.random() * quotes.length)]}
            </p>
            <p className="text-lg">- Chủ tịch Hồ Chí Minh -</p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Tư tưởng Hồ Chí Minh"
            subtitle="Về xây dựng Đảng trong sạch, vững mạnh và Nhà nước của dân, do dân, vì dân"
          />

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {imageGallery.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-full md:w-1/2">
                  <TimelineCard {...item} index={index} />
                </div>
                {item.image && (
                  <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <ImageCard
                      src={item.image}
                      alt={item.title}
                      caption={item.date}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
              <FaBook className="text-primary" />
              Bài học cho hôm nay
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước vẫn còn nguyên giá trị. 
                  Trong bối cảnh hiện nay, việc kiên quyết đấu tranh chống tham nhũng, 
                  thực hiện nghiêm túc nguyên tắc tập trung dân chủ, tăng cường mối quan hệ 
                  gắn bó máu thịt giữa Đảng với nhân dân là những nhiệm vụ cấp bách, 
                  có ý nghĩa sống còn đối với sự tồn vong của Đảng và chế độ.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <ImageCard
                  src="/images/hcm-legacy.jpg"
                  alt="Di sản Hồ Chí Minh"
                  caption="Di sản tư tưởng Hồ Chí Minh - Kim chỉ nam cho công cuộc xây dựng và bảo vệ Tổ quốc"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HCMThoughts;