// store.ts
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import bookingReducer from '../redux/reducers/booking';

const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
