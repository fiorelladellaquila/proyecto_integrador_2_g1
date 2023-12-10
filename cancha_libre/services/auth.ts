import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/';
// const BASE_URL = 'http://localhost:8080/';

const apiService = axios.create({
  baseURL: BASE_URL,
});

interface LoginResponse {
    token: string;
    name: string;
    username: string;
    password: string;
  }

export const loginUser = async (username: string, password: string):  Promise<LoginResponse> => {
  try {
    const response = await apiService.post('3a273d40-8aa9-40dc-b69b-73c857c22298', {  //  200 => '3a273d40-8aa9-40dc-b69b-73c857c22298', 403 => '79eed8d6-9adb-42cc-83f8-00f6309bc57e',  endpoinyt => 'canchas/auth/login' 
      username,
      password,
    });
    console.log('response.data',)
    return response.data;
  } catch (error) {
    throw error;
  }
};
