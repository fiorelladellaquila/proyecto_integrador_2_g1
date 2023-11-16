import * as React from 'react';
import { FC } from 'react';
import LayoutGeneral from '../components/layouts/layout-general';
import LandingComponent from '../components/landing/template/LandingComponent';
import { Stack } from '@mui/material';

const Home: FC = () => {
  return (
    <LayoutGeneral title={'Login'}>
      <Stack direction="column" width= '100%'>
           <LandingComponent />
      </Stack>
    </LayoutGeneral>
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

