import * as React from "react";
import { FC, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import { Link as MUILink, Button, Typography, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

type Props = {
  variant?: "simple" | "general";
};

const Header: FC<Props> = ({ variant }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <AppBar position="relative" sx={{ background: "#00CC00" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isClient && (
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <WhatsAppIcon
                sx={{ color: "common.white", mr: 1, fontSize: "2rem" }}
              />
              <FacebookIcon
                sx={{ color: "common.white", mr: 1, fontSize: "2rem" }}
              />
              <InstagramIcon
                sx={{ color: "common.white", mr: 2, fontSize: "2rem" }}
              />
            </Box>
          )}

          {variant === "general" && isClient && (
            <Box sx={{ display: "flex" }}>
              <NextLink href="/auth/login" passHref>
                <MUILink underline="none" component="a">
                  <Button
                    sx={{
                      backgroundColor: "#E5E5E5",
                      color: "#0A711B",
                      textTransform: "none",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Iniciar sesión
                    </Typography>
                  </Button>
                </MUILink>
              </NextLink>
              <NextLink href="/auth/createdUser" passHref>
                <MUILink underline="none" component="a">
                  <Button
                    sx={{
                      backgroundColor: "#0A711B",
                      color: "#FFFFFF",
                      ml: 1,
                      textTransform: "none",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Registrarse
                    </Typography>
                  </Button>
                </MUILink>
              </NextLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const GeneralHeader: FC<Props> = ({ variant }: Props) => {
  return <Header variant={variant} />;
};

GeneralHeader.defaultProps = {
  variant: "general",
};

export default GeneralHeader;
