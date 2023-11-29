import { useEffect, useState } from 'react'
import {
  ImageContainerWrapper,
  OverlappingImage,
  BackgroundImage,
} from './imageContainer.style'

const calculateWidth = () => (window.innerWidth * 0.6)

const ImageContainer = () => {
  const [imageWidth, setImageWidth] = useState(calculateWidth())

  useEffect(() => {
    const handleResize = () => {
      setImageWidth(calculateWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ImageContainerWrapper>
      <BackgroundImage src="/auth.png" alt="Fondo" width={imageWidth} height={window.innerHeight} />
      <OverlappingImage src="/notbCL.png" alt="Superpuesta" width={imageWidth} height={window.innerHeight} />
    </ImageContainerWrapper>
  )
}

export default ImageContainer