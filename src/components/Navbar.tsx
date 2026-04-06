import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Miam's Factory" className="h-14 w-auto object-contain" />
        </Link>

        {!isMenuPage && (
          <div className="hidden md:flex items-center space-x-12 font-medium text-sm tracking-wide">
            <a href="/#about" className="hover:text-accent transition-colors">À Propos</a>
            <Link to="/menu" className="hover:text-accent transition-colors">Menu</Link>
            <a href="/#testimonials" className="hover:text-accent transition-colors">Témoignages</a>
            <a href="/#faq" className="hover:text-accent transition-colors">FAQ</a>
          </div>
        )}

        <a href="https://wa.me/message/DQJB6TT6OVVUE1" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 bg-primary text-background rounded-full overflow-hidden font-medium hover:scale-105 transition-transform ease-spring duration-300">
          <span className="relative z-10 group-hover:text-white transition-colors">Commander</span>
          <div className="absolute inset-0 bg-accent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-spring"></div>
        </a>
      </div>
    </motion.nav>
  );
}
