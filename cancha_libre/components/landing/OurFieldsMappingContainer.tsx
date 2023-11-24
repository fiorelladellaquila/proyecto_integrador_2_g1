import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

interface OurFieldsMappingContainerProps {
  inLandingTemplate?: boolean; // Propiedad opcional para determinar el template
}

const OurFieldsMappingContainer: FC<OurFieldsMappingContainerProps> = ({
  inLandingTemplate,
}: OurFieldsMappingContainerProps) => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={1}
        style={{ padding: "0 5rem" }}
      >
        {[
          { id: 1, teamNumber: "5", price: "15.000", img: "/sliderF5.png" },
          { id: 2, teamNumber: "7-8", price: "21.000", img: "/sliderF7.png" },
          { id: 3, teamNumber: "9", price: "27.000", img: "/sliderF9.png" },
          { id: 4, teamNumber: "11", price: "33.000", img: "/sliderF11.png" },
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
              {inLandingTemplate ? (
                <>
                  <Box sx={{ backgroundColor: "#333333", color: "#FFFFFF" }}>
                    <Typography padding="0.5rem 0 0.2rem 0">Hora</Typography>
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
                </>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={card.img}
                    alt={`Imagen ${card.teamNumber}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              )}
               {inLandingTemplate ? ( 
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
                Reservá
              </Button>):( 
              <Link href="/shifts/1">
                 <Button
                variant="contained"
                sx={{
                  backgroundColor: "#EA4335",
                  "&:hover": {
                    backgroundColor: "rgba(234, 67, 53, 0.8)",
                  },
                  textTransform: "capitalize",
                  width: "100%",
                }}    
              >
                Reservá
              </Button>
              </Link>
             )}
             
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurFieldsMappingContainer;
