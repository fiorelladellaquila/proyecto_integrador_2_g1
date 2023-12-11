import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { getShiftsByField } from '../../services/shifts';
import { log } from 'console';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 230 },
  { field: 'field', headerName: 'Cancha', width: 230 },
  { field: 'datetime', headerName: 'Fecha y Hora', width: 230 },

  { field: 'user', headerName: 'Usuario', width: 230 },
  { field: 'delete', headerName: 'Cancelar Reserva', width: 230, renderCell: (params) => (
    <Button variant="contained" color="warning">
      Cancelar
    </Button>
  ) }
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
    <div style={{ height: 400, width: '100%' }}>
<DataGrid
  rows={rows}
  columns={columns}
  
  style={{ background: 'white' ,fontFamily:'amiko' }}
/>
    </div>
  );
}
