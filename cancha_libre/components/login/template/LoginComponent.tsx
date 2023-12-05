import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import LoginFormContainer from "../LoginFormContainer";
import GeneralFooter from '../../layouts/footer/general-footer.component'
import { Container } from "./loginComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const Login = () => {
  return (
      <Provider store={store}>
        <LayoutGeneral title={"Login"}>
          <Container>
            <LoginFormContainer />
          </Container>
        </LayoutGeneral>
        <GeneralFooter/>
      </Provider>
  );
};

export default Login;
