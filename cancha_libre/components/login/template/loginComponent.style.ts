import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerImage = styled.div`
  background-color: #0A711B;
  max-height: 100%;
  flex: 3;

  @media (max-width: 767px) {
    flex: 1;
  }
`;

export const ContainerLoginForm = styled.div`
  background: rgb(10, 113, 27);
  background: linear-gradient(180deg, rgba(10, 113, 27, 1) 0%, rgba(94, 191, 111, 1) 33%, rgba(0, 0, 0, 1) 100%);
  max-height: 100%;
  flex: 2;

  @media (max-width: 767px) {
    flex: 1;
  }
`;
