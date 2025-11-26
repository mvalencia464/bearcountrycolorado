import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Areas Served', href: '#areas' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-bear-900/95 backdrop-blur-sm text-white z-50 shadow-lg border-b border-gray-700">
      {/* Top Bar for contact info */}
      <div className="bg-bear-accent py-2 px-4 text-xs sm:text-sm font-semibold text-center sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Englewood, CO</span>
            <span className="hidden sm:inline">|</span>
            <span>Since 2003</span>
        </div>
        <div className="mt-1 sm:mt-0">
          BY APPOINTMENT ONLY: MON-SAT 9AM-5PM
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">Bear Country</span>
              <span className="text-sm font-bold text-bear-accent tracking-widest uppercase">Colorado</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <Button asLink href="tel:303-761-2222" variant="primary" className="gap-2">
              <Phone size={18} />
              303-761-2222
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bear-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-bear-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
                <Button asLink href="tel:303-761-2222" variant="primary" className="w-full gap-2 justify-center">
                    <Phone size={18} />
                    Call Now
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};