import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { amiko } from "../fonts";
import { getSoccerFields } from "@/services/soccerFields";

// Rest of the code...

// Datos para la tabla B (Datos de usuarios)
interface SoccerField {
  id: number;
  description: string;
  price: number;
  size: string;
  admin_id: number;
  shifts: {
    id: number;
    date_time: number;
    soccer_field_id: number;
    user_id: number;
    reserved: boolean;
  }[];
}
let data: SoccerField[] = [];

export default function CombinedTable() {
  const [data, setData] = useState<SoccerField[]>([]);
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

  const fetchDataSoccerFields = async () => {
    try {
      const response = await getSoccerFields(userData.token);
      console.log("reponse", response);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataSoccerFields();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // MODIFICAR TOKEN

  // Lógica para mostrar las filas en la página actual
  let paginatedRows: SoccerField[] = [];
  if (Array.isArray(data)) {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    paginatedRows = data.slice(startIndex, endIndex);
  }

  // Manejar el cambio de página
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
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
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Tamaño</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((soccerField) => (
              <React.Fragment key={soccerField.id}>
                <TableRow>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleExpandClick(soccerField.id)}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{soccerField.id}</TableCell>
                  <TableCell>{soccerField.description}</TableCell>
                  <TableCell>{soccerField.price}</TableCell>
                  <TableCell>{soccerField.size}</TableCell>
                </TableRow>
                {/* Expandir la fila para mostrar historial */}
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={5}
                  >
                    <Collapse
                      in={expandedRows.includes(soccerField.id)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box sx={{ margin: 1 }}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          component="div"
                          fontFamily={`${amiko}`}
                        >
                          Historial reservas
                        </Typography>
                        {/* Mostrar historial desde la tabla A */}
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Fecha y Hora</TableCell>
                              <TableCell>Reserva</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {soccerField.shifts.map((shift) => (
                              <TableRow key={shift.id}>
                                <TableCell>{shift.date_time}</TableCell>
                                <TableCell>
                                  {shift.reserved ? "Efectuada" : "Sin reserva"}
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
          (data?.reduce(
            (acc, soccerField) => acc + soccerField.shifts.length,
            0
          ) || 0) / rowsPerPage
        )}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
