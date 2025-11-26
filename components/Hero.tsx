import React from 'react';
import { Button } from './Button';
import { Star, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-bear-900 pt-24 min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/6925f85522d3b6808de7b1f2.webp" 
          alt="Bear Country Truck and Trailer Repair Shop" 
          className="w-full h-full object-cover"
        />
        {/* Dual gradient for text readability and aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-bear-900/95 via-bear-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bear-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="lg:w-2/3">
          {/* Trust Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-fade-in-up">
            <span className="flex items-center text-yellow-400 gap-1">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase border-l border-white/20 pl-2 ml-1">Over 50 5-Star Reviews</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-xl uppercase">
            Repairing Colorado's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bear-accent to-orange-400">Rigs Since 2003</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            The most trusted Trailer, RV, and Fleet repair in Denver. <br/>
            <span className="font-semibold text-white">Family Owned. A+ BBB Rated. BOSS Authorized.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asLink href="tel:303-761-2222" variant="primary" className="text-lg px-8 py-4 shadow-xl shadow-orange-900/20 transform hover:scale-105 transition-all">
              Schedule Appointment
            </Button>
            <Button asLink href="#services" variant="outline" className="text-lg px-8 py-4 backdrop-blur-sm hover:bg-white/20">
              View Services
            </Button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
             <div className="flex flex-col">
                <span className="text-3xl font-black text-white">20+</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Years in Business</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-black text-white">A+</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">BBB Rating</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-black text-white">2007</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">BOSS Dealer Since</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Family Owned</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};