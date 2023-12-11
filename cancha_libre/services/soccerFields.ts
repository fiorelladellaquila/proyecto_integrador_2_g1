// import axios from 'axios';
// import { BASE_URL } from '../utils/constant/urlBaseServices';

// const apiService = axios.create({
//   baseURL: BASE_URL,
// });

// export const getSoccerFields = async (): Promise<any> => {

//   try {
//     const response = await apiService.get('canchas/soccer-fields');
//     console.log('response.data', response)
//     return response.data;
//   } catch (error) {
//   }
// };

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