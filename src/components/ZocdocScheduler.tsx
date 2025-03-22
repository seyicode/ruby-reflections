import React, { useState, useEffect } from 'react';
import { zocdocService } from '../services/zocdocService';
import { Calendar, MapPin, Star, Clock } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  address: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  nextAvailability: string;
  insuranceList: string[];
}

interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

const ZocdocScheduler: React.FC = () => {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [insurance, setInsurance] = useState('');
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [insuranceProviders, setInsuranceProviders] = useState<string[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [availability, setAvailability] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      const [specialtiesData, insuranceData] = await Promise.all([
        zocdocService.getSpecialties(),
        zocdocService.getInsuranceProviders()
      ]);
      setSpecialties(specialtiesData);
      setInsuranceProviders(insuranceData);
    } catch (err) {
      setError('Failed to load initial data. Please try again later.');
      console.error('Error loading initial data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!specialty && !location && !insurance) {
      setError('Please provide at least one search criteria');
      return;
    }

    setLoading(true);
    try {
      const results = await zocdocService.searchDoctors({
        specialty,
        location,
        insurance,
      });
      setDoctors(results);
      setSelectedDoctor(null);
      setAvailability([]);
    } catch (err) {
      setError('Failed to search doctors. Please try again later.');
      console.error('Error searching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDoctorSelect = async (doctor: Doctor) => {
    setLoading(true);
    try {
      const startDate = new Date().toISOString().split('T')[0];
      const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const availabilityData = await zocdocService.getDoctorAvailability(doctor.id, startDate, endDate);
      setSelectedDoctor(doctor);
      setAvailability(availabilityData[0]?.slots || []);
    } catch (err) {
      setError('Failed to load doctor availability. Please try again later.');
      console.error('Error loading availability:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBookAppointment = async (slot: TimeSlot) => {
    if (!selectedDoctor) return;

    setLoading(true);
    try {
      await zocdocService.bookAppointment(selectedDoctor.id, slot, {
        // Add patient info here
      });
      alert('Appointment booked successfully!');
      // Reset or redirect
    } catch (err) {
      setError('Failed to book appointment. Please try again later.');
      console.error('Error booking appointment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-dark p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-accent-teal-100 mr-2" />
        <h2 className="text-2xl font-semibold text-white">Find a Doctor</h2>
      </div>

      {error && (
        <div className="bg-red-500/20 text-red-100 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-accent-blue-100 mb-2">Specialty</label>
          <select
            className="w-full bg-dark-300 text-white rounded-lg p-3 border border-accent-blue-400/30 focus:border-accent-teal-400 transition-colors"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Select specialty...</option>
            {specialties.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-accent-blue-100 mb-2">Location</label>
          <input
            type="text"
            className="w-full bg-dark-300 text-white rounded-lg p-3 border border-accent-blue-400/30 focus:border-accent-teal-400 transition-colors"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter ZIP code or city"
          />
        </div>

        <div>
          <label className="block text-accent-blue-100 mb-2">Insurance</label>
          <select
            className="w-full bg-dark-300 text-white rounded-lg p-3 border border-accent-blue-400/30 focus:border-accent-teal-400 transition-colors"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          >
            <option value="">Select insurance...</option>
            {insuranceProviders.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-gradient-teal text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 mb-8"
      >
        Search Doctors
      </button>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {/* Doctor List */}
          {!selectedDoctor && doctors.length > 0 && (
            <div className="grid gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="p-4 glass-dark rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => handleDoctorSelect(doctor)}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{doctor.name}</h3>
                      <p className="text-accent-blue-100 mb-2">{doctor.specialty}</p>
                      <div className="flex items-center gap-2 text-accent-teal-100 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{doctor.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white">{doctor.rating}</span>
                        <span className="text-accent-blue-100">({doctor.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-accent-teal-100">
                        <Clock className="w-4 h-4" />
                        <span>Next available: {doctor.nextAvailability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Availability */}
          {selectedDoctor && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Available Appointments</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {availability.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleBookAppointment(slot)}
                    disabled={!slot.available}
                    className={`p-4 rounded-lg text-center transition-all duration-300 ${
                      slot.available
                        ? 'bg-accent-teal-400/20 text-white hover:bg-accent-teal-400/40 hover:shadow-lg'
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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ZocdocScheduler; 