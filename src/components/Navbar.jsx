import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaBook, 
  FaExclamationTriangle, 
  FaTasks, 
  FaGamepad, 
  FaRobot,
  FaGlobe,
  FaGraduationCap
} from 'react-icons/fa';

const navItems = [
  { path: '/', label: 'Trang chủ', icon: FaHome },
  { path: '/tu-tuong', label: 'Tư tưởng HCM', icon: FaBook },
  { path: '/ly-thuyet', label: 'Lý thuyết', icon: FaGraduationCap },
  { path: '/boi-canh', label: 'Bối cảnh', icon: FaGlobe },
  { path: '/nguy-co', label: 'Nguy cơ', icon: FaExclamationTriangle },
  { path: '/thach-thuc', label: 'Thách thức', icon: FaTasks },
  { path: '/tuong-tac', label: 'Tương tác', icon: FaGamepad },
  { path: '/ai-usage', label: 'AI Usage', icon: FaRobot }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                    ${isScrolled
                      ? (isActive ? 'text-primary' : 'text-gray-700 hover:text-primary')
                      : 'text-white hover:text-primary'
                    }
                  `}
                >
                  <Icon className="text-lg" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
            <div className="grid grid-cols-4 gap-1 py-3">
              {navItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center gap-1
                      ${isActive ? 'text-primary' : 'text-gray-700'}
                    `}
                  >
                    <Icon className="text-xl" />
                    <span className="text-xs">{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute top-0 h-0.5 w-full bg-primary"
                        layoutId="navbar-underline-mobile"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="grid grid-cols-4 gap-1 py-3 border-t border-gray-200">
              {navItems.slice(4).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center gap-1
                      ${isActive ? 'text-primary' : 'text-gray-700'}
                    `}
                  >
                    <Icon className="text-xl" />
                    <span className="text-xs">{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute top-0 h-0.5 w-full bg-primary"
                        layoutId="navbar-underline-mobile-2"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
