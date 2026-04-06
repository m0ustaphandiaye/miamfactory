import { motion } from 'framer-motion';

export default function CTAAndHours() {
  return (
    <section id="order" className="py-32 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter text-primary mb-8 leading-none">
            Ready for <br/> <span className="text-accent italic font-semibold">Perfection?</span>
          </h2>
          
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-3 rounded-full mb-12">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-primary font-bold tracking-wide">
              We are open everyday of the week between 11 AM and 10 PM.
            </p>
          </div>

          <div>
            <a href="/menu" className="inline-block px-12 py-6 bg-primary text-background rounded-full font-bold text-2xl hover:scale-105 hover:bg-accent hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 ease-spring">
              ORDER NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
