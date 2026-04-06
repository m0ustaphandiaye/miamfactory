
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mariama Sow",
    role: "Responsable Marketing, Dakar",
    text: "Le plat de Pasta Saumon Crémeux m'a empêché de parler en plein milieu d'une conversation. J'ai mangé des pâtes de Paris à Lagos — celles-ci sont vraiment différentes. La sauce à elle seule vaut le détour."
  },
  {
    name: "Ibrahima Ndoye",
    role: "Ingénieur Logiciel",
    text: "Je commande au moins trois fois par semaine. Le Pasta Mixed est si bien équilibré qu'on n'a pas l'impression de manger dans un fast-food — c'est comme un repas de restaurant livré en moins de 20 minutes."
  },
  {
    name: "Rokhaya Diallo",
    role: "Architecte & Blogueuse Culinaire",
    text: "Le Sunu Pasta est tout simplement incroyable. La saveur du Dibi associée aux pâtes semble folle jusqu'à ce que vous goûtiez. C'est la réponse de Dakar à la cuisine réconfortante italienne."
  },
  {
    name: "Cheikh Tall",
    role: "Entrepreneur",
    text: "J'ai emmené ma famille pour le déjeuner du dimanche et ils ont immédiatement demandé quand nous reviendrons. Mes enfants connaissent déjà leurs commandes par cœur. Tout est dit."
  },
  {
    name: "Aissatou Bâ",
    role: "Médecin, CHU de Dakar",
    text: "Mes longues gardes exigent que je mange quelque chose de rapide, rassasiant et vraiment bon. Miam Factory est le seul endroit qui remplit ces critères sans compromis. C'est mon incontournable."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-4">TÉMOIGNAGES CLIENTS</h4>
            <h2 className="text-5xl font-display font-medium text-primary tracking-tight">
              Paroles de <br /> gourmands.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-xs text-slate-500 font-medium">Moyenne de 4.9 sur 1 247 avis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Row: Mariama (wide), Ibrahima */}
          <div className="lg:col-span-2 bg-background border border-primary/10 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div className="text-accent text-4xl font-display leading-none mb-2">“</div>
            <div className="flex text-accent mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-sm text-primary/80 font-medium leading-relaxed mb-10 flex-grow">
              {testimonials[0].text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold text-slate-500">M</div>
              <div>
                <h4 className="text-xs font-bold text-primary">{testimonials[0].name}</h4>
                <p className="text-[10px] text-slate-400 font-medium">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          <div className="bg-background border border-primary/10 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div className="text-accent text-4xl font-display leading-none mb-2">“</div>
            <div className="flex text-accent mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-sm text-primary/80 font-medium leading-relaxed mb-10 flex-grow">
              {testimonials[1].text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold text-slate-500">I</div>
              <div>
                <h4 className="text-xs font-bold text-primary">{testimonials[1].name}</h4>
                <p className="text-[10px] text-slate-400 font-medium">{testimonials[1].role}</p>
              </div>
            </div>
          </div>

          {/* Bottom Row: The other 3 */}
          {testimonials.slice(2).map((t, i) => (
            <div key={i} className="bg-background border border-primary/10 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent text-4xl font-display leading-none mb-2">“</div>
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-sm text-primary/80 font-medium leading-relaxed mb-10 flex-grow">
                {t.text}
              </p>
              <div className="flex items-center gap-3 border-t border-primary/5 pt-4 mt-2">
                <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold text-slate-500">{t.name.charAt(0)}</div>
                <div>
                  <h4 className="text-xs font-bold text-primary">{t.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
