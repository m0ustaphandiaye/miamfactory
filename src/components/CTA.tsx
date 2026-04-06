import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-24 bg-background px-6">
      <div className="container mx-auto max-w-6xl bg-primary rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">

        {/* Subtle background glow/gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Side */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-6">PRÊT À DÉGUSTER ?</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
              Votre prochain <br />
              plat préféré <br />
              <span className="text-accent italic font-medium">en un clic.</span>
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm mb-10">
              De la cuisine à votre table — audacieux, rapide et préparé avec soin. Choisissez votre plat et Miam Factory s'occupe du reste.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a href="https://wa.me/message/DQJB6TT6OVVUE1" target="_blank" rel="noopener noreferrer" className="text-center group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-4 sm:py-3 bg-accent text-white font-medium text-sm rounded-full hover:scale-105 transition-transform ease-spring duration-300 border border-transparent">
                <span className="relative z-10 flex items-center gap-2">Commander <ArrowRight className="w-4 h-4" /></span>
                <div className="absolute inset-0 bg-white/20 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-spring"></div>
              </a>
              <Link to="/menu" onClick={() => window.scrollTo(0, 0)} className="text-center group relative overflow-hidden px-6 py-4 sm:py-3 border border-slate-600 text-slate-300 font-medium text-sm rounded-full hover:scale-105 hover:border-white transition-all ease-spring duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors">Voir le menu</span>
                <div className="absolute inset-0 bg-white/10 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-spring"></div>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-3 relative">
            <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex gap-4 items-start backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-accent text-lg">🪙</div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">À partir de 4 000 FCFA</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">Des pâtes premium à un prix accessible — sans le prix premium.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex gap-4 items-start backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-accent text-sm mt-1">🕒</div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Ouvert tous les jours</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">De 11h00 à 22h00 — 7 jours sur 7, sans exception.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex gap-4 items-start backdrop-blur-sm z-10 shadow-lg hover:bg-white/10 transition-colors">
              <div className="text-accent text-sm mt-1">✦</div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">3 plats signatures</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">Chacun préparé avec des ingrédients distincts au caractère ouest-africain.</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
