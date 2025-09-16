import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaClipboardCheck, 
  FaBalanceScale, 
  FaUsers, 
  FaBookReader,
  FaHandshake,
  FaNewspaper,
  FaShieldAlt,
  FaLightbulb,
  FaGavel
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const tabData = [
  {
    id: 'chinh-don',
    icon: FaClipboardCheck,
    title: 'Chỉnh đốn Đảng',
    content: [
      {
        icon: FaBookReader,
        title: 'Giáo dục chính trị tư tưởng',
        content: 'Tăng cường công tác giáo dục chính trị tư tưởng cho cán bộ, đảng viên'
      },
      {
        icon: FaHandshake,
        title: 'Tự phê bình và phê bình',
        content: 'Thực hiện nghiêm túc nguyên tắc tự phê bình và phê bình trong Đảng'
      },
      {
        icon: FaGavel,
        title: 'Xử lý vi phạm',
        content: 'Xử lý nghiêm minh các vi phạm của cán bộ, đảng viên'
      }
    ]
  },
  {
    id: 'kiem-soat',
    icon: FaBalanceScale,
    title: 'Kiểm soát quyền lực',
    content: [
      {
        icon: FaShieldAlt,
        title: 'Hoàn thiện cơ chế',
        content: 'Hoàn thiện cơ chế kiểm soát quyền lực và phòng ngừa tham nhũng'
      },
      {
        icon: FaLightbulb,
        title: 'Công khai minh bạch',
        content: 'Tăng cường công khai, minh bạch trong hoạt động công vụ'
      },
      {
        icon: FaBalanceScale,
        title: 'Kiểm tra giám sát',
        content: 'Tăng cường công tác kiểm tra, giám sát và xử lý vi phạm'
      }
    ]
  },
  {
    id: 'dan-chu',
    icon: FaUsers,
    title: 'Phát huy dân chủ',
    content: [
      {
        icon: FaUsers,
        title: 'Vai trò nhân dân',
        content: 'Phát huy vai trò giám sát của nhân dân trong đấu tranh chống tham nhũng'
      },
      {
        icon: FaNewspaper,
        title: 'Vai trò báo chí',
        content: 'Tăng cường vai trò của báo chí trong đấu tranh phòng chống tham nhũng'
      },
      {
        icon: FaHandshake,
        title: 'Đối thoại nhân dân',
        content: 'Thường xuyên đối thoại, lắng nghe ý kiến của nhân dân'
      }
    ]
  }
];

const Challenges = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/challenge.jpg')] bg-cover bg-center"
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
            Thách thức và Giải pháp
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Những nhiệm vụ trọng tâm trong công tác xây dựng, chỉnh đốn Đảng
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabData.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all
                    ${activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-xl" />
                  {tab.title}
                </motion.button>
              );
            })}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {tabData.map((tab) => (
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {tab.content.map((item, index) => {
                      const ItemIcon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl shadow-lg p-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <ItemIcon className="text-xl text-primary" />
                            </div>
                            <h4 className="font-bold">{item.title}</h4>
                          </div>
                          <p className="text-gray-600">{item.content}</p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;