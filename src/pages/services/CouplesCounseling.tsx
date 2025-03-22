import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, CheckCircle } from 'lucide-react';

function CouplesCounseling() {
  const navigate = useNavigate();
  
  const benefits = [
    "Improved communication skills",
    "Conflict resolution strategies",
    "Rebuilding trust and intimacy",
    "Understanding relationship patterns",
    "Setting healthy boundaries",
    "Strengthening emotional connection"
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-12 h-12 text-[#95B1A4]" />
            <h1 className="text-4xl font-bold">Couples Counseling</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Our couples counseling services help partners strengthen their relationship, improve communication, and work through challenges together in a supportive environment.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-6">How We Help Couples</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#95B1A4]" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We use evidence-based approaches including Emotionally Focused Therapy (EFT) and the Gottman Method to help couples identify and break negative patterns, build stronger bonds, and create lasting positive change in their relationships.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Common Areas We Address</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Relationship Issues</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Communication breakdown</li>
                  <li>Trust issues</li>
                  <li>Intimacy concerns</li>
                  <li>Conflict resolution</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Life Transitions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Marriage preparation</li>
                  <li>Parenting challenges</li>
                  <li>Career changes</li>
                  <li>Blended families</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#95B1A4] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Start Your Journey Together</h2>
              <p className="mb-6">
                Take the first step towards a stronger, healthier relationship. Our experienced couples counselors are here to guide you both.
              </p>
              <button 
                onClick={handleContactClick}
                className="bg-white text-[#95B1A4] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouplesCounseling;