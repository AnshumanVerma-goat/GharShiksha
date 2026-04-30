import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Features from './components/Features';
import Difference from './components/Difference';
import About from './components/About';
import WhyChooseMe from './components/WhyChooseMe';
import Subjects from './components/Subjects';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function Navbar() {
  return (
    <nav className="w-full py-4 px-6 absolute top-0 left-0 z-50 flex justify-between items-center">
      <div className="text-[#F5F1E8] font-serif text-xl md:text-2xl tracking-wide opacity-90">
        GharShiksha <span className="font-sans text-sm md:text-base font-light text-gray-400">by Anshuman Verma</span>
      </div>
      <div className="hidden md:flex gap-6 text-[#F5F1E8] text-sm font-medium">
        <a href="#about" className="hover:text-[#2E6F5E] transition-colors">About</a>
        <a href="#pricing" className="hover:text-[#2E6F5E] transition-colors">Pricing</a>
        <a href="#contact" className="hover:text-[#2E6F5E] transition-colors">Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D0F1A] text-gray-500 py-8 text-center border-t border-gray-800">
      <p className="font-medium text-[#F5F1E8] opacity-80 mb-2">GharShiksha — Personal Home Tuition in Raipur</p>
      <p className="text-sm">© {new Date().getFullYear()} Anshuman Verma. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="font-sans antialiased text-[#0D0F1A] bg-[#F5F1E8]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <Difference />
      <About />
      <WhyChooseMe />
      <Subjects />
      <Pricing />
      <HowItWorks />
      <Contact />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
