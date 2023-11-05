import * as React from 'react';
import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NextLink from 'next/link'
import {Link as MUILink} from '@mui/material';

type Props = {
    variant?: "simple" | "general"
}

const Header: FC<Props> = ({variant}: Props) => {
    return <Container maxWidth="xl">
        <Toolbar disableGutters>
            <NextLink href="/" passHref>
                <MUILink variant="h6" sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}> Cancha Libre</MUILink>
            </NextLink>
            {variant == 'general' &&
                <Box>
                    <NextLink href="/" passHref>
                        <MUILink variant="body2" sx={{color: 'white', fontSize: 18, fontWeight: 600}}>LINK</MUILink>
                    </NextLink>
                </Box>
            }
        </Toolbar>
    </Container>
}


const GeneralHeader: FC<Props> = ({variant}: Props) => {
    return variant == 'general' ? 
        <AppBar position="sticky" sx={{ background: 'green' }}>
            <Header variant={variant}/>
        </AppBar> : <Header variant={variant}/>
        ;
};
GeneralHeader.defaultProps = {
    variant: 'general'
}

export default GeneralHeader;
