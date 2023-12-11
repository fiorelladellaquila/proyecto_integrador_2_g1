import { BASE_URL } from '../utils/constant/urlBaseServices';

interface RecoverPassword {
 email: string, 
}

export const recoverPassword = async (email: string): Promise<RecoverPassword> => {
  try {
    const response = await fetch(`${BASE_URL}canchas/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
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
