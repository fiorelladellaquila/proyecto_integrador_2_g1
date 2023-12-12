import * as React from 'react';
import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container, Link as MUILink, Typography } from '@mui/material';
import Image from 'next/image';
import { URL_IMAGE_AWS } from '../../../utils/constant/imagesAws'

const HeaderHome: FC = () => {
  const backgroundColor = '#2E2F33';
  const linkColor = '#B4FA8A';
  const [userData, setUserData] = React.useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } else {
      return {};
    }
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleStorageChange = () => {
        setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  const isAdmin = userData.name === 'Cancha Libre';


  return (
    <AppBar position="sticky" sx={{ background: backgroundColor }}>
       <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {isAdmin ? (
          <>
             <MUILink href="/admin#users" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
              <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Perfil <span style={{fontSize: '10px', textTransform: 'capitalize'}}>(Proximamente)</span></Typography>
            </MUILink>
            <MUILink href="/admin#users" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
              <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Usuarios</Typography>
            </MUILink>
            <MUILink href="/" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <Image src={`${URL_IMAGE_AWS}/cancha_libreLogo.png`} alt="Cancha Libre logo" width={150} height={70} />
            </Box>
          </MUILink>  
            <MUILink href="/admin#shifts" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
              <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Reservas</Typography>
            </MUILink>
            <MUILink href="/admin#report" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
              <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Reportes</Typography>
            </MUILink>
          </>
        ) : (
          <>
          <MUILink href="/#services" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Servicios</Typography>
          </MUILink>
          <MUILink href="/#fields" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Canchas</Typography>
          </MUILink>
          <MUILink href="/#hero-section" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat, sans-serif" }}>Calendario</Typography>
          </MUILink>
          <MUILink href="/" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <Image src={`${URL_IMAGE_AWS}/cancha_libreLogo.png`} alt="Cancha Libre logo" width={150} height={70} />
            </Box>
          </MUILink>
          <MUILink href="/#events" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat, sans-serif" }}>Eventos</Typography>
          </MUILink>
          <MUILink href="/#contact" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat, sans-serif" }}>Contacto</Typography>
          </MUILink>
          <MUILink href="/#news" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily:"Montserrat, sans-serif" }}>Novedades</Typography>
          </MUILink>
          </>
        )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderHome;
