import React from 'react';
import { Award, ShieldCheck, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute top-0 left-0 w-full h-full bg-bear-accent/10 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
            <img 
              src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/6925ff138ff7e08124ee14da.webp" 
              alt="Bear Country Workshop" 
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black text-bear-900 mb-6 uppercase">Why Choose Bear Country?</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Located in Englewood, minutes from Denver, <strong>Bear Country Colorado</strong> has been providing professional repair and maintenance services since <strong>2003</strong>. We are a locally owned and operated business dedicated to keeping Colorado's trailers, RVs, and fleets on the road.
              </p>
              <p>
                We understand that trust is earned. That's why we are proud to be <strong>Colorado Fleet Services</strong> and <strong>Colorado Parks Services Certified</strong>. Whether you are hauling horses, boats, or snow removal equipment, safety is our top priority.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-bear-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-bear-900">Certified Experts</h4>
                  <p className="text-sm text-gray-500">Colorado State Fleet & Parks Certified.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-bear-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-bear-900">Since 2003</h4>
                  <p className="text-sm text-gray-500">Over 20 years of local experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-bear-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-bear-900">BOSS Dealer</h4>
                  <p className="text-sm text-gray-500">Authorized Sales & Service since 2007.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};