import * as React from "react";
import { FC } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import OurFieldsMappingContainer from "@/components/landing/OurFieldsMappingContainer";

const CategoriesFieldsSectionContainer: FC = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flex: "80%",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "3rem 0",
          flexDirection: "column",
          margin: "1rem",
          borderRadius: "15px",
        }}
      >
        <Typography
          fontFamily={"Aleo"}
          fontWeight={"600"}
          variant="h4"
          color="#FFFFFF"
          padding={"1rem"}
          sx={{
            borderBottom: "4px solid #FFFFFF",
            margin: "0 auto 2.5rem auto",
            display: "inline-block",
          }}
        >
          CONOCÉ NUESTRAS CANCHAS
        </Typography>
        <OurFieldsMappingContainer inLandingTemplate={false} />
        <Link
          href="/shifts"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EA4335",
              "&:hover": {
                backgroundColor: "rgba(234, 67, 53, 0.8)",
              },
              textTransform: "capitalize",
              width: "85%",

              margin: "1rem",
            }}
          >
            Quiero reservar un turno
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default CategoriesFieldsSectionContainer;
