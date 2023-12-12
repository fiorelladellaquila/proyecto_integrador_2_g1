import { BASE_URL } from '../utils/constant/urlBaseServices';

interface PostShift {
  date_time: string;
  reserved: number;
  soccer_field_id: number;
  user_id: number;
}

export const postShift = async (authToken: string, body: PostShift): Promise<PostShift> => {
  try {
    const response = await fetch(`${BASE_URL}canchas/shift`, {
      method: 'POST',
      headers: {
        'Authorization': authToken ? `Bearer ${authToken}` : '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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

interface getShiftByIdUser {
  authToken: string;
  id: number;
}

export const getShiftByIdUser = async (authToken: string, id: number): Promise<getShiftByIdUser> => {
  try {
    const response = await fetch(`${BASE_URL}canchas/shift/shift/userId/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': authToken ? `Bearer ${authToken}` : '',
        'Content-Type': 'application/json',
      },
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
