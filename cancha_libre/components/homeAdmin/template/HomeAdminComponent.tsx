import * as React from "react";
import { FC } from "react";
import LayoutGeneral from "../../layouts/layout-general";
import { Box, ThemeProvider } from "@mui/material";
import Image from "next/image";
import GeneralFooter from "@/components/layouts/footer/general-footer.component";
import CategoriesFieldsSectionContainer from "../CategoriesFieldsSectionContainer";
import { amiko } from "../../fonts";
import { URL_IMAGE_AWS } from "@/utils/constant/imagesAws";
import { theme } from "@/styles/material-theme";
const HomeAdminComponent: FC = () => {
  return (
    <ThemeProvider theme={theme}>
<LayoutGeneral title={"Home"} >
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
        src={`${URL_IMAGE_AWS}/imageHome.png`}
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
        justifyContent: "center",
      }}
    >
     
      <CategoriesFieldsSectionContainer />
    </Box>
    <GeneralFooter />
  </Box>
</LayoutGeneral>
  </ThemeProvider>
  );
};

export default HomeAdminComponent;
