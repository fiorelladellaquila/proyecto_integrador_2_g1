import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/';

const apiService = axios.create({
  baseURL: BASE_URL,
});

interface LoginResponse {
    token: string;
    name: string;
    username: string
  }

export const login = async (email: string, password: string):  Promise<LoginResponse> => {
  try {
    const response = await apiService.post('3a273d40-8aa9-40dc-b69b-73c857c22298', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
