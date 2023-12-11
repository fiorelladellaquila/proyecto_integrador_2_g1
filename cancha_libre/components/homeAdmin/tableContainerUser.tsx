import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Collapse,
  IconButton,
  Typography,
  Checkbox,
  Pagination,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { amiko } from '../fonts';

// Datos para la tabla A (Historial de alquiler de canchas)
const dataA = [
  {
    date: '2022-01-01',
    field: 'F5A',
    time:'15:00'
  },
  {
    date: '2022-02-15',
    field: 'F7',
    time:'18:00'
  },
  // ... Agrega más datos según sea necesario
];

// Datos para la tabla B (Datos de usuarios)
const dataB = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', password: '*********' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', password: '*********' },
  // ... Agrega más datos según sea necesario
];

export default function CombinedTable() {
  // Estado para gestionar la paginación
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Estado para gestionar la visibilidad del historial por fila
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  // Lógica para mostrar las filas en la página actual
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = dataB.slice(startIndex, endIndex);

  // Manejar el cambio de página
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Manejar la expansión del historial para una fila específica
  const handleExpandClick = (rowId: number) => {
    setExpandedRows((prevExpandedRows) => {
      const isRowExpanded = prevExpandedRows.includes(rowId);
      if (isRowExpanded) {
        return prevExpandedRows.filter((id) => id !== rowId);
      } else {
        return [...prevExpandedRows, rowId];
      }
    });
  };

  return (
    <div>
      {/* Tabla combinada */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Numero de contacto</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >Contraseña</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((user) => (
              <React.Fragment key={user.id}>
                <TableRow >
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleExpandClick(user.id)}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell> {user.id}</TableCell>

                  <TableCell component="th" scope="row">
                    {user.firstName}
                  </TableCell>
                  <TableCell> {user.lastName}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  

                 
                </TableRow>
                {/* Expandir la fila para mostrar historial */}
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={expandedRows.includes(user.id)} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div" fontFamily={`${amiko}`}>
                          Historial reservas
                        </Typography>
                        {/* Mostrar historial desde la tabla A */}
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Date</TableCell>
                              <TableCell>Field</TableCell>
                              <TableCell>Time</TableCell>

                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dataA.map((rental) => (
                              <TableRow key={rental.date}>
                                <TableCell>{rental.date}</TableCell>
                                <TableCell>{rental.field}</TableCell>
                                <TableCell>{rental.time}</TableCell>

                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginación para la tabla B */}
      <Pagination
        count={Math.ceil(dataB.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
