import React, { FC, useContext } from "react";
import { Typography, Button } from "@mui/material";
import { SteppersContext } from "./context/SteppersContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}

const CheckShiftStepperContainer: FC<Props> = ({ handleBack, handleNext }) => {
  const { handlerCustomer } = useContext(SteppersContext) ?? {};
  const selectedAppointments = useSelector((state: RootState) => state.booking.selectedAppointments);

  if (!handlerCustomer) {
    throw new Error("Componente debe estar dentro de CheckoutProvider");
  }

  const handleBackButton = () => {
    handleBack();
  };

  const handleNextButton = () => {
    // Aquí puedes realizar alguna acción adicional antes de pasar al siguiente paso
    handleNext();
  };

  return (
    <>
      <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
        Resumen de la Reserva
      </Typography>

      <Typography variant="body1">Cancha Seleccionada: {selectedAppointments[0]?.court}</Typography>
      <Typography variant="body1">Fecha: {selectedAppointments[0]?.date}</Typography>
      <Typography variant="body1">Hora: {selectedAppointments[0]?.time}</Typography>

      <Button variant="contained" onClick={handleBackButton}>
        Atrás
      </Button>
      <Button variant="contained" onClick={handleNextButton}>
        Siguiente
      </Button>
    </>
  );
};

export default CheckShiftStepperContainer;
