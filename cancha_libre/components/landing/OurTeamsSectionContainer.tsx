import { Box, Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import OurFieldsMappingContainer from "./OurFieldsMappingContainer";
import {aleo} from "../fonts"


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
          fontFamily={'__Aleo_b421b5'}
          fontWeight={'600'}
          variant="h4"
          color="#FFFFFF"
          sx={{
            borderBottom: "4px solid #FFFFFF",
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
        <OurFieldsMappingContainer inLandingTemplate={true}/>
      </Box>
    </>
  );
};

export default OurTeamsSectionContainer;
