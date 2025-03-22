import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-dark-500 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-teal-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 animate-fade-in">
            <img 
              src="/Ruby-reflections-1 (1).png"
              alt="Ruby Reflections Logo" 
              className="h-16 w-auto mb-4 animate-float"
            />
            <p className="text-accent-blue-100 text-sm">
              Your dedicated partner in mental health and well-being. Our team of professionals is here to support you through the challenges of mental health.
            </p>
          </div>

          {/* Useful Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient-purple">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-accent-purple-100 hover:text-white transition hover-lift inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-blue-100 hover:text-white transition hover-lift inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-teal-100 hover:text-white transition hover-lift inline-block">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-purple-100 hover:text-white transition hover-lift inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient-blue">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-accent-blue-100 hover:text-white transition-colors group">
                <div className="bg-accent-purple-400/20 p-1 rounded-full group-hover:bg-accent-purple-400/40 transition-colors">
                  <Phone className="w-4 h-4 text-accent-purple-100" />
                </div>
                <span>469-250-1544</span>
              </li>
              <li className="flex items-center gap-2 text-accent-blue-100 hover:text-white transition-colors group">
                <div className="bg-accent-purple-400/20 p-1 rounded-full group-hover:bg-accent-purple-400/40 transition-colors">
                  <Phone className="w-4 h-4 text-accent-purple-100" />
                </div>
                <span>347-378-3144</span>
              </li>
              <li className="flex items-center gap-2 text-accent-blue-100 hover:text-white transition-colors group">
                <div className="bg-accent-blue-400/20 p-1 rounded-full group-hover:bg-accent-blue-400/40 transition-colors">
                  <Mail className="w-4 h-4 text-accent-blue-100" />
                </div>
                <span>info@rubyreflectionsmh.com</span>
              </li>
              <li className="flex items-center gap-2 text-accent-blue-100 hover:text-white transition-colors group">
                <div className="bg-accent-teal-400/20 p-1 rounded-full group-hover:bg-accent-teal-400/40 transition-colors">
                  <MapPin className="w-4 h-4 text-accent-teal-100" />
                </div>
                <span>Valley Stream, New York, 11581</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient-teal">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-accent-teal-100 hover:text-white transition-colors group">
                <div className="bg-accent-teal-400/20 p-1 rounded-full group-hover:bg-accent-teal-400/40 transition-colors">
                  <Clock className="w-4 h-4 text-accent-teal-100" />
                </div>
                <span>Monday- Saturday (0800-2100)</span>
              </li>
              <li className="flex items-center gap-2 text-accent-teal-100 hover:text-white transition-colors group">
                <div className="bg-accent-teal-400/20 p-1 rounded-full group-hover:bg-accent-teal-400/40 transition-colors">
                  <Clock className="w-4 h-4 text-accent-teal-100" />
                </div>
                <span>Sunday (closed)</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" className="text-accent-purple-100 hover:text-white transition hover-glow">
                <Facebook className="w-5 h-5 animate-pulse-soft" />
              </a>
              <a href="https://linkedin.com" className="text-accent-blue-100 hover:text-white transition hover-glow">
                <Linkedin className="w-5 h-5 animate-pulse-soft" style={{ animationDelay: '0.3s' }} />
              </a>
              <a href="https://instagram.com" className="text-accent-teal-100 hover:text-white transition hover-glow">
                <Instagram className="w-5 h-5 animate-pulse-soft" style={{ animationDelay: '0.6s' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-blue-100/70 text-sm">
              © {new Date().getFullYear()} Ruby Reflections Mental Health Services. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-accent-purple-100/70 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-accent-blue-100/70 hover:text-white text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
