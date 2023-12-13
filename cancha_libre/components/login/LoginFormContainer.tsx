import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  Grid,
  Box,
  FormControlLabel,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import {
  FormContainer,
  StyledFormControl,
  StyledInputLabel,
  StyledInput,
  ButtonContainer,
  StyledButton,
  Text,
  StyledValidationMessages,
} from "./loginFormContainer.style";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login, setRememberMe } from "@/redux/slices/auth";
import { RootState } from "@/redux/store";
import NotificationModal from "../modal/NotificationModal";
import { loginUser } from "@/services/auth";

const LoginFormContainer: React.FC = () => {
  const rememberMe = useSelector((state: RootState) => state.auth.rememberMe);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setisOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe) {
      dispatch(setRememberMe(JSON.parse(storedRememberMe)));

      if (JSON.parse(storedRememberMe)) {
        const rememberedEmail = localStorage.getItem("rememberedEmail") || "";
        dispatch(login(rememberedEmail));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (
      rememberMe !== JSON.parse(localStorage.getItem("rememberMe") || "false")
    ) {
      localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
      if (!rememberMe) {
        localStorage.removeItem("rememberedEmail");
      }
    }
  }, [rememberMe]);

  return (
    <FormContainer>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <Formik
        initialValues={{
          username: (localStorage.getItem("rememberedEmail") || "").replace(
            /['"]/g,
            ""
          ),
          password: "",
          rememberMe: Boolean(localStorage.getItem("rememberedEmail")),
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .max(255)
            .required("El nombre de usuario es requerido"),
          password: Yup.string()
            .max(255)
            .required("La contraseña es requerida"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await loginUser(values.username, values.password);
            const { token, name, username, id } = response;
            console.log(name)
        
            if (rememberMe) {
              console.log('entraaaa')
              localStorage.setItem("user", JSON.stringify({token, name, id}));
              localStorage.setItem("rememberedEmail", username);
            }
        
            localStorage.setItem("user", JSON.stringify({token, name, id}));
        
            dispatch(login({ token: token }));

            if(name === "CanchaLibre") {
              router.push("/admin")
            } else {
              router.push("/home");
            }
        
           
          } catch (error) {
            console.error("Error de inicio de sesión:", error);
            setisOpen(true);
          } finally {
            setSubmitting(false);
          } 
        }}
        
      >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              style={{ width: "70%" }}
            >
              <StyledInputLabel
                htmlFor="outlined-adornment-email-login"
                style={{ color: "black" }}
              >
                Nombre de usuario
              </StyledInputLabel>
              <StyledFormControl error={Boolean(touched.username && errors.username)}>
                <StyledInput
                  id="outlined-adornment-email-login"
                  type="text"
                  placeholder="Ingresá tu nombre usuario"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                  label="Username"
                />
              </StyledFormControl>
              {touched.username && errors.username && (
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left",
                    borderRadius: "8px",
                    margin: "0 auto",
                  }}
                >
                  <StyledValidationMessages>
                    <ul>
                      {touched.username && errors.username && <li>{errors.username}</li>}
                    </ul>
                  </StyledValidationMessages>
                </Box>
              )}

              <StyledInputLabel
                htmlFor="outlined-adornment-password-login"
                style={{ color: "black" }}
              >
                Contraseña
              </StyledInputLabel>
              <StyledFormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
              >
                <StyledInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresá tu contraseña"
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                        size="medium"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                  label="Password"
                />
              </StyledFormControl>
              {touched.password && errors.password && (
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left",
                    borderRadius: "8px",
                    margin: "0 auto",
                  }}
                >
                  <StyledValidationMessages>
                    <ul>
                      {touched.password && errors.password && (
                        <li>{errors.password}</li>
                      )}
                    </ul>
                  </StyledValidationMessages>
                </Box>
              )}

              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <StyledFormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => {
                          dispatch(setRememberMe(e.target.checked));
                        }}
                        name="rememberMe"
                        color="primary"
                        style={{ marginLeft: "3rem", color: "black" }}
                      />
                    }
                    label="Recuérdame"
                    style={{ color: "black" }}
                  />
                </StyledFormControl>
              </Grid>

              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem 0 0 0",
                }}
              >
                <ButtonContainer>
                  <StyledButton size="large" type="submit" variant="contained">
                    Iniciar sesión
                  </StyledButton>
                </ButtonContainer>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Text style={{ color: "white", marginBottom: "1rem" }}>
                  <a href="RecoverPassword" style={{ color: "black" }}>
                    ¿Olvidaste tu contraseña?
                  </a>
                </Text>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              ></Box>
              <NotificationModal
                isOpen={isOpen}
                level="error"
                title="No hemos podido identificarte"
                body="Ingresaste mal tu usuario o contraseña. Por favor revisa los mismos y vuelve a intentar."
                labelOnClick="VOLVER A INTENTAR"
                setClose={setisOpen}
              />
            </form>
          )}
        </Formik>
        <Box
          style={{
            backgroundColor: "#0A711B",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "20rem",
            padding: "0.5rem 0",
            borderRadius: "8px",
          }}
        >
          <Text style={{ color: "white", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "14px" }}>¿No tienes cuenta?</span>
          </Text>
          <ButtonContainer>
            <Link href="/auth/SignUp">
              <a>
                <StyledButton size="large" type="submit" variant="contained">
                  Registrate acá
                </StyledButton>
              </a>
            </Link>
          </ButtonContainer>
        </Box>
      </Box>
    </FormContainer>
  );
};

export default LoginFormContainer;
