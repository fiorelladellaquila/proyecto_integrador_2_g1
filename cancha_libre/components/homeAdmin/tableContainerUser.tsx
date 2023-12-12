import React, { useState, useEffect } from 'react';
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
  Pagination,
  CircularProgress
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { amiko } from '../fonts';
import { getSoccerFieldsUsers } from '@/services/soccerFields';

// Definición de la función fetchDataUserAndSoccerFields
// const fetchDataUserAndSoccerFields = async () => {
//   let userData = {
//     token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKdWFuTWFuczEiLCJpYXQiOjE3MDIzNjQyNDUsImV4cCI6MTcwMjM2NTY4NX0.l-OtaG2Vx9KEEOiybpbtzhs9A1sUaoc6koGotNrIoOc', // Asegúrate de proporcionar un token válido
//   };

//   const response = await getSoccerFieldsUsers(userData.token);
//   return response;
// };

// Datos para la tabla A (Historial de alquiler de canchas)
interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: number;
  shifts: {
    id: number;
    date_time: number;
    soccer_field_id: number;
    user_id: number;
    reserved: boolean;
  }[];
}

// let data: User[] = [];

// Datos para la tabla B (Datos de usuarios)
// const dataB = [
//   { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', password: '***' },
//   { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', password: '***' },
//   // ... Agrega más datos según sea necesario
// ];

function mapIdToGrassType(id: number): string {
  switch (id) {
    case 1:
      return 'Césped sintético cubierto f11';
    case 2:
      return 'Suelo de cemento, cancha f8';
    case 3:
      return 'Césped natural, cancha f5';
    case 4:
      return 'Césped sintético, cancha f11';
    case 5:
      return 'Césped sintético, 30x50 metros';
    case 6:
      return 'Césped natural, 25x40 metros';
    case 7:
      return 'Cancha cubierta, sintético, 20x30 metros';
    case 8:
      return 'Césped sintético, 35x60 metros';
    case 9:
      return 'Césped natural, 40x70 metros';
    case 10:
      return 'Cancha f5 césped sintético';
    default:
      return 'Tipo de césped desconocido';
  }
}

export default function CombinedTable() {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [userData, setUserData] = React.useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } else {
      return {};
    }
  });
  const [loading, setLoading] = useState<boolean>(true);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleStorageChange = () => {
        setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getSoccerFieldsUsers(userData.token);
        console.log('response', response)
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
   {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh" // Ajusta según sea necesario
        >
          <CircularProgress />
        </Box>
      )}

      {!loading && (
        <>
     <div style={{
      width:"100%",
      padding:"5rem",
    }}>
        {/* Tabla combinada */}
        <TableContainer component={Paper} style={{backgroundColor:"#4B4B4B"}}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell style={{color:"#fff"}}/>
                <TableCell style={{color:"#fff"}}>ID</TableCell>
                <TableCell style={{color:"#fff"}}>Nombre</TableCell>
                <TableCell style={{color:"#fff"}}>Numero de contacto</TableCell>
                <TableCell style={{color:"#fff"}}>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((data) => (
                <React.Fragment key={data.id}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleExpandClick(data.id)}
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell style={{color:"#fff"}}> {data.id}</TableCell>
                    <TableCell component="th" scope="row" style={{color:"#fff"}}>
                      {data.name} {data.lastName}
                    </TableCell>
                    <TableCell style={{color:"#fff"}}>{data.phone}</TableCell>
                    <TableCell style={{color:"#fff"}}>{data.email}</TableCell>
                  </TableRow>
                  {/* Expandir la fila para mostrar historial */}
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                      <Collapse in={expandedRows.includes(data.id)} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            style={{color:"#fff"}}
                          >
                            Historial reservas
                          </Typography>
                          {/* Mostrar historial desde la tabla A */}
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell style={{color:"#fff"}}>Fecha y Hora</TableCell>
                                <TableCell style={{color:"#fff"}}>Cancha</TableCell>
                                <TableCell style={{color:"#fff"}}>Reserva</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {data.shifts.map((shift) => (
                                <TableRow key={shift.id}>
                                  <TableCell style={{color:"#fff"}}>{shift.date_time}</TableCell>
                                  <TableCell style={{color:"#fff"}}>{mapIdToGrassType(shift.soccer_field_id)}</TableCell>
                                  <TableCell style={{color:"#fff"}}>
                                    {shift.reserved ? 'Efectuada' : 'Sin reserva'}
                                  </TableCell>
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
          count={Math.ceil(
            (data?.reduce((acc, user) => acc + user.shifts.length, 0) || 0) / rowsPerPage
          )}
          page={page}
          onChange={handlePageChange}
        />
      </div>
      </>
      )}
   </>
      
    
  );
}