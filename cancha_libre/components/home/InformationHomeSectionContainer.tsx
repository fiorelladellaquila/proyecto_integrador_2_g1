import * as React from "react";
import { FC } from "react";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { getShiftByIdUser } from "@/services/shifts";

const InformationHomeSectionContainer: FC<any> = ({loading, setLoading}: any) => {
  const [userData, setUserData] = React.useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } else {
      return {};
    }
  });

  const router = useRouter();

  React.useEffect(() => {
    const handleStorageChange = () => {
      setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const [shifts, setShifts] = React.useState<any>();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getShiftByIdUser(userData.token, userData.id);
        setShifts(result);
      } catch (error) {
        console.error("Error fetching shifts:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [userData.authToken, userData.id]);

  return (
    <>
       {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <>
      <Box
        style={{
          flex: "20%",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          margin: "1rem 0 1rem 1rem",
          borderRadius: "15px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ padding: "2rem 0 1rem 0", color: "white" }}
          >
            Tus próximas reservas son:
          </Typography>
          <Typography sx={{ color: "white" }}>
            Recordá que las reservas se efectivizan con seña del 50%. Tenés
            tiempo de abonar el total hasta 48 hs antes de la fecha.
          </Typography>
          <TableContainer
            component={Paper}
            style={{
              maxHeight: 300,
              overflowY: "auto",
              margin: "2rem",
              borderRadius: "10px",
              backgroundColor: "#2E2F33",
              color: "#FFFFFF",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#FFFFFF", fontWeight:'bold' }}>Fecha</TableCell>
                  <TableCell style={{ color: "#FFFFFF", fontWeight:'bold' }}>Hora</TableCell>
                  <TableCell style={{ color: "#FFFFFF", fontWeight:'bold' }}>Cancha</TableCell>
                  <TableCell style={{ color: "#FFFFFF",fontWeight:'bold' }}>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shifts?.shifts.map((shift: any) => (
                  <TableRow key={shift.id}>
                    <TableCell style={{ color: "#FFFFFF" }}>
                      {new Date(shift.date_time).toLocaleDateString("es-ES")}
                    </TableCell>
                    <TableCell style={{ color: "#FFFFFF" }}>
                      {new Date(shift.date_time).toLocaleTimeString("es-ES")}
                    </TableCell>
                    <TableCell style={{ color: "#FFFFFF" }}>
                      {shift.soccer_field_id === 1
                        ? "F11"
                        : shift.soccer_field_id === 2
                          ? "F8"
                          : shift.soccer_field_id === 3
                            ? "F5"
                            : shift.soccer_field_id === 4
                              ? "F11"
                              : shift.soccer_field_id === 5
                                ? "F8"
                                : shift.soccer_field_id === 6
                                  ? "F5"
                                  : shift.soccer_field_id === 7
                                    ? "F5"
                                    : shift.soccer_field_id === 8
                                      ? "F8"
                                      : shift.soccer_field_id === 9
                                        ? "F11"
                                        : shift.soccer_field_id === 10
                                          ? "F5"
                                          : ""}
                    </TableCell>
                    <TableCell style={{ color: "#FFFFFF" }}>
                      {shift.reserved ? "Reservado" : "Cancelado"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <Box
            sx={{
              width: "90%",
              padding: "1rem 0",
              borderRadius: "20px",
              backgroundColor: "#B4FA8A",
            }}
          >
            <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
              Aboná por transferencia y obtené 5% de descuento
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
      )}
      </>
  );
};

export default InformationHomeSectionContainer;
