import React from 'react';
import { Shield, Award, Wrench, ThumbsUp } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-x border-gray-100">
          
          {/* BBB Rating */}
          <div className="flex items-center justify-center p-6 md:p-8 group hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 relative flex items-center justify-center">
                   {/* Simulated BBB Badge */}
                   <div className="absolute inset-0 bg-blue-900 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                   <div className="absolute inset-0 bg-white border-2 border-blue-900 rounded-lg flex flex-col items-center justify-center z-10">
                        <span className="text-blue-900 font-black text-2xl leading-none">BBB</span>
                        <span className="text-blue-900 font-bold text-lg leading-none">A+</span>
                   </div>
                </div>
                <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">Accredited Business</span>
            </div>
          </div>

          {/* BOSS Dealer */}
          <div className="flex items-center justify-center p-6 md:p-8 group hover:bg-gray-50 transition-colors">
             <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                   <Award size={32} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">Authorized Dealer</span>
                <span className="text-xs text-gray-500 font-semibold">BOSS Snowplow</span>
            </div>
          </div>

          {/* ASE / Techs */}
          <div className="flex items-center justify-center p-6 md:p-8 group hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                   <div className="relative">
                        <Wrench size={28} className="absolute -top-1 -right-1" />
                        <Shield size={28} className="absolute -bottom-1 -left-1" />
                   </div>
                </div>
                <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">Certified Techs</span>
                <span className="text-xs text-gray-500 font-semibold">Expert Diagnostics</span>
            </div>
          </div>

          {/* Family Owned */}
          <div className="flex items-center justify-center p-6 md:p-8 group hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 bg-bear-accent rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                   <ThumbsUp size={32} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">Family Owned</span>
                <span className="text-xs text-gray-500 font-semibold">Since 2003</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};