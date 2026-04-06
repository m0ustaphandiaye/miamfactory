import { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
  return (
    <footer className="bg-primary text-slate-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="mb-6 inline-block">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src="/logo.png" alt="Miam's Factory" className="h-16 w-auto object-contain hover:opacity-80 transition-opacity" />
              </Link>
            </div>
            <p className="text-sm font-medium leading-relaxed max-w-xs focus">
              Des plats savoureux. Service rapide. Audace ouest-africaine. Ouvert tous les jours. 11h - 22h.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/miam__factory/?hl=en" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-xs hover:border-accent hover:text-accent transition-colors">Ig</a>
              <a href="https://www.tiktok.com/@miamfactory1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-xs hover:border-accent hover:text-accent transition-colors">Tk</a>
              <a href="https://wa.me/message/DQJB6TT6OVVUE1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-xs hover:border-accent hover:text-accent transition-colors">Wa</a>
            </div>
          </div>

          {/* Navigate */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/#about" className="hover:text-white transition-colors">À Propos</a></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><a href="/#testimonials" className="hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">Horaires</h4>
            <div className="space-y-4 text-sm">
              <p className="font-medium text-slate-400">Lundi - Dimanche</p>
              <p className="font-bold text-white tracking-wide">11h00 - 22h00</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-accent font-medium">Ouvert aujourd'hui</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">Prêt(e) ?</h4>
            <p className="text-sm font-medium leading-relaxed mb-6">
              Passez votre commande, elle sera prête en quelques minutes.
            </p>
            <a href="https://wa.me/message/DQJB6TT6OVVUE1" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden inline-block px-6 py-2.5 bg-accent text-white font-medium text-sm rounded-full hover:scale-105 transition-transform ease-spring duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors">Commander</span>
              <div className="absolute inset-0 bg-white/20 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-spring"></div>
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 text-xs font-medium text-slate-500 pt-8 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Miam Factory. Tous droits réservés.</p>
          <div className="md:text-right">
            <p>SICAP Foire, CICES lot 58 D, Dakar, Sénégal</p>
            <p className="mt-1">+221 77 269 28 68 • +221 77 235 88 88</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
