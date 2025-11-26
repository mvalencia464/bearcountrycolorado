import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { Services } from './components/Services';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { AreasServed } from './components/AreasServed';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-bear-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <AboutSection />
        <Testimonials />
        <ContactSection />
        <AreasServed />
      </main>
      <Footer />
    </div>
  );
};

export default App;