import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  date: string | null;
  time: string | null;
  court: any | null;
}

interface BookingState {
  selectedDate: any;
  selectedAppointments: Appointment[];
  loading: boolean;
  error: any;
}

const initialState: BookingState = {
  selectedDate: null,
  selectedAppointments: [],
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
    toggleAppointment: (state, action: PayloadAction<{ time: string; court: any, soccerFieldsData: any }>) => {
      const { time, court, soccerFieldsData } = action.payload;

      const existingAppointmentIndex = state.selectedAppointments.findIndex(
        (appointment) =>
          appointment.date === state.selectedDate &&
          appointment.time === time &&
          appointment.court.description === court.description
      );

      if (existingAppointmentIndex !== -1) {
        // Si ya existe y no está reservado, quitar el elemento del array
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
    },
    clearAppointments: (state) => {
      state.selectedDate = null;
      state.selectedAppointments = [];
    },
  }
});

export const { selectDate, toggleAppointment, clearAppointments } = bookingSlice.actions;

// Selectores
export const selectSelectedDate = (state: { booking: BookingState }) => state.booking.selectedDate;
export const selectSelectedAppointments = (state: { booking: BookingState }) =>
  state.booking.selectedAppointments;

export default bookingSlice.reducer;
