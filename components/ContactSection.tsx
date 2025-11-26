import React from 'react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-bear-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-black uppercase mb-8 border-l-4 border-bear-accent pl-4">Contact Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-bear-accent mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold">Location</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=4615+S+Santa+Fe+Dr+Englewood+CO+80110" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-300 hover:text-white block mt-1 leading-relaxed"
                  >
                    4615 S. Santa Fe Drive<br />
                    Englewood, CO 80110
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-bear-accent mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <a href="tel:303-761-2222" className="text-3xl font-black text-white hover:text-bear-accent transition-colors block mt-1">
                    303-761-2222
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Make your appointment now!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-bear-accent mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold">Hours</h3>
                  <ul className="text-gray-300 mt-1 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Sat:</span> <span>9 AM - 5 PM</span></li>
                    <li className="flex justify-between w-48 text-red-400"><span>Sunday:</span> <span>CLOSED</span></li>
                  </ul>
                  <div className="mt-4 flex items-center gap-2 text-bear-accent bg-bear-800 py-2 px-3 rounded-md w-fit">
                    <Calendar size={18} />
                    <span className="font-bold text-sm uppercase">By Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-96 min-h-[400px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37610.55062503277!2d-105.03217268783001!3d39.63446306525286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c803f701547f3%3A0xcbcc3a0e3aa90e0e!2sBEAR%20COUNTRY%20COLORADO%20TRAILER%20RV%20TRUCK%20REPAIR!5e0!3m2!1sen!2sus!4v1764097761373!5m2!1sen!2sus" 
              className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bear Country Colorado Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};