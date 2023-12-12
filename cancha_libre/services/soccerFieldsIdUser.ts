import { BASE_URL } from '../utils/constant/urlBaseServices';

export const getSoccerFieldsIdUser = async (authToken:any): Promise<any> => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", authToken ? `Bearer ${authToken}` : '');

    let requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`${BASE_URL}canchas/shift/shift/userId/26`, requestOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    // console.log('responseData', responseData);
    return responseData;
  } catch (error) {
    console.log('error', error);
  }
};

// import React, { Component } from "react";
// import axios from "axios";

// export default class getSoccerFieldsIdUser extends Component {

// }

// async componentDidMount() {
//     const resp= await axios.get(`${BASE_URL}canchas/shift/shift/userId/26`);
//     this.setState({userId: resp.})
// }