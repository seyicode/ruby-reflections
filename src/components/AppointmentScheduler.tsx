import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Appointment {
  title: string;
  start: Date;
  end: Date;
  resource?: any;
}

const AppointmentScheduler: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<Appointment | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Generate available time slots for the next 30 days
  const generateAvailableSlots = (): Appointment[] => {
    const slots: Appointment[] = [];
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);

    for (let date = new Date(today); date <= endDate; date.setDate(date.getDate() + 1)) {
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;

      // Generate slots from 9 AM to 5 PM
      for (let hour = 9; hour < 17; hour++) {
        const start = new Date(date);
        start.setHours(hour, 0, 0, 0);
        const end = new Date(date);
        end.setHours(hour + 1, 0, 0, 0);

        slots.push({
          title: 'Available',
          start,
          end,
        });
      }
    }

    return slots;
  };

  const handleSelectSlot = (slotInfo: any) => {
    setSelectedSlot({
      title: 'New Appointment',
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const eventPropGetter = (event: Appointment) => {
    if (event.title === 'Available') {
      return {
        style: {
          backgroundColor: '#1DB954',
          border: '1px solid #1ED760',
          color: '#FFFFFF',
          borderRadius: '4px',
          padding: '2px',
          fontSize: '0.9em',
        },
      };
    }
    return {
      style: {
        backgroundColor: '#1AA34A',
        border: '1px solid #1DB954',
        color: '#FFFFFF',
        borderRadius: '4px',
        padding: '2px',
        fontSize: '0.9em',
      },
    };
  };

  return (
    <div className="card p-6">
      <div className="text-center mb-8">
        <h2 className="text-gradient-spotify text-3xl font-bold mb-4">Book an Appointment</h2>
        <p className="text-secondary-300">Select a time slot that works best for you</p>
      </div>
      
      <Calendar
        localizer={localizer}
        events={generateAvailableSlots()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventPropGetter}
        className="bg-background-light text-spotify-white"
      />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="card max-w-md w-full mx-4">
            <h3 className="text-gradient-spotify text-xl font-semibold mb-4">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  type="tel"
                  className="input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="label">Message</label>
                <textarea
                  className="input"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler; 