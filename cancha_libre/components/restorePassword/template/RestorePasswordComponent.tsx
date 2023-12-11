import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import { Container } from "./restorePasswordComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { ThemeProvider } from "@mui/system";
import { theme } from "@/styles/material-theme";
import RestorePasswordFormContainer from "../RestorePasswordFormContainer";

const RestorePassword = ({code, email}: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LayoutGeneral title={"RestorePassword"}>
          <Container style={{ height: "100vh" }}>
            <RestorePasswordFormContainer code={code} email={email} />
          </Container>
        </LayoutGeneral>
      </Provider>
    </ThemeProvider>
  );
};

export default RestorePassword;
