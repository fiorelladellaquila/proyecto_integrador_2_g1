import * as React from "react";
import { FC } from "react";
import LayoutGeneral from "../../layouts/layout-general";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "@/styles/material-theme";
import Image from "next/image";
import GeneralFooter from "@/components/layouts/footer/general-footer.component";
import OurFieldsMappingContainer from "@/components/landing/OurFieldsMappingContainer";
import InformationHomeSectionContainer from "../InformationHomeSectionContainer";
import CategoriesFieldsSectionContainer from "../CategoriesFieldsSectionContainer";

const HomeComponent: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutGeneral title={"Home"}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <div style={{ height: "5rem", position: "relative", width: "100%" }}>
            <Image
              src={`/imageHome.png`}
              alt={`Imagen Home`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Box
            style={{
              flex: 1,
              display: "flex",
              backgroundColor: "#2E2F33",
            }}
          >
            <InformationHomeSectionContainer />
            <CategoriesFieldsSectionContainer />
          </Box>
          <GeneralFooter />
        </Box>
      </LayoutGeneral>
    </ThemeProvider>
  );
};

export default HomeComponent;