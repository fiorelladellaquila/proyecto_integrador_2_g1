import React from "react";
import LayoutGeneral from "../../layouts/layout-general";
import RecoverPasswordFormContainer from "../RecoverPasswordFormContainer";
import { Container } from "./recoverPasswordComponent.style";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { amiko } from "@/components/fonts";
import GeneralFooter from "@/components/layouts/footer/general-footer.component";

const RecoveryPassword = () => {
  return (
      <Provider store={store} >
        <LayoutGeneral title={"RecoverPassword"} className={`${amiko.className}`} >
          <Container>
            <RecoverPasswordFormContainer />
          </Container>
        </LayoutGeneral>
        <GeneralFooter/>
      </Provider>
  );
};

export default RecoveryPassword;
