import { useEffect, useState } from 'react';
import {
  ImageContainerWrapper,
  OverlappingImage,
  BackgroundImage,
  TextContainer,
  LineBreak,
  Text,
} from './imageContainer.style';

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
