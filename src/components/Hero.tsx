import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6.0rem] font-display font-medium leading-[1.05] tracking-tighter mb-8 text-primary">
            Pâtes, <span className="text-accent italic">Poulets</span> <br />et Plaisir...
          </h1>
          <p className="text-xl text-primary/70 mb-12 leading-relaxed font-medium">
            Chez Miam Factory, on cuisine des plats généreux et savoureux, <br className="hidden md:block" />
            prêts à vous réconforter à tout moment de la journée. <br className="hidden md:block" />
            Passez vite votre commande.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a href="https://wa.me/message/DQJB6TT6OVVUE1" target="_blank" rel="noopener noreferrer" className="text-center group relative px-10 py-4 bg-primary text-background rounded-full overflow-hidden font-semibold text-lg hover:scale-105 transition-transform ease-spring duration-300 shadow-xl shadow-primary/20 hover:border-transparent">
              <span className="relative z-10 group-hover:text-white transition-colors">Commander</span>
              <div className="absolute inset-0 bg-accent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-spring"></div>
            </a>
            <Link to="/menu" className="text-center group relative px-10 py-4 border border-primary text-primary rounded-full overflow-hidden font-semibold text-lg hover:scale-105 hover:border-transparent transition-all ease-spring duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors">Voir le menu</span>
              <div className="absolute inset-0 bg-accent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-spring"></div>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="relative h-[60vh] lg:h-[85vh] w-full mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] rotate-3 scale-95 transition-transform duration-500"></div>
          <img
            src="/assets/hero.png"
            alt="Miam-Factory Ambience"
            className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}
