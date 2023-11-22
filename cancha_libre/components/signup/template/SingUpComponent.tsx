import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import SingUpFormContainer from "../SingUpFormContainer";
import { Container } from "./singUpComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { ThemeProvider } from "@mui/system";
import { theme } from "@/styles/material-theme";

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LayoutGeneral title={"SingUp"}>
          <Container>
            <SingUpFormContainer />
          </Container>
        </LayoutGeneral>
      </Provider>
    </ThemeProvider>
  );
};

export default Register