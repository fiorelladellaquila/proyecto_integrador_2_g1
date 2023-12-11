import * as React from "react";
import { FC } from "react";
import LayoutGeneral from "../../layouts/layout-general";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "@/styles/material-theme";
import Image from "next/image";
import GeneralFooter from "@/components/layouts/footer/general-footer.component";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRouter } from "next/router";

export enum TEXT_INFORMATION_COMIC {
  NOMBRE = "Cancha: ",
  IMPORTE = "Importe pagado: ",
}

export enum TITLE_STEPPER {
  DATOS_PERSONALES = "Datos Personales,",
  DIRECCION_DE_ENTREGA = "Dirección de Entrega",
  DATOS_DEL_PAGO = "Datos del Pago",
}

export enum TEXT_BUTTON {
  ATRAS = "Atras",
  SIGUIENTE = "Siguiente",
  RESERVAR = "Reservar",
  VOLVER_A_INICIO = "Volver a inicio",
}

export enum TEXT_PURCHASE {
  PURCHASE_CONFIRMATION = "Tu reserva se ha realizado con exito!",
}

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const ConfirmShiftComponent: FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/home");
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutGeneral title={"ConfirmShift"}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            background: "#4B4B4B",
          }}
        >
          <Paper
            elevation={5}
            sx={{
              width: "50%",
              padding: "30px",
              textAlign: "center",
              borderRadius: "15px",
              background: "#B4FA8A",
              margin: "2rem",
            }}
          >
            <Box
              sx={{
                paddingBottom: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 40, color: "green" }} />
              <Typography
                variant="h5"
                color="green"
                sx={{ ...styles, fontWeight: "bold" }}
              >
                {TEXT_PURCHASE.PURCHASE_CONFIRMATION}
              </Typography>
            </Box>

            <Divider variant="middle" />

            <Grid
              container
              justifyContent="center"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <Grid item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  alt={"Imagen Cancha"}
                  height="250"
                  src="/cancha_5.jpg"
                  title={"Cancha F5"}
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ ...styles, gap: "20px" }}>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{ fontWeight: "bold" }}
                >
                  {TEXT_INFORMATION_COMIC.NOMBRE}
                </Typography>
                <Typography variant="h6" color="black">
                  {/* Colocar nombre de cancha */}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {TITLE_STEPPER.DIRECCION_DE_ENTREGA}
                </Typography>
                <Typography variant="h5">
                  {/* Colocar direccion de cancha */}
                </Typography>
              </Grid>
              <Box sx={{ ...styles, gap: "10px", width: "100%" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#2E2F33" }}
                  sx={{ marginTop: "30px" }}
                  onClick={handleGoHome}
                >
                  {TEXT_BUTTON.VOLVER_A_INICIO}
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Box>
      </LayoutGeneral>
      <GeneralFooter />
    </ThemeProvider>
  );
};

export default ConfirmShiftComponent;
