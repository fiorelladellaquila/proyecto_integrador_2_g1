import { BASE_URL } from '../utils/constant/urlBaseServices';

interface LoginResponse {
  token: string;
  name: string;
  username: string;
  password: string;
  id: string;
}

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${BASE_URL}canchas/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    console.log('responseData', responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
};
