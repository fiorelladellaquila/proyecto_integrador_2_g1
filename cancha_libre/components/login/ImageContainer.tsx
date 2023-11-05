import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageContainerWrapper = styled.div`
  width: 60%; /* Establece el ancho al 60% de la pantalla */
  height: 100vh; /* Establece la altura al 100% de la pantalla */
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
      <Image src="/public/auth" alt="Imagen" width={imageWidth} height={window.innerHeight} />
    </ImageContainerWrapper>
  );
};

export default ImageContainer;
