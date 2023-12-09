// bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  date: string | null;
  time: string | null;
  court: any | null;
}

interface BookingState {
  selectedDate: string | null;
  selectedAppointments: Appointment[];
  appointmentUnavaliable: any;
  loading: boolean;
  error: any;
}

const initialState: BookingState = {
  selectedDate: null,
  selectedAppointments: [],
  appointmentUnavaliable: [],
  loading: false,
  error: null
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    toggleAppointment: (state, action: PayloadAction<{ time: string; court: any }>) => {
      const { time, court } = action.payload;

      const existingAppointmentIndex = state.selectedAppointments.findIndex(
        (appointment) =>
          appointment.date === state.selectedDate &&
          appointment.time === time &&
          appointment.court.description === court.description
      );

      if (existingAppointmentIndex !== -1) {
        console.log(existingAppointmentIndex)
        state.selectedAppointments = state.selectedAppointments.filter(
          (appointment, index) => index !== existingAppointmentIndex
        );
      } else {
        state.selectedAppointments.push({
          date: state.selectedDate,
          time,
          court,
        });
      }
      console.log('After Toggle - selectedAppointments:', state.selectedAppointments.map(appointment => JSON.stringify(appointment)))
      console.log('Afetr Toggle - selectedDate:', state.selectedDate);
    
    },
    clearAppointments: (state) => {
      state.selectedDate = null;
      state.selectedAppointments = [];
    },
    fetchAppointmentUnavailableRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAppointmentUnavailableSuccess: (state, action: PayloadAction<any[]>) => {
      state.appointmentUnavaliable = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAppointmentUnavailableFailure: (state, action: PayloadAction<any[]>) => {
      state.appointmentUnavaliable = [];
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const { selectDate, toggleAppointment, clearAppointments } = bookingSlice.actions;

// Selectores
export const selectSelectedDate = (state: { booking: BookingState }) => state.booking.selectedDate;
export const selectSelectedAppointments = (state: { booking: BookingState }) =>
  state.booking.selectedAppointments;

export default bookingSlice.reducer;
