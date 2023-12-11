import * as React from "react";
import { FC } from "react";
import LayoutGeneral from "../../layouts/layout-general";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/material-theme";
import GeneralFooter from "@/components/layouts/footer/general-footer.component";
import HorizontalLinearStepper from "../StepperComponent";

interface Props {
  result: any;
}

const BookingComponent: FC<Props> = ({ result }: Props) => {
  return (
    // <ThemeProvider theme={theme}>
      <LayoutGeneral title={"Home"}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <HorizontalLinearStepper result={result} />
          <GeneralFooter />
        </Box>
      </LayoutGeneral>
    // </ThemeProvider>
  );
};

export default BookingComponent;
