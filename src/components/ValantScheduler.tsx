import React, { useState, useEffect } from 'react';
import { valantService } from '../services/valantService';
import { Calendar } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface Provider {
  id: string;
  name: string;
  specialty: string;
}

interface AppointmentType {
  id: string;
  name: string;
  duration: number;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
  providerId: string;
  available: boolean;
}

const ValantScheduler: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [appointmentTypes, setAppointmentTypes] = useState<AppointmentType[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      const [providersData, typesData] = await Promise.all([
        valantService.getProviders(),
        valantService.getAppointmentTypes()
      ]);
      setProviders(providersData);
      setAppointmentTypes(typesData);
    } catch (err) {
      setError('Failed to load initial data. Please try again later.');
      console.error('Error loading initial data:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadAvailableSlots = async () => {
    if (!selectedProvider || !selectedDate) return;

    setLoading(true);
    try {
      const endDate = new Date(selectedDate);
      endDate.setDate(endDate.getDate() + 1);
      
      const slots = await valantService.getAvailableSlots(
        selectedProvider,
        selectedDate,
        endDate
      );
      setAvailableSlots(slots);
    } catch (err) {
      setError('Failed to load available slots. Please try again later.');
      console.error('Error loading slots:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedProvider && selectedDate) {
      loadAvailableSlots();
    }
  }, [selectedProvider, selectedDate]);

  const handleScheduleAppointment = async (slot: TimeSlot) => {
    if (!selectedType || !selectedProvider) return;

    setLoading(true);
    try {
      await valantService.scheduleAppointment({
        providerId: selectedProvider,
        startTime: slot.startTime,
        endTime: slot.endTime,
        appointmentType: selectedType,
        patientId: '', // This would need to be provided by your authentication system
      });
      
      // Refresh available slots after scheduling
      await loadAvailableSlots();
      
      // Show success message or redirect
      alert('Appointment scheduled successfully!');
    } catch (err) {
      setError('Failed to schedule appointment. Please try again later.');
      console.error('Error scheduling appointment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-dark p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-accent-teal-100 mr-2" />
        <h2 className="text-2xl font-semibold text-white">Schedule Appointment</h2>
      </div>

      {error && (
        <div className="bg-red-500/20 text-red-100 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Provider Selection */}
        <div>
          <label className="block text-accent-blue-100 mb-2">Select Provider</label>
          <select
            className="w-full bg-dark-300 text-white rounded-lg p-3 border border-accent-blue-400/30 focus:border-accent-teal-400 transition-colors"
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
          >
            <option value="">Choose a provider...</option>
            {providers.map((provider) => (
              <option key={provider.id} value={provider.id}>
                {provider.name} - {provider.specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Appointment Type Selection */}
        <div>
          <label className="block text-accent-blue-100 mb-2">Appointment Type</label>
          <select
            className="w-full bg-dark-300 text-white rounded-lg p-3 border border-accent-blue-400/30 focus:border-accent-teal-400 transition-colors"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Choose appointment type...</option>
            {appointmentTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name} ({type.duration} min)
              </option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-accent-blue-100 mb-2">Select Date</label>
          <input
            type="date"
            className="w-full bg-dark-300 text-white rounded-lg p-3 border border-accent-blue-400/30 focus:border-accent-teal-400 transition-colors"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      {/* Available Time Slots */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleScheduleAppointment(slot)}
              disabled={!slot.available}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                slot.available
                  ? 'bg-accent-teal-400/20 text-white hover:bg-accent-teal-400/40 hover:shadow-lg border-glow-teal'
                  : 'bg-dark-300/50 text-gray-400 cursor-not-allowed'
              }`}
            >
              {new Date(slot.startTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ValantScheduler; 