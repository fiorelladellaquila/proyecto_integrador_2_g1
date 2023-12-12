import * as React from "react";
import { FC } from "react";
import { Box, Button, Link, Typography } from "@mui/material";

const InformationHomeSectionContainer: FC = () => {
  const endpointShifts = [
    {
      fechahora: "2023-11-19 12:34:56",
      reservado: true,
      canchaId: "F5",
    },
    {
      fechahora: "2023-11-19 15:40:00",
      reservado: false,
      canchaId: "F9",
    },
  ];

  return (
    <>
      <Box
        style={{
          flex: "30%",
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
          <ul
            style={{
              listStyleType: "disc",
              textAlign: "left",
              marginTop: "3rem",
              paddingLeft: "2rem",
              color: "white",
              fontWeight: "600",
            }}
          >
            {endpointShifts.map((shift, index) => (
              <li key={index}>
                {`${shift.fechahora} - Cancha ${shift.canchaId} - ${
                  shift.reservado ? "ABONADO" : "SEÑADO"
                }`}
              </li>
            ))}
          </ul>
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
  );
};

export default InformationHomeSectionContainer;
