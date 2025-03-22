import axios from 'axios';

interface ValantConfig {
  baseURL: string;
  clientId: string;
  clientSecret: string;
}

interface AppointmentSlot {
  startTime: string;
  endTime: string;
  providerId: string;
  available: boolean;
}

interface AppointmentRequest {
  patientId: string;
  providerId: string;
  startTime: string;
  endTime: string;
  appointmentType: string;
  notes?: string;
}

class ValantService {
  private config: ValantConfig;
  private token: string | null = null;
  private tokenExpiry: Date | null = null;

  constructor(config: ValantConfig) {
    this.config = config;
  }

  private async getAuthToken(): Promise<string> {
    if (this.token && this.tokenExpiry && this.tokenExpiry > new Date()) {
      return this.token;
    }

    try {
      const response = await axios.post(`${this.config.baseURL}/oauth/token`, {
        grant_type: 'client_credentials',
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
      });

      this.token = response.data.access_token;
      this.tokenExpiry = new Date(Date.now() + response.data.expires_in * 1000);
      return this.token;
    } catch (error) {
      console.error('Failed to get Valant auth token:', error);
      throw new Error('Authentication failed');
    }
  }

  private async makeAuthorizedRequest(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: any
  ) {
    const token = await this.getAuthToken();
    try {
      const response = await axios({
        method,
        url: `${this.config.baseURL}${endpoint}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data,
      });
      return response.data;
    } catch (error) {
      console.error(`Failed to make ${method} request to ${endpoint}:`, error);
      throw error;
    }
  }

  // Get available appointment slots for a provider
  async getAvailableSlots(
    providerId: string,
    startDate: Date,
    endDate: Date
  ): Promise<AppointmentSlot[]> {
    const endpoint = `/api/v1/scheduling/availability`;
    const params = {
      providerId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    };

    try {
      const response = await this.makeAuthorizedRequest('GET', endpoint + '?' + new URLSearchParams(params));
      return response.slots;
    } catch (error) {
      console.error('Failed to get available slots:', error);
      throw error;
    }
  }

  // Schedule an appointment
  async scheduleAppointment(appointment: AppointmentRequest): Promise<any> {
    const endpoint = '/api/v1/scheduling/appointments';
    try {
      const response = await this.makeAuthorizedRequest('POST', endpoint, appointment);
      return response;
    } catch (error) {
      console.error('Failed to schedule appointment:', error);
      throw error;
    }
  }

  // Get provider information
  async getProviders(): Promise<any[]> {
    const endpoint = '/api/v1/providers';
    try {
      const response = await this.makeAuthorizedRequest('GET', endpoint);
      return response.providers;
    } catch (error) {
      console.error('Failed to get providers:', error);
      throw error;
    }
  }

  // Get appointment types
  async getAppointmentTypes(): Promise<any[]> {
    const endpoint = '/api/v1/scheduling/appointment-types';
    try {
      const response = await this.makeAuthorizedRequest('GET', endpoint);
      return response.appointmentTypes;
    } catch (error) {
      console.error('Failed to get appointment types:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
export const valantService = new ValantService({
  baseURL: import.meta.env.VITE_VALANT_API_URL || '',
  clientId: import.meta.env.VITE_VALANT_CLIENT_ID || '',
  clientSecret: import.meta.env.VITE_VALANT_CLIENT_SECRET || '',
});

export default ValantService; 