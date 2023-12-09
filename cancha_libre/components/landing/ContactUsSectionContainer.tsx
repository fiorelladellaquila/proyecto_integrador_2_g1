import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { aleo } from '../fonts';

const ContactUsSectionContainer: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#BDFFBD",
          padding: "1rem 0 5rem 0",
          textAlign: "center",
        }}
        id='contact'
      >
        <Typography
          fontFamily={'Aleo'}
          fontWeight={'600'}
          variant="h4"
          color="#3A3A3A"
          sx={{
            borderBottom: "4px solid #3A3A3A",
            margin: "0 auto 3rem auto",
            display: "inline-block",
          }}
        >
          CONTACTANOS
        </Typography>
        <Grid display="flex">
          <Box margin="1rem" width="100%">
            {/* Formulario de contacto */}
            <form>
              <Box margin="1rem" width="100%">
                {/* Input para Nombre */}
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{
                    backgroundColor: "#fff",
                    borderBottom: "3px solid #787B81",
                  }}
                />
              </Box>
              <Box margin="1rem" width="100%">
                {/* Input para Correo Electrónico */}
                <TextField
                  label="Correo Electrónico"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{
                    backgroundColor: "#fff",
                    borderBottom: "3px solid #787B81",
                  }}
                />
              </Box>
              <Box margin="1rem" width="100%">
                {/* Input para Mensaje */}
                <TextField
                  label="Mensaje"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{
                    backgroundColor: "#fff",
                    borderBottom: "3px solid #787B81",
                  }}
                />
              </Box>
              <Button variant="contained" sx={{
                  backgroundColor: "#00CC00",
                  "&:hover": {
                    backgroundColor: "rgba(0,204,0, 0.8)",
                  },
                  textTransform: "capitalize",
                }}>
                Enviar
              </Button>
            </form>
          </Box>
          <Box margin="1rem" width="100%">
            <Typography
              color="#3A3A3A"
              sx={{ margin: "0 auto 3rem auto", display: "inline-block" }}
            >
              Te invitamos a conocer el Complejo Deportivo Cancha Libre. Una vez
              que lo hagas nos vas a elegir para tu próximo partido.
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default ContactUsSectionContainer;
