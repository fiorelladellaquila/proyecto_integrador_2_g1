import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  date: string | null;
  time: string | null;
  court: any | null;
}

interface BookingState {
  selectedDate: any;
  selectedAppointment: Appointment | null;
  loading: boolean;
  error: any;
}

const initialState: BookingState = {
  selectedDate: null,
  selectedAppointment: null,
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
    toggleAppointment: (state, action: PayloadAction<{ time: string; court: any; soccerFieldsData: any }>) => {
      const { time, court, soccerFieldsData } = action.payload;

      if (
        state.selectedAppointment &&
        state.selectedAppointment.date === state.selectedDate &&
        state.selectedAppointment.time === time &&
        state.selectedAppointment.court.description === court.description
      ) {
        // Si el mismo turno ya está seleccionado, deseleccionarlo
        state.selectedAppointment = null;
      } else {
        // Si no está seleccionado, asignar el nuevo turno
        state.selectedAppointment = {
          date: state.selectedDate,
          time,
          court,
        };
      }
    },
    clearAppointments: (state) => {
      state.selectedDate = null;
      state.selectedAppointment = null;
    },
  }
});

export const { selectDate, toggleAppointment, clearAppointments } = bookingSlice.actions;

// Selectores
export const selectSelectedDate = (state: { booking: BookingState }) => state.booking.selectedDate;
export const selectSelectedAppointment = (state: { booking: BookingState }) =>
  state.booking.selectedAppointment;

export default bookingSlice.reducer;
