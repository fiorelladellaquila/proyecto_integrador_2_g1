import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import bookingReducer from '../redux/slices/booking';
import soccerFieldsReducer from '../redux/slices/soccerFields';

const store = configureStore({
  reducer: {
    auth: authReducer,
    soccerFields: soccerFieldsReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;