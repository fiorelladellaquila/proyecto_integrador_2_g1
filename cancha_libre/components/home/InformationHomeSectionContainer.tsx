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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EA4335",
              margin: "1rem",
              "&:hover": {
                backgroundColor: "rgba(234, 67, 53, 0.8)",
              },
              textTransform: "capitalize",
            }}
          >
            Quiero reservar un turno
          </Button>
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
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#000000",
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <ellipse
                  cx="24"
                  cy="24"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  rx="19.5"
                  ry="12.978"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.704 15.53a20.834 20.834 0 0 0 6.386 1.866a22.82 22.82 0 0 0 4.546-.773"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M38.882 15.614a8.616 8.616 0 0 1-5.165 1.485c-3.335 0-6.225-2.199-9.215-2.199c-2.668 0-7.189 4.373-7.189 5.164s1.31 1.26 2.372.74c.621-.303 3.31-2.914 5.484-2.914s9.219 7.136 9.857 7.806c.989 1.038-.926 3.274-2.149 2.05s-3.41-3.162-3.41-3.162"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M43.4 22.683a23.998 23.998 0 0 0-8.547 2.692m-2.273 2.081c.989 1.037-.926 3.273-2.149 2.05s-2.581-2.513-2.581-2.513"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M30.135 29.215c.988 1.037-.927 3.273-2.15 2.05s-2.025-1.962-2.025-1.962"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24.201 31.316a2.309 2.309 0 0 0 3.649-.186"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24.201 31.316c.531-.697.49-3.182-2.243-2.688c.642-1.219.066-3.146-2.388-2.01a1.69 1.69 0 0 0-3.146-.658a1.454 1.454 0 0 0-2.8-.28c-.544 1.103.296 3.096 2.092 1.976c-.182 1.944.84 2.537 2.684 1.78c.099 1.91 1.367 1.745 2.273 1.3a1.938 1.938 0 0 0 3.529.58Z"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.67 22.279a18.308 18.308 0 0 1 9.064 3.214"
                />
              </svg>
              Hacé click acá
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <ellipse
                  cx="24"
                  cy="24"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  rx="19.5"
                  ry="12.978"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.704 15.53a20.834 20.834 0 0 0 6.386 1.866a22.82 22.82 0 0 0 4.546-.773"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M38.882 15.614a8.616 8.616 0 0 1-5.165 1.485c-3.335 0-6.225-2.199-9.215-2.199c-2.668 0-7.189 4.373-7.189 5.164s1.31 1.26 2.372.74c.621-.303 3.31-2.914 5.484-2.914s9.219 7.136 9.857 7.806c.989 1.038-.926 3.274-2.149 2.05s-3.41-3.162-3.41-3.162"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M43.4 22.683a23.998 23.998 0 0 0-8.547 2.692m-2.273 2.081c.989 1.037-.926 3.273-2.149 2.05s-2.581-2.513-2.581-2.513"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M30.135 29.215c.988 1.037-.927 3.273-2.15 2.05s-2.025-1.962-2.025-1.962"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24.201 31.316a2.309 2.309 0 0 0 3.649-.186"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24.201 31.316c.531-.697.49-3.182-2.243-2.688c.642-1.219.066-3.146-2.388-2.01a1.69 1.69 0 0 0-3.146-.658a1.454 1.454 0 0 0-2.8-.28c-.544 1.103.296 3.096 2.092 1.976c-.182 1.944.84 2.537 2.684 1.78c.099 1.91 1.367 1.745 2.273 1.3a1.938 1.938 0 0 0 3.529.58Z"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.67 22.279a18.308 18.308 0 0 1 9.064 3.214"
                />
              </svg>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InformationHomeSectionContainer;
