import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { URL_IMAGE_AWS } from "../../utils/constant/imagesAws";

const RecreationalEventsSectionContainer: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "3rem 0 3rem 0",
          textAlign: "center",
        }}
        id='events'
      >
        <Typography
          fontFamily={'Aleo'}
          fontWeight={'600'}
          variant="h4"
          color="#3A3A3A"
          sx={{
            borderBottom: "4px solid #3A3A3A",
            margin: "0 auto 16px auto",
            display: "inline-block",
          }}
        >
          EVENTOS RECREATIVOS
        </Typography>
        <Typography
          variant="h6"
          color="#787B81"
          textAlign="center"
          marginBottom={"3rem"}
        >
          Valores a Noviembre 2023
        </Typography>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "40rem",
                height: "45rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Image
                src={`${URL_IMAGE_AWS}/cumpleInfantil.png`}
                alt={"Imagen"}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Typography
                variant="h5"
                color="#3A3A3A"
                textAlign="center"
                fontWeight="bold"
                marginBottom="1rem"
              >
                FESTEJÁ TU CUMPLEAÑOS
              </Typography>
              <Typography color="#666666" padding="1rem">
                En el Complejo tenemos diferentes opciones para que pases un día
                inolvidable. Contamos con amplio sector de quinchos y parrillas
                aptos para cualquier evento, asistencia médica y seguridad las
                24 hs. en el predio.
              </Typography>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                style={{ padding: "0 1rem" }}
              >
                {[
                  {
                    id: 1,
                    promoNumber: "15",
                    price: "84.000",
                    members: "15",
                    food: {
                      panchos: "15",
                      drink: "10",
                      additionalPerHamburguer: "10.500",
                    },
                    time: "2",
                    additionalPerBoy: "5.500",
                    additionalPerTeam: "15.000",
                  },
                  {
                    id: 2,
                    promoNumber: "25",
                    price: "140.000",
                    members: 25,
                    food: {
                      panchos: "25",
                      drink: "15",
                      additionalPerHamburguer: "15.500",
                    },
                    time: "2",
                    additionalPerBoy: "5.500",
                    additionalPerTeam: "15.000",
                  },
                ].map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={6} lg={6}>
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ backgroundColor: "#222222" }}>
                        <Typography
                          variant="h6"
                          color="#FFFFFF"
                          padding="1rem 0"
                        >
                          Promo {card.promoNumber}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ backgroundColor: "#333333", color: "#FFFFFF" }}
                      >
                        <Typography
                          variant="h3"
                          padding="0.5rem 0 0.2rem 0"
                          display="flex"
                          justifyContent="center"
                        >
                          <span style={{ fontSize: "1rem", padding: "1rem" }}>
                            $
                          </span>
                          {card.price}
                        </Typography>
                        <Typography padding="0.5rem 0 1rem 0">
                          Para {card.members} chicos
                        </Typography>
                      </Box>
                      <Box>
                        <Typography padding="1rem 0 0.2rem 0" fontSize="0.9rem">
                          {card.food.panchos} panchos
                        </Typography>
                        <Typography
                          padding="0.5rem 0 0.2rem 0"
                          fontSize="0.9rem"
                        >
                          Snacks
                        </Typography>
                        <Typography
                          padding="0.5rem 0 0.2rem 0"
                          fontSize="0.9rem"
                        >
                          Sandwiches de miga
                        </Typography>
                        <Typography
                          padding="0.5rem 0 0.2rem 0"
                          fontSize="0.9rem"
                        >
                          {card.food.drink} bebidas grandes
                        </Typography>
                        <Typography
                          padding="0.5rem 0 0.2rem 0"
                          fontSize="0.9rem"
                        >
                          {card.time} horas de cancha F5
                        </Typography>
                        <Typography
                          padding="0.5rem 0 0.2rem 0"
                          fontSize="0.9rem"
                        >
                          Adicional por chico ${card.additionalPerBoy}
                        </Typography>
                        <Typography
                          padding="0.5rem 0 0.2rem 0"
                          fontSize="0.9rem"
                        >
                          Adicional cancha F9 ${card.additionalPerTeam}
                        </Typography>
                        <Typography
                          padding="0.5rem 0 1rem 0"
                          fontSize="0.9rem"
                          fontWeight={"bold"}
                        >
                          Adicional opción hamburguesas $
                          {card.food.additionalPerHamburguer}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#00CC00",
                            "&:hover": {
                              backgroundColor: "rgba(0,204,0, 0.8)",
                            },
                            textTransform: "capitalize",
                            width: "100%",
                          }}
                        >
                          Consultá
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecreationalEventsSectionContainer;
