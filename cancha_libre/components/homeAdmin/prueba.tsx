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
  Pagination
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { amiko } from '../fonts';
import { getSoccerFieldsUsers } from '@/services/soccerFields';  // Ajusta la importación según el contexto 2


interface SoccerField {
    id: number;
    description: string;
    price: number;
    size: string;
    admin_id: number;
    shifts:{
        id: number;
        date_time: number;
        soccer_field_id: number;
        user_id: number;
        reserved: boolean;
      }
  }
export default function CombinedTable() {
  const [data, setData] = useState<SoccerField[]>([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 15;
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSoccerFieldsUsers('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKdWFuTWFuczEiLCJpYXQiOjE3MDI0MDU0OTcsImV4cCI6MTcwMjQwNjkzN30.boDEbXRq-CVbetv6ksFj9CqSDOWN_8BliKM3h3PG56Q');  // Ajusta según el token del contexto 2
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cancha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((user) => (
              <React.Fragment key={user.id}>
                <TableRow>
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
                    {user.description}
                  </TableCell>
                  <TableCell>{user.size}</TableCell>
                  
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={expandedRows.includes(user.id)} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          component="div"
                          fontFamily={`${amiko}`}
                        >
                          Historial reservas
                        </Typography>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Fecha y Hora</TableCell>
                              <TableCell>Cancha</TableCell>
                              <TableCell>Reserva</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {user.shifts.map((shift) => (
                              <TableRow key={shift.id}>
                                <TableCell>{shift.date_time}</TableCell>
                                <TableCell>{mapIdToGrassType(shift.soccer_field_id)}</TableCell>
                                <TableCell>
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

      <Pagination
        count={Math.ceil(data.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
