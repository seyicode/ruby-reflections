import React from 'react';
import { Link } from 'react-router-dom';

const insurances = [
  { name: "UnitedHealthcare", logo: "/UHC.png" },
  { name: "Optum Health", logo: "/optum-health.jpg" },
  { name: "Oscar Health", logo: "/Oscar.jpg" },
  { name: "Tricare", logo: "/Tricare-1.png" },
  { name: "Galaxy Health Care", logo: "/Galaxy-Health-Care-Pink-RGB-1024x1024.png" },
  { name: "Evernorth Health Services", logo: "/Evernorth_Health_Services_Logo.jpg" },
  { name: "MultiPlan", logo: "/multiplan.png" }
];

const additionalCoverage = [
  "Medicare",
  "Out-of-Network Benefits",
  "Employee Assistance Programs (EAP)",
  "FSA/HSA Accepted",
  "Sliding Scale Options",
  "Payment Plans Available"
];

function Insurance() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple animate-glow">Insurance & Payment Options</h1>
          <p className="text-xl text-accent-blue-100 max-w-3xl mx-auto">
            We work with major insurance providers to make mental health care accessible and affordable. Our team will help you understand your coverage and payment options.
          </p>
        </div>

        {/* Insurance Providers */}
        <div className="glass-dark rounded-lg shadow-lg p-8 mb-12 border-glow-blue animate-fade-in hover-lift transition-all duration-300">
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient-blue">Accepted Insurance Providers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {insurances.map((insurance, index) => (
              <div 
                key={index} 
                className="p-6 glass-dark rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 animate-fade-in hover-lift"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <img 
                  src={insurance.logo} 
                  alt={`${insurance.name} logo`} 
                  className="max-h-12 w-auto object-contain animate-pulse-soft brightness-110"
                  style={{ animationDelay: `${0.2 * index}s` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Coverage */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-dark rounded-lg shadow-lg p-8 border-glow-purple animate-fade-in hover-lift transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gradient-purple">Additional Coverage Options</h2>
            <ul className="space-y-4">
              {additionalCoverage.map((coverage, index) => (
                <li key={index} className="flex items-center text-accent-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-3 text-accent-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {coverage}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-dark rounded-lg shadow-lg p-8 border-glow-teal animate-fade-in hover-lift transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-6 text-gradient-teal">Insurance Verification</h2>
            <p className="text-accent-blue-100 mb-6">
              We'll help verify your insurance coverage before your first appointment. Our team will work with you to understand your benefits and any out-of-pocket expenses.
            </p>
            <div className="glass-dark p-6 rounded-lg border-glow-teal">
              <h3 className="text-xl font-semibold mb-4 text-white">What to Have Ready</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-accent-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-3 text-accent-teal-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Insurance Card
                </li>
                <li className="flex items-center text-accent-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-3 text-accent-teal-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Photo ID
                </li>
                <li className="flex items-center text-accent-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-3 text-accent-teal-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  List of Current Medications
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="glass-dark rounded-lg shadow-lg p-8 border-glow-blue animate-fade-in hover-lift transition-all duration-300" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gradient-blue animate-glow">Questions About Coverage?</h2>
            <p className="mb-6 text-accent-blue-100">
              Our team is here to help you understand your insurance benefits and payment options.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-gradient-teal text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 border-glow-teal hover-glow"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
