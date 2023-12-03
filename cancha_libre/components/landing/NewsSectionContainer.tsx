import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import {aleo} from "../fonts"


const NewsSectionContainer: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0A711B",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Typography
          fontWeight={'600'}
          variant="h4"
          color="#FFFFFF"
          sx={{
            borderBottom: "4px solid #FFFFFF",
            margin: "0 auto 3rem auto",
            display: "inline-block",
            fontFamily:`${aleo}`
          }}
          
        >
          NOVEDADES
        </Typography>
        <Grid container spacing={1}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Image
                src={`/novedad_${index + 1}.png`}
                alt={`Novedad ${index + 1}`}
                layout="responsive"
                width={500}
                height={700}
                objectFit="cover"
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
