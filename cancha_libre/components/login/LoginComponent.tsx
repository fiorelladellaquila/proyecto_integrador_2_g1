import React from 'react';
import styled from 'styled-components';
import LayoutGeneral from '../layouts/layout-general';
import LoginForm from './LoginForm';
import ImageContainer from './ImageContainer';

const Container = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
align-items: center;
max-height: 100vh; /* Evita desbordamiento vertical */
`;
const ContainerImage = styled.div`
background-color: #0A711B;
flex: 3; /* 60% del ancho */
max-height: 100%; /* Ocupa la altura máxima del contenedor padre */
`;

const ContainerLoginForm = styled.div`
background-color: #0A711B;
flex: 2; /* 40% del ancho */
max-height: 100%; /* Ocupa la altura máxima del contenedor padre */
`;


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
