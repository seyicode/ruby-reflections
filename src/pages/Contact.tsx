import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import AppointmentScheduler from '../components/AppointmentScheduler';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-spotify-green/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-spotify-green/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-spotify-green/3 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-spotify mb-8 text-center animate-fade-in">
            Contact Us
          </h1>

          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`tab ${activeTab === 'contact' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Info
            </button>
            <button
              className={`tab ${activeTab === 'message' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('message')}
            >
              Send Message
            </button>
            <button
              className={`tab ${activeTab === 'schedule' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'contact' && (
              <div className="card animate-slide-up">
                <h2 className="text-2xl font-semibold text-spotify-white mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <PhoneIcon className="w-6 h-6 text-spotify-green mt-1" />
                    <div>
                      <h3 className="text-spotify-white font-medium">Phone</h3>
                      <p className="text-spotify-gray-light">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <EnvelopeIcon className="w-6 h-6 text-spotify-green mt-1" />
                    <div>
                      <h3 className="text-spotify-white font-medium">Email</h3>
                      <p className="text-spotify-gray-light">contact@rubyreflections.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="w-6 h-6 text-spotify-green mt-1" />
                    <div>
                      <h3 className="text-spotify-white font-medium">Address</h3>
                      <p className="text-spotify-gray-light">123 Mental Health Street, Wellness City, WC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="w-6 h-6 text-spotify-green mt-1" />
                    <div>
                      <h3 className="text-spotify-white font-medium">Hours</h3>
                      <p className="text-spotify-gray-light">Mon-Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'message' && (
              <div className="card animate-slide-up">
                <h2 className="text-2xl font-semibold text-spotify-white mb-4">Send us a Message</h2>
                <ContactForm />
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="card animate-slide-up">
                <h2 className="text-2xl font-semibold text-spotify-white mb-4">Schedule an Appointment</h2>
                <p className="text-spotify-gray-light mb-6">
                  Book a consultation with our mental health professionals. We offer flexible scheduling options to accommodate your needs.
                </p>
                <AppointmentScheduler />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
