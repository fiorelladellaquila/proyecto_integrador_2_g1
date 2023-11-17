import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import LoginFormContainer from "../LoginFormContainer";
import { Container } from "./loginComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { ThemeProvider } from "@mui/system";
import { theme } from "@/styles/material-theme";

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LayoutGeneral title={"Login"}>
          <Container>
            <LoginFormContainer />
          </Container>
        </LayoutGeneral>
      </Provider>
    </ThemeProvider>
  );
};

export default Login;
