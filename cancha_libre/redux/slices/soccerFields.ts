import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SoccerFieldsState {
  fields: any[];
  loading: boolean;
  error: any;
}

const initialState: SoccerFieldsState = {
  fields: [],
  loading: false,
  error: null,
};

const soccerFieldsSlice = createSlice({
  name: 'soccerFields',
  initialState,
  reducers: {
    fetchSoccerFieldsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSoccerFieldsSuccess: (state, action: PayloadAction<any[]>) => {
      state.fields = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchSoccerFieldsFailure: (state, action: PayloadAction<any>) => {
      state.fields = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSoccerFieldsRequest,
  fetchSoccerFieldsSuccess,
  fetchSoccerFieldsFailure,
} = soccerFieldsSlice.actions;

export default soccerFieldsSlice.reducer;
