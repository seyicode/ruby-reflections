import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle } from 'lucide-react';

function AnxietyTreatment() {
  const navigate = useNavigate();
  
  const benefits = [
    "Personalized anxiety management strategies",
    "Evidence-based treatment approaches",
    "Coping skills development",
    "Lifestyle modification guidance",
    "Regular progress monitoring",
    "Long-term recovery support"
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Sparkles className="w-12 h-12 text-[#95B1A4]" />
            <h1 className="text-4xl font-bold">Anxiety Treatment</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive anxiety treatment program helps you understand and manage anxiety symptoms while developing effective coping strategies for long-term wellness.
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
              We use a combination of Cognitive Behavioral Therapy (CBT), mindfulness techniques, and exposure therapy when appropriate. Our treatment plans are tailored to address your specific type of anxiety and its impact on your life.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Types of Anxiety We Treat</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Common Anxiety Disorders</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Generalized Anxiety Disorder</li>
                  <li>Panic Disorder</li>
                  <li>Social Anxiety</li>
                  <li>Specific Phobias</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Treatment Focus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Symptom management</li>
                  <li>Trigger identification</li>
                  <li>Relaxation techniques</li>
                  <li>Lifestyle modifications</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#95B1A4] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Start Your Journey to Peace</h2>
              <p className="mb-6">
                Take the first step towards managing your anxiety. Our specialists are here to help you develop the tools you need for lasting peace of mind.
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

export default AnxietyTreatment;