import React from 'react';
import { Users, Heart, Brain } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-dark-400">
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-purple-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-teal-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-purple animate-glow">About Ruby Reflections</h1>
          
          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-16 glass-dark p-8 rounded-lg border-glow-purple">
            <h2 className="text-2xl font-semibold mb-6 text-accent-purple-100">Our Mission</h2>
            <p className="text-accent-blue-100 mb-6">
              At Ruby Reflections Mental Health Services, our mission is to provide accessible, high-quality mental health care that empowers individuals to overcome challenges and achieve emotional well-being. We believe in creating a safe, supportive environment where healing and growth can flourish.
            </p>
            <p className="text-accent-blue-100">
              We are committed to delivering evidence-based therapeutic services while maintaining a compassionate, person-centered approach that honors each individual's unique journey toward mental wellness.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-dark p-8 rounded-lg border-glow-purple text-center hover-lift transition-all duration-300">
              <Heart className="w-12 h-12 text-accent-purple-100 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Compassion</h3>
              <p className="text-accent-blue-100">
                We approach every individual with genuine care and understanding, creating a safe space for healing and growth.
              </p>
            </div>
            <div className="glass-dark p-8 rounded-lg border-glow-blue text-center hover-lift transition-all duration-300">
              <Brain className="w-12 h-12 text-accent-blue-100 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
              <p className="text-accent-blue-100">
                We maintain the highest standards of professional care, utilizing evidence-based practices and continuing education.
              </p>
            </div>
            <div className="glass-dark p-8 rounded-lg border-glow-teal text-center hover-lift transition-all duration-300">
              <Users className="w-12 h-12 text-accent-teal-100 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Inclusivity</h3>
              <p className="text-accent-blue-100">
                We celebrate diversity and create an inclusive environment where all feel welcome and respected.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-accent-teal-100">Our Team</h2>
            <p className="text-accent-blue-100 mb-6">
              Our team of licensed mental health professionals brings together diverse expertise and specializations to provide comprehensive care. Each therapist is committed to ongoing professional development and maintains the highest standards of ethical practice.
            </p>
            <p className="text-accent-blue-100 mb-6">
              We understand that finding the right therapist is crucial for successful treatment. Our clinicians are carefully selected for their expertise, empathy, and dedication to helping clients achieve their goals.
            </p>
            <div className="glass-dark p-8 rounded-lg border-glow-teal">
              <h3 className="text-xl font-semibold mb-4 text-white">Our Qualifications</h3>
              <ul className="space-y-3">
                {[
                  "Licensed Mental Health Professionals",
                  "Advanced Training in Various Therapeutic Modalities",
                  "Ongoing Professional Development",
                  "Cultural Competency Training"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-accent-blue-100">
                    <svg className="w-5 h-5 mr-3 text-accent-teal-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;