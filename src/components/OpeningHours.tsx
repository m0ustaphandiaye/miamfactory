export default function OpeningHours() {
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const dateStr = new Date().toLocaleString("en-US", { timeZone: "GMT" });
  const gmtDate = new Date(dateStr);
  const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const today = daysOfWeek[gmtDate.getDay()];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-4">HEURES D'OUVERTURE</h4>
            <h2 className="text-5xl pr-10 font-display font-medium text-primary tracking-tight leading-[1.1] mb-6">
              Ouverts <br/>
              <span className="text-accent italic font-normal">tous les jours.</span>
            </h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm mb-10">
              Qu'il pleuve ou qu'il vente, en semaine ou en week-end — Miam Factory est là pour vous. Venez affamés, repartez satisfaits.
            </p>
            
            <div className="bg-primary rounded-xl p-6 text-white inline-flex flex-col gap-1 mb-6 shadow-xl shadow-primary/10 w-full max-w-xs">
              <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                <div className="w-4 h-4 rounded-full border border-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                </div>
                Service Continu
              </div>
              <p className="text-xl font-display font-bold ml-7">11h00 – 22h00</p>
            </div>

            <div className="flex flex-col gap-2 text-xs font-semibold text-slate-600 ml-2">
              <div className="flex items-center gap-2"><span className="text-accent">📍</span> SICAP Foire, CICES lot 58 D, Dakar, Sénégal</div>
              <div className="flex items-center gap-2"><span className="text-accent">📞</span> +221 77 269 28 68 &nbsp;•&nbsp; +221 77 235 88 88</div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-1">
            {days.map((day) => {
              const isToday = day === today;
              return (
                <div 
                  key={day} 
                  className={`flex justify-between items-center py-4 px-6 rounded-xl transition-colors ${isToday ? 'bg-orange-50 border border-accent/10' : 'hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${isToday ? 'bg-accent' : 'bg-slate-300'}`}></div>
                    <span className={`text-sm font-semibold ${isToday ? 'text-primary' : 'text-slate-500'}`}>{day}</span>
                    {isToday && (
                      <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                        AUJOURD'HUI
                      </span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${isToday ? 'text-accent' : 'text-slate-400'}`}>
                    11h00 – 22h00
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
