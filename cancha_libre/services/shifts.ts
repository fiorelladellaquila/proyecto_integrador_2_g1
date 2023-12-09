import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/';
const apiService = axios.create({
  baseURL: BASE_URL,
});

export const getShiftsByField = async ({ fieldId }: any): Promise<any> => {

  try {
    if (fieldId === 1) {
        const response = await apiService.get('580ef03a-ecbb-4345-a8a0-4beb9bbfed5c');
        console.log('response.data', response.data)
        return response.data;
    }
    if (fieldId === 2) {
        const response = await apiService.get('f2613bdb-7780-4304-a914-1c3b604ecd27');
        console.log('response.data', response.data)
        return response.data;
    }
    if (fieldId === 3) {
        const response = await apiService.get('2b52b3af-793f-4598-8d01-c3b9c8fea82c');
        console.log('response.data', response.data)
        return response.data;
    }
    if (fieldId === 4) {
        const response = await apiService.get('efc18dba-7a3f-4195-aa6b-599cba3fc563');
        console.log('response.data', response.data)
        return response.data;
    }
    if (fieldId === 5) {
        const response = await apiService.get('cb63fb0e-841e-499c-a249-dab0be1fe5ff');
        console.log('response.data', response.data)
        return response.data;
    }
    // if (fieldId === 6) {
    //     const response = await apiService.get('f2613bdb-7780-4304-a914-1c3b604ecd27');
    //     console.log('response.data', response.data)
    //     return response.data;
    // }
    // if (fieldId === 7) {
    //     const response = await apiService.get('f2613bdb-7780-4304-a914-1c3b604ecd27');
    //     console.log('response.data', response.data)
    //     return response.data;
    // }
    // if (fieldId === 8) {
    //     const response = await apiService.get('f2613bdb-7780-4304-a914-1c3b604ecd27');
    //     console.log('response.data', response.data)
    //     return response.data;
    // }
    // if (fieldId === 9) {
    //     const response = await apiService.get('f2613bdb-7780-4304-a914-1c3b604ecd27');
    //     console.log('response.data', response.data)
    //     return response.data;
    // }
    // if (fieldId === 10) {
    //     const response = await apiService.get('f2613bdb-7780-4304-a914-1c3b604ecd27');
    //     console.log('response.data', response.data)
    //     return response.data;
    // }

    
  } catch (error) {
  }
};
