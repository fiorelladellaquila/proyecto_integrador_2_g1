import { BASE_URL } from '../utils/constant/urlBaseServices';

interface RestorePassword {
 code: number,
 email: string, 
 password: string,
}

export const restorePassword = async (code: string, email: string, password: string): Promise<RestorePassword> => {
  try {
    const response = await fetch(`${BASE_URL}canchas/auth/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        email,
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
