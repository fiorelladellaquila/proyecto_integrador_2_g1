import { FC, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import GeneralHeaderContent from './GeneralHeaderContent'

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
                <GeneralHeaderContent />
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

  export default Header;