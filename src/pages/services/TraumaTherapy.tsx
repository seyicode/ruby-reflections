import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, CheckCircle } from 'lucide-react';

function TraumaTherapy() {
  const navigate = useNavigate();
  
  const benefits = [
    "Evidence-based trauma treatment approaches",
    "Safe and supportive environment",
    "Personalized coping strategies",
    "Integration of mind-body techniques",
    "Gradual exposure therapy when appropriate",
    "Regular progress assessment"
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <HeartPulse className="w-12 h-12 text-[#95B1A4]" />
            <h1 className="text-4xl font-bold">Trauma Therapy</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Our trauma therapy services provide specialized support for individuals healing from past trauma, helping you process experiences and develop resilience in a safe, supportive environment.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Trauma-Informed Approach</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#95B1A4]" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Treatment Methods</h2>
            <p className="text-gray-600 mb-6">
              We utilize various evidence-based trauma treatment approaches, including EMDR (Eye Movement Desensitization and Reprocessing), Cognitive Processing Therapy (CPT), and Somatic Experiencing, tailored to your specific needs and comfort level.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Areas of Focus</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Trauma Types</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Complex trauma</li>
                  <li>PTSD</li>
                  <li>Childhood trauma</li>
                  <li>Military trauma</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Recovery Focus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Emotional regulation</li>
                  <li>Stress management</li>
                  <li>Relationship healing</li>
                  <li>Building resilience</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#95B1A4] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Begin Your Healing Journey</h2>
              <p className="mb-6">
                Take the first step towards healing and recovery. Our trauma specialists are here to provide the support and guidance you need.
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

export default TraumaTherapy;