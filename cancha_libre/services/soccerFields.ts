// soccerFieldsService.ts
import axios from 'axios';
import {
  fetchSoccerFieldsRequest,
  fetchSoccerFieldsSuccess,
  fetchSoccerFieldsFailure,
} from '../redux/slices/soccerFields';
import { useDispatch } from 'react-redux';

const BASE_URL = 'https://run.mocky.io/v3/';
const apiService = axios.create({
  baseURL: BASE_URL,
});

export const getSoccerFields = async (): Promise<any> => {

  try {
    const response = await apiService.get('e812c254-001a-4b4e-84ae-385f8acad926');
    console.log('response.data', response)
    return response.data;
  } catch (error) {
  }
};
