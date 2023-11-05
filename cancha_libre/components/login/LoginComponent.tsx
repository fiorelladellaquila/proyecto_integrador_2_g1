import React from 'react';
import styled from 'styled-components';
import LayoutGeneral from '../layouts/layout-general';
import LoginForm from './LoginForm';
import ImageContainer from './ImageContainer';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  return (
    <LayoutGeneral title={'Login'}>
      <Container>
        <ImageContainer />
        <LoginForm />
      </Container>
    </LayoutGeneral>
  );
};

export default Login;
