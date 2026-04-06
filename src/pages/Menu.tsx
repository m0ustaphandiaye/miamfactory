import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const signatureDishes = [
  {
    id: 1,
    name: "Saumon Crémeux",
    desc: "Des pâtes fondantes accompagnées d'un délicieux saumon et d'une sauce crémeuse riche.",
    price: "8000 FCFA",
    image: "/assets/pape_cheikh.png",
  },
  {
    id: 2,
    name: "Pasta Mixte",
    desc: "Le mélange parfait de pâtes riches aux crevettes et au poulet, agrémentées d'herbes fraîches.",
    price: "7000 FCFA",
    image: "/assets/pasta_mixt.png",
  },
  {
    id: 3,
    name: "Sunu Pasta",
    desc: "Des pâtes gourmandes généreusement garnies de viande grillée façon 'Dibi' au délicieux goût fumé.",
    price: "7000 FCFA",
    image: "/assets/sunu_pasta.png",
  }
];

const pastas = [
  { name: "Carbonara", desc: "Dinde Fumée", price: "4000 FCFA" },
  { name: "Pâtes Pêcheur", desc: "Crevettes", price: "5000 FCFA" },
  { name: "Pasta Poulet", desc: "Poulet", price: "5000 FCFA" },
  { name: "Sunu Pasta", desc: "Viande de DIBI", price: "7000 FCFA" },
  { name: "Pasta Mixte", desc: "Crevettes & Poulet", price: "7000 FCFA" },
  { name: "Pasta Thon Crevettes", desc: "Thon & Crevettes", price: "7000 FCFA" },
  { name: "Pasta Saumon Crémeux", desc: "Saumon fumé en option", price: "8000 FCFA" },
  { name: "Pasta Dibi Crevettes", desc: "Dibi & Crevettes", price: "9000 FCFA" },
  { name: "Pasta Gourmande", desc: "Poulet et Viande", price: "10000 FCFA" },
  { name: "Pasta Saumon Crevettes", desc: "Saumon & Crevettes", price: "10000 FCFA" },
];

const drinks = [
  { name: "Jus de Bouye", desc: "Onctueux jus de pain de singe (fruit du baobab)", price: "1500 FCFA" },
  { name: "Bissap Royal", desc: "Infusion de fleurs d'hibiscus, menthe douce, touche de vanille", price: "1500 FCFA" },
  { name: "Cocktail Ginger Miam", desc: "Gingembre frais, citron vert, ananas, sirop de canne", price: "2500 FCFA" },
  { name: "Limonade Pétillante", desc: "Citron pressé, eau gazeuse, sirop de menthe", price: "2000 FCFA" },
];

const MenuSection = ({ title, items, delay }: { title: string, items: { name: string, desc: string, price: string }[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className="mb-20"
  >
    <h3 className="text-4xl font-display font-medium mb-12 text-primary border-b border-primary/10 pb-4">{title}</h3>
    <div className="flex flex-col gap-8">
      {items.map((item, i) => (
        <div key={i} className="group relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-4 mb-2">
            <h4 className="text-xl md:text-2xl font-bold tracking-tight text-primary bg-background z-10 md:pr-4">{item.name}</h4>
            <div className="hidden md:block flex-grow border-b-2 border-dotted border-primary/20 relative top-[-8px]"></div>
            <span className="text-lg md:text-xl font-bold text-accent bg-background z-10 md:pl-4 whitespace-nowrap">{item.price}</span>
          </div>
          <p className="text-primary/70 max-w-full md:max-w-[85%] text-sm md:text-base font-medium">{item.desc}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Intro / Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-4"
            >
              L'Art de la Table
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8"
            >
              Notre <span className="italic text-primary/80 font-medium">Carte.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-primary/70 font-medium leading-relaxed"
            >
              Découvrez une sélection méticuleuse de saveurs fusion, préparées avec des ingrédients frais et une passion pour la gastronomie moderne.
            </motion.p>
          </div>
        </section>

        {/* Signatures (Visual Grid) */}
        <section className="container mx-auto px-6 max-w-7xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium">Nos <span className="text-accent italic">Signatures</span></h2>
            <div className="h-px bg-primary/20 flex-grow mt-2"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group flex flex-col h-full bg-white rounded-[2rem] p-4 shadow-sm border border-primary/5 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 relative">
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-spring" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                </div>
                <div className="px-2 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="text-2xl font-display font-bold tracking-tight">{dish.name}</h3>
                    <span className="text-accent font-bold tracking-tight text-lg">{dish.price}</span>
                  </div>
                  <p className="text-primary/60 leading-relaxed font-medium mb-6 flex-grow text-sm">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Text Menu Sections (Classic Layout - 1 Column Centered for Elegance) */}
        <section className="container mx-auto px-6 max-w-4xl">
          <MenuSection title="L'Art des Pâtes" items={pastas} delay={0.1} />
          <MenuSection title="Nos Breuvages" items={drinks} delay={0.2} />
        </section>

        {/* Info Banner at Bottom */}
        <section className="container mx-auto px-6 max-w-7xl mt-24">
          <div className="bg-primary text-background rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Une envie particulière ?</h2>
              <p className="text-background/70 text-lg font-medium">Contactez-nous pour des commandes spéciales, des événements de groupe ou des informations sur les allergènes.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href="https://wa.me/message/DQJB6TT6OVVUE1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-white hover:text-primary transition-colors duration-300 whitespace-nowrap text-center">
                Appeler Miam-Factory
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Floating Home Button */}
      <Link 
        to="/" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-accent transition-all duration-300 border border-white/10"
        title="Retour à l'accueil"
      >
        <Home className="w-6 h-6" />
      </Link>
    </div>
  );
}
