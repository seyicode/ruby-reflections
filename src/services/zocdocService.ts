import axios from 'axios';

interface ZocdocConfig {
  apiKey: string;
  baseURL: string;
}

interface SearchParams {
  specialty?: string;
  location?: string;
  insurance?: string;
  date?: string;
}

interface Availability {
  date: string;
  slots: TimeSlot[];
}

interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

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

class ZocdocService {
  private config: ZocdocConfig;

  constructor(config: ZocdocConfig) {
    this.config = config;
  }

  private async makeRequest(endpoint: string, params?: any) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${this.config.baseURL}${endpoint}`,
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
        },
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Zocdoc API request failed:', error);
      throw error;
    }
  }

  // Search for doctors based on criteria
  async searchDoctors(params: SearchParams): Promise<Doctor[]> {
    try {
      const response = await this.makeRequest('/api/v1/doctors/search', params);
      return response.doctors;
    } catch (error) {
      console.error('Failed to search doctors:', error);
      throw error;
    }
  }

  // Get doctor's availability
  async getDoctorAvailability(doctorId: string, startDate: string, endDate: string): Promise<Availability[]> {
    try {
      const response = await this.makeRequest(`/api/v1/doctors/${doctorId}/availability`, {
        startDate,
        endDate,
      });
      return response.availability;
    } catch (error) {
      console.error('Failed to get doctor availability:', error);
      throw error;
    }
  }

  // Book an appointment
  async bookAppointment(doctorId: string, slot: TimeSlot, patientInfo: any): Promise<any> {
    try {
      const response = await axios({
        method: 'POST',
        url: `${this.config.baseURL}/api/v1/appointments`,
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
        },
        data: {
          doctorId,
          startTime: slot.startTime,
          endTime: slot.endTime,
          patient: patientInfo,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to book appointment:', error);
      throw error;
    }
  }

  // Get insurance providers
  async getInsuranceProviders(): Promise<string[]> {
    try {
      const response = await this.makeRequest('/api/v1/insurance-providers');
      return response.providers;
    } catch (error) {
      console.error('Failed to get insurance providers:', error);
      throw error;
    }
  }

  // Get specialties
  async getSpecialties(): Promise<string[]> {
    try {
      const response = await this.makeRequest('/api/v1/specialties');
      return response.specialties;
    } catch (error) {
      console.error('Failed to get specialties:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
export const zocdocService = new ZocdocService({
  apiKey: import.meta.env.VITE_ZOCDOC_API_KEY || '',
  baseURL: import.meta.env.VITE_ZOCDOC_API_URL || '',
});

export default ZocdocService; 