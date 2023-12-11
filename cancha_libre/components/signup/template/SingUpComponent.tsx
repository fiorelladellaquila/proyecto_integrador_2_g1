import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import SingUpFormContainer from "../SingUpFormContainer";
import { Container } from "./singUpComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import GeneralFooter from '../../layouts/footer/general-footer.component'
import { amiko } from "@/components/fonts";

const Register = () => {
  return (
      <Provider store={store}>
        <LayoutGeneral title={"SingUp"}  className={`${amiko.className}`}>
          <Container>
            <SingUpFormContainer />
          </Container>
        </LayoutGeneral>
        <GeneralFooter/>
      </Provider>
  );
};

export default Register