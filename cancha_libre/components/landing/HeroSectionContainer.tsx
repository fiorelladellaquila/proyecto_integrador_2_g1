import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

const HeroSectionContainer: FC = () => {
  return (
    <>
      <Box sx={{ position: "relative", width: "100%", margin: "auto" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="h3" color="#fff" mt={4}>
            Vení a darlo todo por tu equipo.
          </Typography>
          <Box textAlign="center" mt={2}>
            <Button variant="contained" sx={{
                  backgroundColor: "#00CC00",
                  "&:hover": {
                    backgroundColor: "rgba(0,204,0, 0.8)",
                  },
                  textTransform: "capitalize",
                }}>
              ¡Reserva ahora!
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="60"
              viewBox="0 0 1025 1024"
            >
              <path
                fill="#F2F2F2"
                d="M557.976 590q-18 18-45 18t-45-18l-448-452q-19-19-19-46t19-45l26-28q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 28q19 18 19 45t-19 46zm-512-155q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 27q19 19 19 45.5t-19 45.5l-448 452q-18 19-45 19t-45-19l-448-452q-19-19-19-45.5t19-45.5z"
              />
            </svg>
            <Typography variant="body2" color="#fff" mt={2}>
              ...o conocenos primero.
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="60"
              viewBox="0 0 1025 1024"
            >
              <path
                fill="#F2F2F2"
                d="M557.976 590q-18 18-45 18t-45-18l-448-452q-19-19-19-46t19-45l26-28q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 28q19 18 19 45t-19 46zm-512-155q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 27q19 19 19 45.5t-19 45.5l-448 452q-18 19-45 19t-45-19l-448-452q-19-19-19-45.5t19-45.5z"
              />
            </svg>
          </Box>
        </Box>
         <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/videoFondo.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </Box>
    </>
  );
};

export default HeroSectionContainer;
