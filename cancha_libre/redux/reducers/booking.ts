// bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  date: string | null;
  time: string | null;
  court: string | null;
}

interface BookingState {
  selectedDate: string | null;
  selectedAppointments: Appointment[];
}

const initialState: BookingState = {
  selectedDate: null,
  selectedAppointments: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    toggleAppointment: (state, action: PayloadAction<{ time: string; court: string }>) => {
      const { time, court } = action.payload;
      const existingAppointmentIndex = state.selectedAppointments.findIndex(
        (appointment) =>
          appointment.date === state.selectedDate &&
          appointment.time === time &&
          appointment.court === court
      );

      if (existingAppointmentIndex !== -1) {
        state.selectedAppointments.splice(existingAppointmentIndex, 1);
      } else {
        state.selectedAppointments.push({
          date: state.selectedDate,
          time,
          court,
        });
      }
    },
    clearAppointments: (state) => {
      state.selectedDate = null;
      state.selectedAppointments = [];
    },
  },
});

export const { selectDate, toggleAppointment, clearAppointments } = bookingSlice.actions;

// Selectores
export const selectSelectedDate = (state: { booking: BookingState }) => state.booking.selectedDate;
export const selectSelectedAppointments = (state: { booking: BookingState }) =>
  state.booking.selectedAppointments;

export default bookingSlice.reducer;
