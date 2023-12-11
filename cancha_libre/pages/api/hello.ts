// Importa los tipos necesarios de 'next' y la biblioteca 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

// Define el tipo de los datos de respuesta
type ResponseData = {
  message: string
}

// Define la función de manejo de la API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Realiza una solicitud GET a la URL especificada
  const response = await axios.get('http://localhost:8080/api/hello');
  
  // Envía la respuesta a la solicitud original
  res.status(200).json({ message: response.data.message })
}