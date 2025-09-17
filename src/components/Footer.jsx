import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaBook, 
  FaGraduationCap, 
  FaEnvelope, 
  FaGithub,
  FaFacebook,
  FaLinkedin
} from 'react-icons/fa';

const quickLinks = [
  { path: '/', label: 'Trang chủ', icon: FaHome },
  { path: '/tu-tuong', label: 'Tư tưởng HCM', icon: FaBook },
  { path: '/boi-canh', label: 'Bối cảnh', icon: FaGraduationCap },
];

const resources = [
  { 
    url: 'http://www.dangcongsan.vn/',
    label: 'Trang tin Đảng Cộng sản Việt Nam'
  },
  {
    url: 'http://www.tapchicongsan.org.vn/',
    label: 'Tạp chí Cộng sản'
  },
  {
    url: 'https://thuvienphapluat.vn/',
    label: 'Thư viện pháp luật'
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              FA25_HCM202_SE1739
            </motion.h3>
            <p className="mb-2">Nhóm: D6</p>
            <p className="mb-4">Đề tài: Tham nhũng - Thách thức cho Đảng và Nhà nước</p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Điều hướng nhanh</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon className="text-sm" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Tài nguyên tham khảo</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-gray-800 text-sm text-center">
          <p>© 2024 FA25_HCM202_SE1739. Đã đăng ký bản quyền.</p>
          <motion.p 
            className="mt-2 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Được phát triển với mục đích học tập và nghiên cứu
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

