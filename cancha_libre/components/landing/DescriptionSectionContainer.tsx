import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { URL_IMAGE_AWS } from "../../utils/constant/imagesAws";
const DescriptionSectionContainer: FC = () => {
  
  return (
    <>
      <Box id='services'>
        <Typography variant="h4" color="#3A3A3A" textAlign="center" mt={4} className="">
          COMPLEJO DEPORTIVO CANCHA LIBRE
        </Typography>
        <Typography variant="h5" color="#787B81" textAlign="center" mt={2} >
          Deportes + Recreación
        </Typography>

        {/* Contenedor con Texto y Cuatro Imágenes */}
        <Grid container mt={4} spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Texto en el lado izquierdo */}
            <Typography
              variant="body1"
              color="#787B81"
              paddingBottom={2}
              paddingRight={5}
              paddingLeft={5}
            >
              Disfrutá de un predio extraordinario, ubicado en pleno centro de
              Córdoba, a pasos de la Av. Colón.
            </Typography>
            <Typography
              variant="body1"
              color="#787B81"
              paddingBottom={2}
              paddingRight={5}
              paddingLeft={5}
            >
              Te ofrecemos las mejores canchas de fútbol 5, 7, 8, 9 y 11 con
              césped sintético de última generación, además de exclusivos
              servicios adicionales para que tu experiencia sea única.
            </Typography>
            <Typography
              variant="body1"
              color="#787B81"
              paddingBottom={2}
              paddingRight={5}
              paddingLeft={5}
            >
              Nuestro sistema de reservas te permite saber de antemano qué
              turnos están disponibles en vivo y en directo para cada cancha
              para que puedas organizarte mejor. Sólo tenés que crearte una
              cuenta o iniciar sesión para hacer la reserva.
            </Typography>
            <Typography
              variant="body1"
              color="#787B81"
              paddingBottom={2}
              paddingRight={5}
              paddingLeft={5}
            >
              Además, con el alquiler de cualquiera de nuestras canchas podés
              utilizar el sector de parrillas absolutamente sin cargo.
            </Typography>
            <Typography
              variant="body1"
              color="#787B81"
              paddingBottom={2}
              paddingRight={5}
              paddingLeft={5}
            >
              Contamos con seguridad y personal médico presente en el complejo
              las 24 hs.
            </Typography>
          </Grid>
          <Grid container item xs={12} md={6} spacing={2}>
            {/* Cuatro imágenes en el lado derecho */}
            {["cancha_1", "cancha_2", "cancha_3", "cancha_4"].map((index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    // paddingTop: "55%",
                  }}
                >
                  <Image
                    src={`${URL_IMAGE_AWS}/${index}.jpg`}
                    alt={`Imagen ${index}`}
                    width={330}
                    height={250 }
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DescriptionSectionContainer;
