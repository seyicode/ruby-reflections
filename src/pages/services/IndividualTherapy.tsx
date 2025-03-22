import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, CheckCircle } from 'lucide-react';

function IndividualTherapy() {
  const navigate = useNavigate();
  
  const benefits = [
    "Personalized treatment plans tailored to your needs",
    "Safe, confidential environment for self-exploration",
    "Evidence-based therapeutic approaches",
    "Flexible scheduling options",
    "Development of practical coping strategies",
    "Regular progress assessment and plan adjustments"
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Brain className="w-12 h-12 text-[#95B1A4]" />
            <h1 className="text-4xl font-bold">Individual Therapy</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Our individual therapy services provide a safe, confidential space for you to work through personal challenges, develop coping strategies, and achieve your mental health goals.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
              <p className="text-gray-600 mb-4">
                During your individual therapy sessions, you'll work one-on-one with a licensed therapist who will help you:
              </p>
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
              We utilize various evidence-based therapeutic approaches, including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and other modalities based on your specific needs and goals. Our therapists work collaboratively with you to develop a treatment plan that addresses your unique situation.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Common Areas We Address</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Personal Growth</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Self-esteem and confidence</li>
                  <li>Life transitions</li>
                  <li>Career challenges</li>
                  <li>Personal identity</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Mental Health</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Anxiety and depression</li>
                  <li>Stress management</li>
                  <li>Trauma processing</li>
                  <li>Emotional regulation</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#95B1A4] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Ready to Begin Your Journey?</h2>
              <p className="mb-6">
                Take the first step towards personal growth and emotional well-being. Our experienced therapists are here to support you every step of the way.
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

export default IndividualTherapy;