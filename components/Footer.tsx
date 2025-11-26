import React from 'react';
import { CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 text-center text-gray-500 text-sm border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left border-b border-gray-800 pb-8">
            <div>
                <h4 className="text-white font-bold uppercase mb-4">Bear Country Colorado</h4>
                <p className="mb-2">Trailer, RV, Truck & Fleet Repair</p>
                <p>Serving Englewood, Denver, and Front Range</p>
            </div>
            <div>
                 <h4 className="text-white font-bold uppercase mb-4">Contact</h4>
                 <p className="mb-2">4615 S. Santa Fe Drive<br/>Englewood, CO 80110</p>
                 <a href="tel:303-761-2222" className="text-bear-accent font-bold hover:text-white transition-colors">303-761-2222</a>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase mb-4">Payment Methods</h4>
                <div className="flex gap-2 mb-2">
                    <div className="bg-gray-800 px-2 py-1 rounded text-xs font-bold text-gray-300">VISA</div>
                    <div className="bg-gray-800 px-2 py-1 rounded text-xs font-bold text-gray-300">MC</div>
                    <div className="bg-gray-800 px-2 py-1 rounded text-xs font-bold text-gray-300">AMEX</div>
                    <div className="bg-gray-800 px-2 py-1 rounded text-xs font-bold text-gray-300">DISC</div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <CreditCard size={14} />
                    <span>Secure Transactions</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Bear Country Colorado. All Rights Reserved.</p>
            <div className="flex gap-4">
                <span className="text-xs text-gray-600 hover:text-gray-400 cursor-pointer">Privacy Policy</span>
                <span className="text-xs text-gray-600 hover:text-gray-400 cursor-pointer">Terms of Service</span>
            </div>
        </div>
      </div>
    </footer>
  );
};