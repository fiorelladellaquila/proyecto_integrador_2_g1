import * as React from 'react';
import {FC, PropsWithChildren} from "react";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import GeneralHeader from "../layouts/header/general-header.component";
import GeneralFooter from "../layouts/footer/general-footer.component";
import Head from "next/head";

interface Props {
    children: React.ReactNode;
    title: string
    description?: string
    keywords?: string
}

const LayoutGeneral: FC<Props> = ({children, title, description, keywords}: Props) => {
    
    return (<>
            <Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="author" content="" />
				<meta
					name="description"
					content={description || ""}
				/>
				<meta
					name="keywords"
					content={keywords || ""}
				/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/....png" />
				{/* Redes sociales */}
				<meta property='og:title' content={title || ""} />
				<meta property='og:description' content={description || ""} />
				<meta property='og:image' content='/img/...png' />
				<meta property='og:type' content='website' />
				<link rel="icon" href="/favicon.ico" />
				<meta charSet='utf-8' />
            </Head>
            <Stack direction={"column"} height={'100%'}>
                <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
                    {children}
                </Box>
            </Stack>
        </>
    );
};
export default LayoutGeneral;
