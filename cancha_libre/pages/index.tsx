import * as React from 'react';
import { FC } from 'react';
import LayoutGeneral from '../components/layouts/layout-general';
import LandingComponent from '../components/landing/template/LandingComponent';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/material-theme';

const Home: FC = () => {
  return (
    <ThemeProvider theme={theme}>
       <LayoutGeneral title={'Login'}>
      <Stack direction="column" width= '100%' margin='0' padding='0'>
           <LandingComponent />
      </Stack>
    </LayoutGeneral>
    </ThemeProvider>
   
  );
};

export default Home;



// export const getStaticProps: GetStaticProps = async () => {
    
//     const comics = await getComics(undefined, 12)
//     return {
//         props: {
//             comics: comics.data
//         }
//     }
// }

// export const getServerSideProps: GetServerSideProps  = async (context) => {
//     const page = context.query.page ? Number(context.query.page) : 1;
//     const comics = await getComics(page, 12);  

//     return {
//         props: {
//             comics: comics.data
//         }
//     }
// }

