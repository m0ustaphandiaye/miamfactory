import { motion } from 'framer-motion';

const dishes = [
  {
    id: 1,
    name: "Pasta Saumon Crémeux",
    desc: "Des pâtes crémeuses et savoureuses au saumon, servies avec une élégance minimaliste.",
    price: "8000 FCFA",
    image: "/assets/pape_cheikh.png",
  },
  {
    id: 2,
    name: "Pasta Mixed",
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

export default function MenuHighlight() {
  return (
    <section id="menu-highlight" className="py-24 bg-primary text-background rounded-[3rem] mx-4 lg:mx-8 mb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
              Vos Plats <br /><span className="text-accent italic font-medium">Préférés.</span>
            </h2>
            <p className="text-background/70 text-xl max-w-md font-medium">Nos plats signatures, travaillés pour la rapidité sans faire de compromis sur les saveurs.</p>
          </div>
          <a href="/menu" className="text-center w-full md:w-auto px-8 py-4 bg-background text-primary rounded-full font-bold hover:scale-105 transition-transform duration-300">
            Voir Tout Le Menu
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors duration-500 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-spring" />
              </div>
              <div className="flex flex-col mb-4 gap-2">
                <span className="text-accent font-bold tracking-wide text-lg bg-accent/10 px-4 py-1.5 rounded-full self-start">{dish.price}</span>
                <h3 className="text-3xl font-display font-bold tracking-tight mt-2">{dish.name}</h3>
              </div>
              <p className="text-background/60 leading-relaxed font-medium mb-8 flex-grow text-lg">{dish.desc}</p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
