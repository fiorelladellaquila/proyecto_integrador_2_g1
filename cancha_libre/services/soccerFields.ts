import { BASE_URL } from '../utils/constant/urlBaseServices';

export const getSoccerFields = async (authToken:any): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}canchas/soccer-fields`, {
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

export const getSoccerFieldsUsers = async (authToken: any): Promise<any> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authToken ? `Bearer ${authToken}` : '');

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(`${BASE_URL}canchas/shift/shift/users`, requestOptions);

    if (!response.ok) {
      throw new Error(`La solicitud falló con estado ${response.status}`);
    }

    const responseData = await response.json();
    
    // Ahora puedes usar responseData del primer fragmento de código
    // Por ejemplo:
    // console.log('responseData del primer fragmento', responseData);

    // Haz algo con responseData si es necesario

    return responseData;
  } catch (error) {
    console.log('error', error);
  }
};

export const getShifts = async (authToken: any): Promise<any> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authToken ? `Bearer ${authToken}` : '');

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(`${BASE_URL}canchas/soccer-fields`, requestOptions);

    if (!response.ok) {
      throw new Error(`La solicitud falló con estado ${response.status}`);
    }

    const responseData = await response.json();
    
    // Ahora puedes usar responseData del primer fragmento de código
    // Por ejemplo:
    // console.log('responseData del primer fragmento', responseData);

    // Haz algo con responseData si es necesario

    return responseData;
  } catch (error) {
    console.log('error', error);
  }
};