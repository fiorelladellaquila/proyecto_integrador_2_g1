import React from 'react';
import LayoutGeneral from '../../layouts/layout-general';
import LoginForm from '../LoginForm';
import ImageContainer from '../ImageContainer';
import {
  Container,
  ContainerImage,
  ContainerLoginForm,
} from './loginComponent.style';

const Login = () => {
  return (
    <LayoutGeneral title={'Login'}>
      <Container>
        <ContainerImage>
            <ImageContainer />
        </ContainerImage>
        <ContainerLoginForm>
            <LoginForm />
        </ContainerLoginForm>  
      </Container>
    </LayoutGeneral>
  );
};

export default Login;
