import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import RecoverPasswordFormContainer from "../RecoverPasswordFormContainer";
import { Container } from "./recoverPasswordComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { ThemeProvider } from "@mui/system";
import { theme } from "@/styles/material-theme";
import { Box } from "@mui/material";

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LayoutGeneral title={"RecoverPassword"}>
          <Container style={{ height: "100vh" }}>
            <RecoverPasswordFormContainer />
          </Container>
        </LayoutGeneral>
      </Provider>
    </ThemeProvider>
  );
};

export default Register;
