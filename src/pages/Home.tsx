import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Users, HeartPulse, Sparkles, Cloud, Shield, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { sendEmail } from '../emailService';
import ContactForm from '../components/ContactForm';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    title: "Your Journey to Mental Wellness Begins Here",
    subtitle: "Compassionate mental health care in a safe, supportive environment."
  },
  {
    url: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80",
    title: "Professional Mental Health Support",
    subtitle: "Expert care tailored to your unique needs and goals."
  },
  {
    url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80",
    title: "A Safe Space for Healing",
    subtitle: "Find peace and support in our welcoming environment."
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    title: "Personalized Treatment Plans",
    subtitle: "Comprehensive care designed for your specific needs."
  },
  {
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    title: "Begin Your Recovery Journey",
    subtitle: "Take the first step towards better mental health today."
  }
];

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    name: "Individual Therapy",
    description: "One-on-one counseling sessions tailored to your unique needs and goals.",
    link: "/services/individual-therapy"
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "Couples Counseling",
    description: "Support for couples seeking to strengthen their relationship and overcome challenges.",
    link: "/services/couples-counseling"
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    name: "Trauma Therapy",
    description: "Specialized treatment for healing from past trauma and PTSD.",
    link: "/services/trauma-therapy"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    name: "Anxiety Treatment",
    description: "Evidence-based approaches to managing anxiety and panic disorders.",
    link: "/services/anxiety-treatment"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    name: "Depression Treatment",
    description: "Comprehensive support for overcoming depression and improving mood.",
    link: "/services/depression-treatment"
  }
];

const conditions = [
  {
    name: "Depression",
    description: "Comprehensive treatment for various forms of depression"
  },
  {
    name: "Anxiety",
    description: "Management strategies for anxiety disorders"
  },
  {
    name: "PTSD",
    description: "Trauma-focused therapy and support"
  },
  {
    name: "Bipolar Disorder",
    description: "Stabilization and ongoing management"
  },
  {
    name: "ADHD",
    description: "Assessment and treatment plans"
  },
  {
    name: "OCD",
    description: "Evidence-based OCD treatment"
  }
];

const insurances = [
  { name: "UnitedHealthcare", logo: "/UHC.png" },
  { name: "Optum Health", logo: "/optum-health.jpg" },
  { name: "Oscar Health", logo: "/Oscar.jpg" },
  { name: "Tricare", logo: "/Tricare-1.png" },
  { name: "Galaxy Health Care", logo: "/Galaxy-Health-Care-Pink-RGB-1024x1024.png" },
  { name: "Evernorth Health Services", logo: "/Evernorth_Health_Services_Logo.jpg" },
  { name: "MultiPlan", logo: "/multiplan.png" }
];

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-dark-400 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-300/50 to-dark-500/80 z-0"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-purple-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-teal-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 scale-105"
              style={{
                backgroundImage: `url("${image.url}")`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-dark-400/80 to-dark-500/90"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
              <div className={`max-w-3xl transform transition-all duration-1000 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-purple mb-4 sm:mb-6 animate-glow">
                  {image.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-accent-blue-100 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  {image.subtitle}
                </p>
                <Link 
                  to="/contact"
                  className="inline-block bg-gradient-teal text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:shadow-lg hover:scale-105 transform transition-all duration-300 border-glow-teal animate-fade-in hover-glow"
                  style={{ animationDelay: '0.6s' }}
                >
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent-teal-300 scale-125 glow-teal' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 rounded-full bg-dark-300/50 hover:bg-accent-purple-400/50 transition-all duration-300 hover-glow"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 rounded-full bg-dark-300/50 hover:bg-accent-blue-400/50 transition-all duration-300 hover-glow"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-gradient-purple animate-glow">Our Services</h2>
          <p className="text-center text-accent-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in text-sm sm:text-base">
            Comprehensive mental health services tailored to your unique needs
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-dark p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift group animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`${
                  index % 3 === 0 ? 'text-accent-purple-100' : 
                  index % 3 === 1 ? 'text-accent-blue-100' : 
                  'text-accent-teal-100'
                } group-hover:text-white mb-4 animate-float`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{service.name}</h3>
                <p className="mb-4 text-sm sm:text-base text-accent-blue-100/80 group-hover:text-white/90">{service.description}</p>
                <Link 
                  to={service.link}
                  className={`inline-flex items-center text-sm sm:text-base ${
                    index % 3 === 0 ? 'text-accent-purple-100' : 
                    index % 3 === 1 ? 'text-accent-blue-100' : 
                    'text-accent-teal-100'
                  } group-hover:text-white font-medium`}
                >
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-dark-400 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-teal-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient-blue animate-glow">Conditions We Treat</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {conditions.map((condition, index) => (
              <div 
                key={index}
                className={`p-6 glass-dark rounded-lg ${
                  index % 3 === 0 ? 'hover:bg-accent-purple-400/30 border-glow-purple' : 
                  index % 3 === 1 ? 'hover:bg-accent-blue-400/30 border-glow-blue' : 
                  'hover:bg-accent-teal-400/30 border-glow-teal'
                } hover:text-white transition-all duration-300 hover-lift animate-fade-in`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className={`text-xl font-semibold mb-2 ${
                  index % 3 === 0 ? 'text-accent-purple-100' : 
                  index % 3 === 1 ? 'text-accent-blue-100' : 
                  'text-accent-teal-100'
                }`}>{condition.name}</h3>
                <p className="text-white/80">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-teal-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient-teal animate-glow">Insurance We Accept</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {insurances.map((insurance, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-6 glass-dark rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <img 
                  src={insurance.logo} 
                  alt={`${insurance.name} logo`} 
                  className="max-h-12 w-auto object-contain animate-pulse-soft"
                  style={{ animationDelay: `${0.2 * index}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section className="py-20 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-gradient-purple">Meet Our Provider</h2>
              <h3 className="text-xl font-semibold mb-4 text-white">KEMISOLA EBIETOMIYE</h3>
              <p className="text-accent-teal-100 font-medium mb-6">Psychiatric Nurse Practitioner, MSN, APRN, PMHNP-BC</p>
              <div className="prose max-w-none text-accent-blue-100/90">
                <p className="mb-4">
                  "Kemi" Kemisola Ebietomiye is an ANCC board certified Psychiatric Nurse Practitioner. As a psychiatric nurse practitioner, Kemi brings a unique blend of experiences to practice. With a solid foundation forged during her eight-year tenure in the United States Army, she developed resilience, discipline, and a commitment to service.
                </p>
                <p className="mb-4">
                  Kemi obtained a post master's certificate as a Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) from Walden University. Kemi has honed her skills across diverse settings, including outpatient clinics, psychiatric hospitals, and community mental health centers.
                </p>
                <p>
                  Her approach is open-minded, holistic, and solution-oriented. Her goal for each appointment is for patients to leave feeling confident in their treatment plan, respected in their concerns, and hopeful about their future.
                </p>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="mt-8 bg-gradient-teal text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition border-glow-teal hover-glow"
              >
                Schedule a Consultation
              </button>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden glass-dark border-glow-blue animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                alt="Dr. Kemisola Ebietomiye"
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent-teal-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 text-gradient-blue animate-glow">Contact Us</h2>
              <p className="text-accent-blue-100 mb-8">
                Our nurses are always poised to take your calls and respond to your messages. Kindly leave a message now.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-accent-purple-100" />,
                    title: "Texas",
                    content: "469-250-1544",
                    color: "purple"
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-accent-purple-100" />,
                    title: "New York",
                    content: "347-378-3144",
                    color: "purple"
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-accent-blue-100" />,
                    title: "Email",
                    content: "info@rubyreflectionsmh.com",
                    color: "blue"
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-accent-teal-100" />,
                    title: "Address",
                    content: "Brooklyn, New York, 11249",
                    color: "teal"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 p-6 glass-dark rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift border-glow-${item.color} animate-fade-in`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className={`animate-pulse-soft`} style={{ animationDelay: `${0.2 * index}s` }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className={`text-accent-${item.color}-100`}>{item.content}</p>
                    </div>
                  </div>
                ))}
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
