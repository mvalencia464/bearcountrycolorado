import React from 'react';

export const AreasServed: React.FC = () => {
  const cities = [
    "Denver", "Englewood", "Littleton", "Lakewood", 
    "Centennial", "Parker", "Castle Rock", "Highlands Ranch", 
    "Aurora", "Colorado Springs", "Mountain Towns"
  ];

  return (
    <section id="areas" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-bear-900 mb-8 uppercase">Proudly Serving Denver Metro & Surrounding Areas</h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span key={city} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200 hover:bg-bear-accent hover:text-white transition-colors cursor-default">
              {city}
            </span>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg text-xs text-gray-400 leading-relaxed text-justify max-w-4xl mx-auto border border-gray-200">
          <p className="uppercase font-bold mb-2">Service Keywords:</p>
          RV Trailer Truck Repair Boss Snowplow Dealer and Repair All Years All Models. Bear Country Colorado RV Repair Near Me. Trailer Repair Denver Near Me. Englewood Littleton Truck Repair Near Me. Boss Snow Plow Dealer Near Me. Fleet Repair and Service. Farm and Horse Trailers.
        </div>
      </div>
    </section>
  );
};