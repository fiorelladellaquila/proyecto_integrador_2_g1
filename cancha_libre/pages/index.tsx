import React from 'react';
import { FC } from 'react';
import LayoutGeneral from '../components/layouts/layout-general';
import LandingComponent from '../components/landing/template/LandingComponent';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/material-theme';

const Home: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutGeneral title={'Login'}>
        <Stack direction="column" width="100%" margin="0">
        <LandingComponent />  
        </Stack>
      </LayoutGeneral>
    </ThemeProvider>
  );
};

export default Home;
