// import { BASE_URL } from '../utils/constant/urlBaseServices';

// interface RestorePassword {
//  code: number,
//  email: string, 
//  password: string,
// }

// export const restorePassword = async (code: string, email: string, password: string): Promise<RestorePassword> => {
//   console.log(code, email, password);
//   try {
//     const response = await fetch(`${BASE_URL}canchas/auth/password`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         code,
//         email,
//         password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     // const responseData = await response.json();
//     console.log('responseData', response);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

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
      // Handle Axios-specific errors
      console.error('Axios error:', error.message);
    } else {
      // Handle other types of errors
      console.error('Unexpected error:', error);
    }
    throw error; // Rethrow the error or handle it appropriately
  }
};
