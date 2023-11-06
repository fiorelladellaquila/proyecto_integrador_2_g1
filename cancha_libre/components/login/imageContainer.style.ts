import styled from 'styled-components'
import Image from 'next/image'

export const ImageContainerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh; /* Evita desbordamiento vertical */
`

export const OverlappingImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2;

  @media (max-width: 767px) {
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export const BackgroundImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100vh;

  @media (max-width: 767px) {
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 3;

  @media (max-width: 767px) {
    top: 40%;
    left: 33%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 480px) {
    top: 50%;
    left: 50%;
  }
`

export const LineBreak = styled.div`
  margin-top: 10px;
`

export const Text = styled.div`
  font-size: 1.5rem;
  color: white;
//   width: 100%;

  @media (max-width: 767px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
`
