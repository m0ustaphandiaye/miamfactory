import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Quelles sont vos heures d’ouverture ?",
    a: "Nous sommes ouverts tous les jours de 11h à 22h, y compris les week-ends et jours fériés."
  },
  {
    q: "Est-ce que je peux commander en ligne ?",
    a: "Vous pouvez commander directement sur notre site via le bouton “Commander” ou nous appeler directement par téléphone."
  },
  {
    q: "Est-ce que vous proposez la livraison ?",
    a: "Oui, la livraison est disponible. Vous pouvez aussi opter pour le retrait sur place."
  },
  {
    q: "Puis-je commander pour un événement ou un groupe ?",
    a: "Bien sûr. Pour les commandes groupées ou les événements, contactez-nous directement pour discuter des quantités, délais et offres spéciales."
  },
  {
    q: "Puis-je modifier un plat selon mes préférences ?",
    a: "Bien sûr ! Indiquez vos préférences lors de la commande (ex. : sans fromage, extra sauce, etc.) et notre équipe fera le nécessaire."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-6">FAQ</h4>
            <h2 className="text-5xl font-display font-medium text-white tracking-tight leading-tight mb-6">
              Les questions <br/>
              fréquentes.
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-xs block">
              Vous ne trouvez pas votre réponse ? Contactez-nous via nos réseaux sociaux.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 flex flex-col justify-center">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-white/5 py-6">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <h3 className={`text-sm font-semibold transition-colors ${isOpen ? 'text-accent' : 'text-slate-200 group-hover:text-white'}`}>
                      {faq.q}
                    </h3>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-accent text-white' : 'border border-slate-600 text-slate-400 group-hover:border-white group-hover:text-white'}`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" strokeWidth={3} /> : <Plus className="w-3 h-3" strokeWidth={2} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 text-xs font-medium leading-relaxed pt-4 max-w-2xl pr-8 block">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
