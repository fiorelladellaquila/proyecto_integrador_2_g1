import React from 'react';
import LayoutGeneral from '../../layouts/layout-general';
import LoginFormContainer from '../LoginFormContainer';
import ImageContainer from '../ImageContainer';
import {
  Container,
  ContainerImage,
  ContainerLoginForm,
} from './loginComponent.style';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

const Login = () => {
  return (
    <Provider store={store}>
        <LayoutGeneral title={'Login'}>
      <Container>
          <LoginFormContainer />
      </Container>
      </LayoutGeneral>
    </Provider>
    
  );
};

export default Login;
