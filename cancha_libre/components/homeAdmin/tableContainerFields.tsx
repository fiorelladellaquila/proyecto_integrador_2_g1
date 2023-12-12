import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
// import { getSoccerFields } from '@/services/soccerFields';
// import { getSoccerFieldsIdUser } from '@/services/soccerFieldsIdUser';


// const fetchDataSoccerFields = async () => {
//   let userData = {
//     token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXRvYWxsb2NvMjMiLCJpYXQiOjE3MDIzMzM1MDMsImV4cCI6MTcwMjMzNDk0M30.z5kzMSaYjtMxr6K8OdoVkOj_PRdA3YSuqlP9jxS_aOo'
//   };
 
//     const response = await getSoccerFieldsIdUser(userData.token);

//     console.log(response);
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    
  
// }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', },
  { field: 'field', headerName: 'Cancha', },
  { field: 'datetime', headerName: 'Fecha y Hora', },

  { field: 'user', headerName: 'Usuario', },
  { 
    field: 'delete', 
    headerName: 'Cancelar Reserva', 
     
    align: 'right', // Alinea el contenido de la celda a la izquierda
    headerAlign: 'right', // Alinea el encabezado de la columna a la izquierda
    renderCell: (params) => (
      <Button variant="contained" color="warning" onClick={() => console.log("hola"+ params.id)}>
        Cancelar
      </Button>
    )
  }
];

const rows = [
  { id: 1, user: 'John Doe', datetime: '2023-01-01 14:00', field: 'F5', depositMade: true },
  { id: 2, user: 'Jane Doe', datetime: '2023-01-02 15:30', field: 'F7', depositMade: false },
  { id: 3, user: 'Maria Perez', datetime: '2023-01-03 16:45', field: 'F11', depositMade: true },
  { id: 4, user: 'Carlos Sanchez', datetime: '2023-01-04 18:00', field: 'F11', depositMade: false },
  { id: 5, user: 'Ana Lopez', datetime: '2023-01-05 19:15', field: 'F5', depositMade: true },
  { id: 6, user: 'Pedro Rodriguez', datetime: '2023-01-06 20:30', field: 'F7', depositMade: false },
  { id: 7, user: 'Laura Martinez', datetime: '2023-01-07 21:45', field: 'F11', depositMade: true },
  { id: 8, user: 'Sofia Gomez', datetime: '2023-01-08 22:00', field: 'F5', depositMade: false },
  { id: 9, user: 'Diego Torres', datetime: '2023-01-09 23:15', field: 'F7', depositMade: true },
  { id: 10, user: 'Valentina Ramirez', datetime: '2023-01-10 00:30', field: 'F11', depositMade: false },
  { id: 11, user: 'Mateo Herrera', datetime: '2023-01-11 01:45', field: 'F5', depositMade: true },
  { id: 12, user: 'Isabella Castro', datetime: '2023-01-12 02:00', field: 'F7', depositMade: false },
  { id: 13, user: 'Emilio Navarro', datetime: '2023-01-13 03:15', field: 'F11', depositMade: true },
  { id: 14, user: 'Mariana Diaz', datetime: '2023-01-14 04:30', field: 'F7', depositMade: false },
  { id: 15, user: 'Lucas Vargas', datetime: '2023-01-15 05:45', field: 'F5', depositMade: true },
]

export default function ReservationsTable() {
  return (
<>
    {/* <div>
      <button onClick={fetchDataSoccerFields}></button>
    </div> */}

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        style={{ background: 'white' ,fontFamily:'amiko' }}
      />
    </div>
  </>
  );
}
