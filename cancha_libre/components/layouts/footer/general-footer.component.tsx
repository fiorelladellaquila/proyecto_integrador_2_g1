import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const GeneralFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E2F33",
        display: "flex",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <WhatsAppIcon sx={{ color: "common.white", mr: 1, fontSize: "2rem" }} />
        <FacebookIcon sx={{ color: "common.white", mr: 1, fontSize: "2rem" }} />
        <InstagramIcon
          sx={{ color: "common.white", mr: 2, fontSize: "2rem" }}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        width="100%"
      >
        <Typography variant="body2" color="#fff" mt={1}>
          Copyright © 2023
        </Typography>
        <Typography variant="body2" color="#fff">
          Complejo Deportivo Cancha Libre - Diseño CTD-PI2-C2-G1
        </Typography>
      </Box>
    </Box>
  );
};
export default GeneralFooter;
