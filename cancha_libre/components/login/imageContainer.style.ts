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

