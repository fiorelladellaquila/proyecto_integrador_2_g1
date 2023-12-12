import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../utils/constant/urlBaseServices';

interface RestorePassword {
  code: number;
  email: string; 
  password: string;
}

const apiService = axios.create({
  baseURL: BASE_URL,
});

export const restorePassword = async (
  code: string,
  email: string,
  password: string
): Promise<RestorePassword | undefined> => {
  try {
    const response = await apiService.put('canchas/auth/password', {
      code,
      email,
      password,
    });
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
  
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
