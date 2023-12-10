import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/';
// const BASE_URL = 'http://localhost:8080/';

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
    const response = await apiService.post('6e4c0a55-0f60-4c7b-bea2-80b11e933322', {  //  200 => '6e4c0a55-0f60-4c7b-bea2-80b11e933322', 403 => '79eed8d6-9adb-42cc-83f8-00f6309bc57e',  endpoinyt => 'canchas/auth/register' 
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
