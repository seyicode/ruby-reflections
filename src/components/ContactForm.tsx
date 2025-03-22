import React, { useState } from 'react';
import { sendEmail } from '../emailService';
import LoadingSpinner from './LoadingSpinner';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  smsConsent: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
  };

  const validateForm = () => {
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
    let isValid = true;

    if (formData.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
      isValid = false;
    }

    if (formData.lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (e.g., 123-456-7890)';
      isValid = false;
    }

    if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const fullMessage = `
Name: ${fullName}
Phone: ${formData.phone}
SMS Consent: ${formData.smsConsent}

Message:
${formData.message}
      `.trim();

      await sendEmail(fullName, formData.email, fullMessage);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        smsConsent: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus.type && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success' ? 'bg-accent-cream/50 text-secondary-700' : 'bg-red-50 text-red-700'
        }`}>
          {submitStatus.message}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-secondary-700 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border ${
              formErrors.firstName ? 'border-red-500' : 'border-accent-spotify/30'
            } text-secondary-800 focus:ring-2 focus:ring-accent-spotify/30 focus:border-accent-spotify transition-colors`}
            required
          />
          {formErrors.firstName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-secondary-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border ${
              formErrors.lastName ? 'border-red-500' : 'border-accent-spotify/30'
            } text-secondary-800 focus:ring-2 focus:ring-accent-spotify/30 focus:border-accent-spotify transition-colors`}
            required
          />
          {formErrors.lastName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-secondary-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border ${
              formErrors.email ? 'border-red-500' : 'border-accent-spotify/30'
            } text-secondary-800 focus:ring-2 focus:ring-accent-spotify/30 focus:border-accent-spotify transition-colors`}
            required
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-secondary-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border ${
              formErrors.phone ? 'border-red-500' : 'border-accent-spotify/30'
            } text-secondary-800 focus:ring-2 focus:ring-accent-spotify/30 focus:border-accent-spotify transition-colors`}
            required
          />
          {formErrors.phone && (
            <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-secondary-700 mb-2">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className={`w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border ${
            formErrors.message ? 'border-red-500' : 'border-accent-spotify/30'
          } text-secondary-800 focus:ring-2 focus:ring-accent-spotify/30 focus:border-accent-spotify transition-colors`}
          required
        ></textarea>
        {formErrors.message && (
          <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
        )}
      </div>
      <div>
        <p className="text-secondary-700 mb-3">Would you like to receive text messages from Rubyreflections Mental Health?</p>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="smsConsent"
              value="yes"
              checked={formData.smsConsent === 'yes'}
              onChange={handleInputChange}
              className="text-accent-spotify focus:ring-accent-spotify"
            />
            <span className="text-secondary-700">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="smsConsent"
              value="no"
              checked={formData.smsConsent === 'no'}
              onChange={handleInputChange}
              className="text-accent-spotify focus:ring-accent-spotify"
            />
            <span className="text-secondary-700">No</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-accent-spotify text-white rounded-lg hover:bg-accent-spotify/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner />
            <span>Sending...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm; 