import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewCard: React.FC<{ name: string; date: string; text: string; source?: string }> = ({ name, date, text, source }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full relative">
    <Quote className="absolute top-6 right-6 text-bear-accent/10" size={48} />
    <div className="flex text-yellow-400 mb-4">
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
    </div>
    <p className="text-gray-700 leading-relaxed italic mb-6 flex-grow">"{text}"</p>
    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
        <div>
            <h4 className="font-bold text-bear-900 uppercase text-sm">{name}</h4>
            <span className="text-xs text-gray-400">{date}</span>
        </div>
        {source && <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500">{source}</span>}
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-bear-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-bear-accent font-bold tracking-widest uppercase mb-2">Real Feedback</h2>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase">Don't Just Take Our Word For It</h3>
           <p className="text-gray-400 mt-4 text-lg">Over 50 5-Star Reviews from local Colorado drivers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard 
                name="Steve & Molly"
                date="6 months ago"
                text="Traveling in the Denver area when a spring broke on our travel trailer. Bear Country Rv Repair had us back on the road in no time! Our situation was assessed and repairs made to fix our problem. Our trip was saved by the knowledgeable and friendly owners."
                source="Google Review"
            />
            <ReviewCard 
                name="Mike Ritzman"
                date="5 years ago"
                text="I’ve been doing business with Bear Country for close to ten years. I purchased my Boss snowplow from them. Mike’s mechanical skills are beyond compare. They have always bent over backwards to accommodate me."
                source="Boss Customer"
            />
             <ReviewCard 
                name="Dave Ferguson"
                date="3 months ago"
                text="We have owned RVs for 30 years and have been to various RV shops... Bear Country has always done a great job. Mike always gives great explanation and options. They are the first RV shop that we totally trust."
                source="Loyal Customer"
            />
        </div>
        
        <div className="mt-12 text-center">
             <a href="https://www.google.com/maps/place/Bear+Country+Colorado+Trailer+RV+Truck+Repair" target="_blank" rel="noreferrer" className="inline-flex items-center text-white border-b-2 border-bear-accent pb-1 hover:text-bear-accent transition-colors font-bold uppercase tracking-wide">
                Read All Reviews on Google
             </a>
        </div>
      </div>
    </section>
  );
};