import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  Button,
  Modal,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getSoccerFields } from '@/services/soccerFields';
// import { deleteShift } from '@/services/shifts';
//  DELETESHIFT ESTA IMPORTADO PERO NOSE SI ESTA EL ENDPOINT

interface SoccerField {
  id: number;
  description: string;
  price: number;
  size: string;
  admin_id: number;
  shifts: Shift[];
}

interface Shift {
  id: number;
  date_time: string;
  soccer_field_id: number;
  user_id: number;
  reserved: boolean;
}

const fetchDataSoccerFields = async () => {
  // Lógica para obtener datos de reservas aquí
  let userData = {
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKdWFuTWFuczEiLCJpYXQiOjE3MDI0MDE0NzksImV4cCI6MTcwMjQwMjkxOX0.3I0IwEnbSDn3VXvkHw5LW2l2wfAL3Jqz3Ze0Nd3lgRg',
  };
// MODIFICAR TOKEN
  const response = await getSoccerFields(userData.token);
  return response;
};





const ReservationsTable: React.FC = () => {
  const [rows, setRows] = React.useState<SoccerField[]>([]);
  const [selectedShifts, setSelectedShifts] = React.useState<Shift[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const fetchAndSetData = async () => {
      const data = await fetchDataSoccerFields();
      setRows(data);
    };

    fetchAndSetData();
  }, []);

  const handleViewShifts = (shifts: Shift[]) => {
    setSelectedShifts(shifts);
    setPage(0); // Resetear a la primera página cuando se abre el modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200},
    { field: 'description', headerName: 'Descripción' , width: 400},
    { field: 'price', headerName: 'Precio', width: 200 },
    { field: 'size', headerName: 'Tamaño' , width: 200},
    {
      field: 'shifts',
      headerName: 'Turnos',
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleViewShifts(params.row.shifts)}
        >
          Ver Turnos
        </Button>
      ),
       width: 200,
    },
  ];

  return (
    <div style={{ height: 650, width: '100%', background: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // className="custom-data-grid"
        // checkboxSelection
        getRowId={(row) => row.id}
        isRowSelectable={(params) => Boolean(params.row.shifts.length)}
      />

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Paper style={{ padding: '80px', backgroundColor: '#e0e0e0', borderRadius: '8px' , maxWidth: '800px', margin: 'auto' }}>
          <Typography variant="h6">Turnos</Typography>

          {/* Tabla combinada */}
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align='center'>Fecha y Hora</TableCell>
                  <TableCell align='center'>Reserva</TableCell>
                  <TableCell>Usuario Id</TableCell>
                  <TableCell align='center'>Accion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedShifts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((shift) => (
                  <TableRow key={shift.id}>
                    <TableCell align='center'>{shift.id}</TableCell>
                    <TableCell>{shift.date_time}</TableCell>
                    <TableCell align='center'>{shift.reserved ? 'Efectuada' : 'Sin reserva'}</TableCell>
                    <TableCell align='center'>{shift.user_id}</TableCell>
                    <TableCell align='center'>
                    <Button onClick={() => setIsModalOpen(true)}>Eliminar</Button>

                    {/* <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                      <Paper>hola</Paper>
                    </Modal> */}

                    {/* ACAAAA ME QUEDEEE ERIIIIII */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 9]}
            component="div"
            count={selectedShifts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </Paper>
      </Modal>
    </div>
  );
};

export default ReservationsTable;
