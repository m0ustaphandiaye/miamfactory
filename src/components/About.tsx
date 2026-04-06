import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-primary/5 rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img src="/assets/hero.png" alt="Restaurant Ambiance" className="w-full h-full object-cover filter grayscale opacity-90 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-20"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter mb-8 text-primary">
              Bien plus qu'un <br/> <span className="text-accent italic font-normal">fast food.</span>
            </h2>
            <p className="text-lg text-primary/70 mb-6 leading-relaxed">
              Chez Miam Factory, notre mission est simple : vous servir des plats rapides, savoureux et généreux, sans compromis sur la qualité. Que ce soit un bol de pâtes crémeuses, du riz aux crevettes, ou du poulet bien grillé, chaque recette est préparée avec soin et passion.
            </p>
            <p className="text-lg text-primary/70 mb-6 leading-relaxed">
              Pensé pour les gourmands pressés, notre concept mêle le confort de la cuisine maison à la vitesse du fast food. Ici, on mange bien, vite, et toujours avec plaisir.
            </p>
            <p className="text-lg text-primary/70 mb-12 leading-relaxed">
              Bienvenue chez Miam Factory, là où chaque bouchée compte.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-primary/10 pt-10">
              <div>
                <h4 className="text-5xl font-display font-bold text-accent mb-3">100%</h4>
                <p className="text-sm font-semibold tracking-wide text-primary/70 uppercase">Ingrédients Frais</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-accent mb-3">&lt; 10m</h4>
                <p className="text-sm font-semibold tracking-wide text-primary/70 uppercase">Temps de Service</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
