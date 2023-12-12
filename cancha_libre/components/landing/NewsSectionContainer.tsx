import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { URL_IMAGE_AWS } from "../../utils/constant/imagesAws";


const NewsSectionContainer: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0A711B",
          padding: "1rem",
          textAlign: "center",
        }}
        id='news'
      >
        <Typography
          fontFamily={'__Aleo_b421b5'}
          fontWeight={'600'}
          variant="h4"
          color="#FFFFFF"
          sx={{
            borderBottom: "4px solid #FFFFFF",
            margin: "0 auto 3rem auto",
            display: "inline-block"
          }}
          
        >
          NOVEDADES
        </Typography>
        <Grid container spacing={1}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Image
                src={`${URL_IMAGE_AWS}/novedad_${index + 1}.png`}
                alt={`Novedad ${index + 1}`}
                width={500}
                height={700}
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NewsSectionContainer;
