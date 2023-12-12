import React, { useState, useEffect} from 'react';
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
import { getSoccerFieldsIdUser } from '@/services/soccerFieldsIdUser';


const fetchDataUserAndSoccerFields = async () => {
  let userData = {
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXRvYWxsb2NvMjMiLCJpYXQiOjE3MDIzMzk0MzUsImV4cCI6MTcwMjM0MDg3NX0.vKFxOQZN9K7Cw4roVAOk2T8zeF5lGIkTFp64mHllUBI'
  };
 
    const response = await getSoccerFieldsIdUser(userData.token);

    // console.log(response);
    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    // const dataA = [
    //   response.id,
    //   response.name,
    //   response.lastName,
    //   response.email,
    //   response.phone,
    // ]
    return response;
    
  
}
// Datos para la tabla A (Historial de alquiler de canchas)
interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: number;
  shift: {
    id: number;
    date_time: number;
    reserved: boolean;
    soccer_field_id: number;
  }[];
}

let data: User[] = [];

fetchDataUserAndSoccerFields().then(response => {
  data = response;
});
// Datos para la tabla B (Datos de usuarios)
// const dataB = [
//   { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', password: '*********' },
//   { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', password: '*********' },
//   // ... Agrega más datos según sea necesario
// ];

export default function CombinedTable() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataUserAndSoccerFields();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Estado para gestionar la paginación
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Estado para gestionar la visibilidad del historial por fila
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  // Lógica para mostrar las filas en la página actual
  let paginatedRows: User[] = [];
if (Array.isArray(data)) {
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  paginatedRows = data.slice(startIndex, endIndex);
}
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
    <>
     <button onClick={fetchDataUserAndSoccerFields}></button>
    <div>
      {/* Tabla combinada */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
             
              <TableCell>Numero de contacto</TableCell>
              <TableCell >Email</TableCell>
              
             
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((data) => (
              <React.Fragment key={data.id}>
                <TableRow >
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleExpandClick(data.id)}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell> {data.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {data.name}{data.lastName}
                  </TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.email}</TableCell>

                 
                </TableRow>
                {/* Expandir la fila para mostrar historial */}
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={expandedRows.includes(data.id)} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div" fontFamily={`${amiko}`}>
                          Historial reservas
                        </Typography>
                        {/* Mostrar historial desde la tabla A */}
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Fecha y Hora</TableCell>
                              <TableCell>Cancha</TableCell>
                              <TableCell>Reservado</TableCell>

                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.shift.map((shift) => (
                              <TableRow key={shift.id}>
                                <TableCell>{shift.date_time}</TableCell>
                                <TableCell>{shift.soccer_field_id}</TableCell>
                                <TableCell>{shift.reserved}</TableCell>
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

      {/* Paginación para la tabla Historial Reservas*/}
      <Pagination
        // count={Math.ceil(data.shift.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
    </>
  );
  
}