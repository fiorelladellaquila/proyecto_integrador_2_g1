import axios from 'axios';
import { BASE_URL } from '../utils/constant/urlBaseServices';

const apiService = axios.create({
  baseURL: BASE_URL,
});

interface LoginResponse {
    fullName: string,
    email: string,
    username: string,
    phone: string,
    password: string
  }

export const createUser = async (fullName: string, email: string, username: string, phone: string, password: string):  Promise<LoginResponse> => {
  const [name, lastName] = fullName.split(' ');
  
  try {
    const response = await apiService.post('canchas/auth/register', {
        name,
        lastName,
        email,
        username,
        phone,
        password
    });
    console.log('response.data',)
    return response.data;
  } catch (error) {
    throw error;
  }
};
