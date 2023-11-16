import { Box, Button, Grid, Typography } from "@mui/material";
import { FC } from "react";

const OurTeamsSectionContainer: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0A711B",
          padding: "3rem 0 8rem 0",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          color="#FFFFFF"
          sx={{
            borderBottom: "3px solid #FFFFFF",
            margin: "0 auto 16px auto",
            display: "inline-block",
          }}
        >
          NUESTRAS CANCHAS
        </Typography>
        <Typography
          variant="h6"
          color="#FFFFFF"
          textAlign="center"
          marginBottom={"3rem"}
        >
          Valores a Noviembre 2023
        </Typography>

        <Grid
          container
          justifyContent="center"
          spacing={1}
          style={{ padding: "0 5rem" }}
        >
          {[
            { id: 1, teamNumber: "5", price: "15.000", img: "" },
            { id: 2, teamNumber: "7-8", price: "21.000", img: "" },
            { id: 3, teamNumber: "9", price: "27.000", img: "" },
            { id: 4, teamNumber: "11", price: "33.000", img: "" },
          ].map((card) => (
            <Grid
              item
              container
              key={card.id}
              justifyContent="center"
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ borderRadius: "2rem" }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ backgroundColor: "#222222" }}>
                  <Typography variant="h6" color="#FFFFFF" padding="1rem 0">
                    Fútbol {card.teamNumber}
                  </Typography>
                </Box>
                <Box sx={{ backgroundColor: "#333333", color: "#FFFFFF" }}>
                  <Typography padding="0.5rem 0 0.2rem 0">Hora</Typography>
                  <Typography
                    variant="h3"
                    padding="0.5rem 0 0.2rem 0"
                    display="flex"
                    justifyContent="center"
                  >
                    <span style={{ fontSize: "1rem", padding: "1rem" }}>$</span>
                    {card.price}
                  </Typography>
                  <Typography padding="0.5rem 0 1rem 0" fontWeight={"bold"}>
                    Antes de las 18 hs.
                  </Typography>
                </Box>
                <Box>
                  <Typography padding="1rem 0 0.2rem 0" fontSize="0.9rem">
                    Alquiler de cancha por una hora
                  </Typography>
                  <Typography padding="0.5rem 0 0.2rem 0" fontSize="0.9rem">
                    Acceso a sector de parrillas
                  </Typography>
                  <Typography
                    padding="0.5rem 0 1rem 0"
                    fontSize="0.9rem"
                    fontWeight={"bold"}
                  >
                    Adicional nocturno $5.000
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#00CC00", width: "100%" }}
                >
                  Reservá
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default OurTeamsSectionContainer;
