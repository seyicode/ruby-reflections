import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-spotify-gray/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/Ruby-reflections-1 (1).png"
                alt="Ruby Reflections Logo" 
                className="h-12 w-auto brightness-110"
              />
              <span className="text-2xl font-bold text-gradient-spotify">Ruby Reflections</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <Link 
                to="/"
                className={`${location.pathname === '/' 
                  ? 'text-spotify-green' 
                  : 'text-spotify-white hover:text-spotify-green'} 
                  px-4 lg:px-6 py-2 rounded-md transition-all duration-300`}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className={`${location.pathname === '/about' 
                  ? 'text-spotify-green' 
                  : 'text-spotify-white hover:text-spotify-green'} 
                  px-4 lg:px-6 py-2 rounded-md transition-all duration-300`}
              >
                About Us
              </Link>
              <Link 
                to="/services"
                className={`${location.pathname.includes('/services') 
                  ? 'text-spotify-green' 
                  : 'text-spotify-white hover:text-spotify-green'} 
                  px-4 lg:px-6 py-2 rounded-md transition-all duration-300`}
              >
                Services
              </Link>
              <Link 
                to="/insurance"
                className={`${location.pathname === '/insurance' 
                  ? 'text-spotify-green' 
                  : 'text-spotify-white hover:text-spotify-green'} 
                  px-4 lg:px-6 py-2 rounded-md transition-all duration-300`}
              >
                Insurance
              </Link>
              <Link 
                to="/contact"
                className={`${location.pathname === '/contact' 
                  ? 'text-spotify-green' 
                  : 'text-spotify-white hover:text-spotify-green'} 
                  px-4 lg:px-6 py-2 rounded-md transition-all duration-300`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-spotify-white hover:text-spotify-green transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/"
                  className={`${location.pathname === '/' 
                    ? 'text-spotify-green' 
                    : 'text-spotify-white hover:text-spotify-green'} 
                    px-4 py-2 rounded-md transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about"
                  className={`${location.pathname === '/about' 
                    ? 'text-spotify-green' 
                    : 'text-spotify-white hover:text-spotify-green'} 
                    px-4 py-2 rounded-md transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/services"
                  className={`${location.pathname.includes('/services') 
                    ? 'text-spotify-green' 
                    : 'text-spotify-white hover:text-spotify-green'} 
                    px-4 py-2 rounded-md transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/insurance"
                  className={`${location.pathname === '/insurance' 
                    ? 'text-spotify-green' 
                    : 'text-spotify-white hover:text-spotify-green'} 
                    px-4 py-2 rounded-md transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance
                </Link>
                <Link 
                  to="/contact"
                  className={`${location.pathname === '/contact' 
                    ? 'text-spotify-green' 
                    : 'text-spotify-white hover:text-spotify-green'} 
                    px-4 py-2 rounded-md transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-spotify-gray text-spotify-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gradient-spotify">Ruby Reflections</h3>
              <p className="text-secondary-300">
                Providing compassionate mental health care in a safe and supportive environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gradient-spotify">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-secondary-300 hover:text-spotify-green transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-secondary-300 hover:text-spotify-green transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/insurance" className="text-secondary-300 hover:text-spotify-green transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-secondary-300 hover:text-spotify-green transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gradient-spotify">Contact Info</h3>
              <ul className="space-y-2 text-secondary-300">
                <li>Texas: 469-250-1544</li>
                <li>New York: 347-378-3144</li>
                <li>Email: info@rubyreflectionsmh.com</li>
                <li>Address: Brooklyn, New York, 11249</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-spotify-gray-light text-center text-secondary-300">
            <p>&copy; {new Date().getFullYear()} Ruby Reflections. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
