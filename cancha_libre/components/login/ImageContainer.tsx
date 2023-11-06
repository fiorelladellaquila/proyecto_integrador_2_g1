import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageContainerWrapper = styled.div`
//   width: 60%; 
  height: 100vh; 
//   position: relative; 
`;

const OverlappingImage = styled(Image)`
position: absolute; 
top: 1rem;
left: 5rem; 
z-index: 2;
width: 55rem; 
height: 40rem;
`;

const BackgroundImage = styled(Image)`
    z-index: 1;
    object-fit: cover; /* Ajusta la imagen al contenedor sin distorsionarla */
`;

const TextContainer = styled.div`
  position: absolute; 
  top: 30%; 
  left: 21%; 
  transform: translate(-50%, -50%); 
  z-index: 3; 
`;

const LineBreak = styled.div`
  margin-top: 10px;
`;

const Text = styled.div`
  font-size: 1.5rem; 
  color: white; 
`;

const calculateWidth = () => (window.innerWidth * 0.6);

const ImageContainer = () => {
  const [imageWidth, setImageWidth] = useState(calculateWidth());

  useEffect(() => {
    const handleResize = () => {
      setImageWidth(calculateWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ImageContainerWrapper>
      <BackgroundImage src="/auth.png" alt="Fondo" width={imageWidth} height={window.innerHeight} />
      <OverlappingImage src="/screenLogin.png" alt="Superpuesta" width={imageWidth} height={window.innerHeight} />
      <TextContainer>
        <Text>RESERVA</Text>
        <LineBreak />
        <Text>AHORA!</Text>
      </TextContainer>
    </ImageContainerWrapper>
  );
};

export default ImageContainer;
