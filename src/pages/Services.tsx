import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, HeartPulse, Sparkles, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-12 h-12" />,
    name: "Individual Therapy",
    description: "One-on-one counseling sessions tailored to your unique needs and goals.",
    link: "/services/individual-therapy",
    benefits: [
      "Personalized treatment approach",
      "Safe and confidential environment",
      "Flexible scheduling options",
      "Evidence-based techniques"
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    name: "Couples Counseling",
    description: "Support for couples seeking to strengthen their relationship and overcome challenges.",
    link: "/services/couples-counseling",
    benefits: [
      "Improve communication",
      "Resolve conflicts effectively",
      "Rebuild trust and intimacy",
      "Strengthen emotional bonds"
    ]
  },
  {
    icon: <HeartPulse className="w-12 h-12" />,
    name: "Trauma Therapy",
    description: "Specialized treatment for healing from past trauma and PTSD.",
    link: "/services/trauma-therapy",
    benefits: [
      "Process traumatic experiences",
      "Develop coping strategies",
      "Reduce anxiety and fear",
      "Build emotional resilience"
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    name: "Anxiety Treatment",
    description: "Evidence-based approaches to managing anxiety and panic disorders.",
    link: "/services/anxiety-treatment",
    benefits: [
      "Identify anxiety triggers",
      "Learn management techniques",
      "Reduce panic attacks",
      "Improve daily functioning"
    ]
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    name: "Depression Treatment",
    description: "Comprehensive support for overcoming depression and improving mood.",
    link: "/services/depression-treatment",
    benefits: [
      "Mood improvement strategies",
      "Activity and lifestyle planning",
      "Thought pattern restructuring",
      "Support system building"
    ]
  }
];

function Services() {
  return (
    <div className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-purple-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-teal-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple animate-glow">Our Services</h1>
          <p className="text-xl text-accent-blue-100 max-w-3xl mx-auto">
            We offer comprehensive mental health services tailored to meet your unique needs. Our evidence-based approaches and experienced professionals are here to support your journey to wellness.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="glass-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-glow-blue animate-fade-in hover-lift" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className={`${
                    index % 3 === 0 ? 'text-accent-purple-100' : 
                    index % 3 === 1 ? 'text-accent-blue-100' : 
                    'text-accent-teal-100'
                  } mb-6 animate-float`}>
                    {service.icon}
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 ${
                    index % 3 === 0 ? 'text-gradient-purple' : 
                    index % 3 === 1 ? 'text-gradient-blue' : 
                    'text-gradient-teal'
                  }`}>
                    {service.name}
                  </h2>
                  <p className="text-accent-blue-100 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-accent-blue-100">
                        <svg className={`w-5 h-5 mr-3 ${
                          index % 3 === 0 ? 'text-accent-purple-100' : 
                          index % 3 === 1 ? 'text-accent-blue-100' : 
                          'text-accent-teal-100'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className={`inline-flex items-center px-6 py-3 ${
                      index % 3 === 0 ? 'bg-gradient-purple border-glow-purple' : 
                      index % 3 === 1 ? 'bg-gradient-blue border-glow-blue' : 
                      'bg-gradient-teal border-glow-teal'
                    } text-white rounded-lg hover:shadow-lg transition-all duration-300 hover-glow`}
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="glass-dark p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-6xl mb-4 ${
                      index % 3 === 0 ? 'text-accent-purple-100' : 
                      index % 3 === 1 ? 'text-accent-blue-100' : 
                      'text-accent-teal-100'
                    } animate-float`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Specialized Care</h3>
                    <p className="text-accent-blue-100">Professional support tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
