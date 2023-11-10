import * as React from 'react';
import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container, Link as MUILink, Typography } from '@mui/material';
import Image from 'next/image';

const HeaderHome: FC = () => {
  const backgroundColor = '#2E2F33';
  const linkColor = '#B4FA8A';

  return (
    <AppBar position="sticky" sx={{ background: backgroundColor }}>
       <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat' }}>Nosotros</Typography>
          </MUILink>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat' }}>Canchas</Typography>
          </MUILink>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat' }}>Calendario</Typography>
          </MUILink>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <Image src="/cancha_libreLogo.png" alt="Cancha Libre logo" width={150} height={70} />
            </Box>
          </MUILink>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat' }}>Novedades</Typography>
          </MUILink>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat' }}>Eventos</Typography>
          </MUILink>
          <MUILink href="#" underline="none" color={linkColor} sx={{ mx: 2, textTransform: 'uppercase' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat' }}>Contacto</Typography>
          </MUILink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderHome;
