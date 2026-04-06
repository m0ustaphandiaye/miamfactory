import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlight from './components/MenuHighlight';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import OpeningHours from './components/OpeningHours';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlight />
        <Testimonials />
        <FAQ />
        <OpeningHours />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
