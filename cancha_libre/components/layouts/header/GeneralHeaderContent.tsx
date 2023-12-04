import * as React from "react";
import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NextLink from "next/link";
import {
  Link as MUILink,
  Button,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/router";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/auth";

const GeneralHeaderContent: FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isHome = router.pathname === "/home";
  const dispatch = useDispatch();

  const avatar = createAvatar(funEmoji);

  const svg = avatar.toString();

  useEffect(() => {
    const handleStorageChange = () => {
      setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!userData.token && isHome) {
      redirectToHome();
    }
  }, [userData.token, isHome]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const redirectToHome = () => {
    router.push("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    if (router.pathname === "/") {
      window.location.reload();
    } else {
      redirectToHome();
    }
    handleMenuClose();
  };

  let greetingContent = null;

  if (userData.token) {
    const name = userData.name;

    greetingContent = (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={name} src={svg} sx={{ mr: 1 }} />
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "#FFFFFF",
            fontSize: "1.5rem",
            margin: "0.5rem",
          }}
        >
          ¡Hola, <strong>{name}</strong>!
        </Typography>
        <Button
          onClick={handleMenuOpen}
          sx={{ color: "white", textTransform: "none", marginLeft: "1rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7q-.15 0-.275-.05t-.25-.175Z"
            />
          </svg>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              backgroundColor: "#2E2F33",
              color: "white",
            },
          }}
        >
          <MenuItem
            onClick={handleLogout}
            sx={{
              "&:hover": {
                backgroundColor: "#00CC00",
              },
            }}
          >
            Cerrar sesión
          </MenuItem>
        </Menu>
      </Box>
    );
  } else {
    greetingContent = (
      <>
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
        <NextLink href="/auth/SignUp" passHref>
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
      </>
    );
  }

  return greetingContent;
};

export default GeneralHeaderContent;
