import React from 'react';
import { Truck, Snowflake, Anchor, Wrench, Settings, Caravan, ArrowRight, CheckCircle2 } from 'lucide-react';

const CreativeServiceCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  featured?: boolean;
}> = ({ title, desc, icon, featured }) => (
  <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl ${featured ? 'bg-bear-900 text-white md:col-span-2' : 'bg-white text-bear-900 border border-gray-100'}`}>
    {/* Hover Accent Background */}
    <div className="absolute inset-0 bg-bear-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

    {/* Pattern Overlay (for texture) */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none z-0"></div>

    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
      <div>
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 shadow-md transition-colors duration-300 ${featured ? 'bg-bear-accent text-white group-hover:bg-white group-hover:text-bear-accent' : 'bg-bear-100 text-bear-900 group-hover:bg-white group-hover:text-bear-accent'}`}>
          {icon}
        </div>

        <h3 className={`text-2xl font-black uppercase mb-3 tracking-tight ${featured ? 'text-white' : 'text-bear-900 group-hover:text-white'}`}>
          {title}
        </h3>

        <p className={`font-medium leading-relaxed ${featured ? 'text-gray-300 group-hover:text-white/90' : 'text-gray-500 group-hover:text-white/90'}`}>
          {desc}
        </p>
      </div>

      <div className={`mt-8 flex items-center gap-2 font-bold uppercase text-sm tracking-wider ${featured ? 'text-bear-accent group-hover:text-white' : 'text-bear-accent group-hover:text-white'}`}>
        <span>Details</span>
        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const ServiceListCategory: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="text-bear-accent font-black uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 text-xl">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-gray-300 text-lg hover:text-white transition-colors">
          <CheckCircle2 size={20} className="text-bear-700 mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 relative overflow-hidden pt-24 pb-0">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-bear-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-bear-accent font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-bear-900 uppercase leading-none">
              Built Tough for <br />
              <span className="text-bear-accent">Every Journey</span>
            </h2>
          </div>
          <a href="tel:303-761-2222" className="hidden md:flex items-center gap-3 px-6 py-3 bg-bear-900 text-white rounded-lg font-bold hover:bg-bear-800 transition-colors shadow-lg">
            <Wrench size={20} />
            <span>Get a Quote</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CreativeServiceCard
            title="Trailer Repair"
            desc="Comprehensive repair for all trailer types: horse, utility, flatbed, and equipment haulers. Axles, brakes, wiring, and structural welding experts."
            icon={<Settings size={28} />}
            featured={true}
          />
          <CreativeServiceCard
            title="RV Service"
            desc="Full-service RV care. We handle slide-outs, roof sealing, winterization, and mechanical repairs to keep your vacation on track."
            icon={<Caravan size={28} />}
          />
          <CreativeServiceCard
            title="Truck & Fleet"
            desc="Priority fleet maintenance for state, school, and business vehicles. Minimizing downtime with reliable, certified mechanics."
            icon={<Truck size={28} />}
          />
          <CreativeServiceCard
            title="BOSS Snowplows"
            desc="Authorized Dealer since 2007. Sales, installation, and rapid repair services to keep you plowing through the winter."
            icon={<Snowflake size={28} />}
          />
          <CreativeServiceCard
            title="Boat Trailers"
            desc="Specialized watercraft trailer services: bearing repacking, bunk replacement, and waterproof lighting systems."
            icon={<Anchor size={28} />}
          />
        </div>

        {/* Mobile Call to Action */}
        <div className="mt-8 md:hidden">
          <a href="tel:303-761-2222" className="flex items-center justify-center gap-3 px-6 py-4 bg-bear-900 text-white rounded-lg font-bold shadow-lg w-full">
            <Wrench size={20} />
            <span>Call for Quote: 303-761-2222</span>
          </a>
        </div>
      </div>

      {/* SEO Rich Detailed Service Menu */}
      <div className="bg-bear-900 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Comprehensive Service Capabilities</h3>
            <p className="text-xl text-gray-300 mt-4">Serving Denver, Englewood, and Littleton with specialized mechanical expertise.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: RV Specialized */}
            <div>
              <ServiceListCategory
                title="RV & Camper Systems"
                items={[
                  "RV Engine Diagnostics", "Brake Service & Suspension", "Electrical Troubleshooting",
                  "Roof Repair & Sealing", "Slide-Out Repair", "Water Damage Repair",
                  "Generator Service", "Leveling System Repair", "Awning Replacement",
                  "Winterization / De-winterization", "Propane System Service",
                  "Solar Panel Installation", "AC & Furnace Repair"
                ]}
              />
              <ServiceListCategory
                title="Interior & Exterior"
                items={[
                  "Body & Exterior Repair", "Window & Door Repair",
                  "Undercoating", "Fiberglass Repair", "Pest Control Services"
                ]}
              />
            </div>

            {/* Column 2: Trailer Mechanics */}
            <div>
              <ServiceListCategory
                title="Trailer Mechanics"
                items={[
                  "Axle Repair & Replacement", "Brake Repair & Adjustment",
                  "Bearing Repacking (Grease)", "Wiring & Lighting Repair",
                  "Suspension & Leaf Springs", "Coupler & Jack Replacement",
                  "Electric Brake Controllers", "Wheel Alignment"
                ]}
              />
              <ServiceListCategory
                title="Trailer Types"
                items={[
                  "Horse Trailers", "Boat Trailers", "Utility & Cargo",
                  "Fifth Wheel Repair", "Pop-up Campers", "Dump Trailers",
                  "Flatbed & Equipment Haulers"
                ]}
              />
            </div>

            {/* Column 3: Truck & Power */}
            <div>
              <ServiceListCategory
                title="Truck & Fleet"
                items={[
                  "Fleet Maintenance Programs", "Diesel Engine Repair",
                  "Transmission Service", "Differential Service",
                  "Driveline & Drive Shaft", "Safety Inspections (DOT)",
                  "Cooling System & Radiator", "Alternator & Starter Repair",
                  "Turbocharger Repair", "Air Brake Systems"
                ]}
              />
              <ServiceListCategory
                title="General Maint."
                items={[
                  "Oil Changes & Fluids", "Battery Testing",
                  "Belt & Hose Inspection", "Pre-Trip Inspections",
                  "Tire Rotation & Balance"
                ]}
              />
            </div>

            {/* Column 4: Fabrication & Specialty */}
            <div>
              <ServiceListCategory
                title="BOSS Snowplows"
                items={[
                  "Authorized Dealer Sales", "Plow Installation",
                  "Hydraulic Repair", "Controller Diagnostics",
                  "Mount & Undocarriage", "Plow Maintenance"
                ]}
              />
              <ServiceListCategory
                title="Fabrication & Custom"
                items={[
                  "Welding & Fabrication", "Hitch Installation (5th/Gooseneck)",
                  "Lift Kit Installation", "Frame Repair & Reinforcement",
                  "Custom Bumpers", "Floor Repair & Replacement",
                  "Auxiliary Fuel Tanks", "Ramp Fabrication"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};