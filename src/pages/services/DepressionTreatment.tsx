import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, CheckCircle } from 'lucide-react';

function DepressionTreatment() {
  const navigate = useNavigate();
  
  const benefits = [
    "Comprehensive depression assessment",
    "Personalized treatment planning",
    "Evidence-based therapeutic approaches",
    "Lifestyle and wellness guidance",
    "Coping strategy development",
    "Ongoing support and monitoring"
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Cloud className="w-12 h-12 text-[#95B1A4]" />
            <h1 className="text-4xl font-bold">Depression Treatment</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Our depression treatment program offers comprehensive support and evidence-based therapies to help you overcome depression and rediscover joy and purpose in your life.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-6">Treatment Benefits</h2>
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
              We utilize a combination of therapeutic approaches, including Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and mindfulness-based techniques. Our treatment plans are tailored to address your specific symptoms and circumstances.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Treatment Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Types of Depression</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Major Depressive Disorder</li>
                  <li>Persistent Depressive Disorder</li>
                  <li>Seasonal Affective Disorder</li>
                  <li>Postpartum Depression</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Recovery Focus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Mood improvement</li>
                  <li>Energy and motivation</li>
                  <li>Sleep regulation</li>
                  <li>Life engagement</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#95B1A4] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Begin Your Recovery Journey</h2>
              <p className="mb-6">
                Take the first step towards overcoming depression. Our experienced team is here to support you on your path to recovery and renewed well-being.
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

export default DepressionTreatment;