import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, HeartPulse, Sparkles, Cloud, Shield, Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './components/ContactForm';

// Import images from src/assets/images
import UHC from '../assets/images/UHC.png';
import optumHealth from '../assets/images/optum-health.jpg';
import oscarHealth from '../assets/images/Oscar.jpg';
import tricare from '../assets/images/Tricare-1.png';
import galaxyHealth from '../assets/images/Galaxy-Health-Care-Pink-RGB-1024x1024.png';
import evernorthHealth from '../assets/images/Evernorth_Health_Services_Logo.jpg';
import multiplan from '../assets/images/multiplan.png';

const services = [
  {
    name: "Individual Therapy",
    description: "One-on-one sessions with experienced therapists to address personal challenges and mental health concerns.",
    icon: "🧠",
    link: "/services#individual-therapy"
  },
  {
    name: "Group Therapy",
    description: "Supportive group sessions where you can share experiences and learn from others in a safe environment.",
    icon: "👥",
    link: "/services#group-therapy"
  },
  {
    name: "Family Counseling",
    description: "Strengthen family bonds and improve communication through guided family therapy sessions.",
    icon: "👨‍👩‍👧‍👦",
    link: "/services#family-counseling"
  }
];

const conditions = [
  {
    name: "Anxiety",
    description: "Comprehensive treatment for various anxiety disorders including GAD, social anxiety, and panic disorders."
  },
  {
    name: "Depression",
    description: "Evidence-based approaches to manage and overcome depression, including medication management when needed."
  },
  {
    name: "Trauma",
    description: "Specialized trauma-focused therapy to help process and heal from past experiences."
  }
];

const insurances = [
  { name: "UnitedHealthcare", logo: "/UHC.png" },
  { name: "Optum Health", logo: "/optum-health.jpg" },
  { name: "Oscar Health", logo: "/Oscar.jpg" },
  { name: "Tricare", logo: "/Tricare-1.png" }
];

function Home() {
  return (
    <div className="pt-32 pb-20 bg-background-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-spotify-green/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-spotify-green/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-spotify-green/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-spotify animate-glow">Welcome to Ruby Reflections</h1>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Your journey to mental wellness starts here. We provide compassionate, professional mental health care tailored to your needs.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient-spotify">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card p-6 hover:shadow-xl transition-all duration-300 hover-lift group animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-spotify-green group-hover:text-spotify-green-light mb-4 animate-float">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-spotify-white">{service.name}</h3>
                <p className="mb-4 text-secondary-300 group-hover:text-spotify-white/90">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-spotify-green group-hover:text-spotify-green-light font-medium"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient-spotify">Conditions We Treat</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {conditions.map((condition, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-spotify-white">{condition.name}</h3>
                <p className="text-secondary-300">{condition.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/conditions"
              className="inline-flex items-center text-spotify-green hover:text-spotify-green-light font-medium"
            >
              View More Conditions
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient-spotify">Insurance We Accept</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {insurances.map((insurance, index) => (
              <div 
                key={index} 
                className="card p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <img 
                  src={insurance.logo} 
                  alt={insurance.name} 
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-gradient-spotify">Contact Us</h2>
              <p className="text-secondary-300 mb-8">
                Our nurses are always poised to take your calls and respond to your messages. Kindly leave a message now.
              </p>
              <div className="space-y-6">
                <div className="card p-6 flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-spotify-green" />
                  <div>
                    <p className="font-medium text-spotify-white">Texas</p>
                    <p className="text-secondary-300">469-250-1544</p>
                  </div>
                </div>
                <div className="card p-6 flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-spotify-green" />
                  <div>
                    <p className="font-medium text-spotify-white">New York</p>
                    <p className="text-secondary-300">347-378-3144</p>
                  </div>
                </div>
                <div className="card p-6 flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-spotify-green" />
                  <div>
                    <p className="font-medium text-spotify-white">Email</p>
                    <p className="text-secondary-300">info@rubyreflectionsmh.com</p>
                  </div>
                </div>
                <div className="card p-6 flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-spotify-green" />
                  <div>
                    <p className="font-medium text-spotify-white">Address</p>
                    <p className="text-secondary-300">Brooklyn, New York, 11249</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;