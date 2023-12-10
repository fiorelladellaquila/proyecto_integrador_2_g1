/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
// import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { theme } from '@/styles/material-theme';
import { Provider } from 'react-redux';
import store from "@/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
    <Component {...pageProps} />
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
    </Provider>
    
  </ThemeProvider>
}

export default MyApp
