import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  Grid,
  Box,
  FormControlLabel,
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
import { LOGIN } from "@/redux/types/authActionTypes";
import { login } from "@/services/auth";
import { RootState } from "@/redux/store";
import NotificationModal from "../modal/NotificationModal";

const LoginFormContainer: React.FC = () => {
  const rememberMe = useSelector((state: RootState) => state.auth.rememberMe);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setisOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Recuperar el correo electrónico recordado al cargar el componente
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe) {
      dispatch({ type: "SET_REMEMBER_ME", payload: JSON.parse(storedRememberMe) });
  
      // Si el usuario marca "Recuérdame", recuperar y establecer el correo electrónico
      if (JSON.parse(storedRememberMe)) {
        const rememberedEmail = localStorage.getItem("rememberedEmail") || "";
        dispatch({ type: LOGIN, payload: rememberedEmail });
      }
    }
  }, [dispatch]);
  
  useEffect(() => {
    // Modificar el efecto para que solo actualice localStorage si el valor cambia
    if (rememberMe !== JSON.parse(localStorage.getItem("rememberMe") || "false")) {
      localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
        // Si rememberMe es false, eliminar rememberedEmail del localStorage
    if (!rememberMe) {
      localStorage.removeItem("rememberedEmail");
    }
    }
  }, [rememberMe]);
  
   return (
    <FormContainer>
      <Box sx={{ width: "100%" }}>
        <Formik
          initialValues={{
            email: (localStorage.getItem("rememberedEmail") || "").replace(/['"]/g, ""),
            password: "",
            rememberMe: Boolean(localStorage.getItem("rememberedEmail")),
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Debe ser un email valido")
              .max(255)
              .required("El email es requerido"),
            password: Yup.string()
              .max(255)
              .required("La contraseña es requerida"),
          })}
          onSubmit={async (values) => {
            try {
              const response = await login(values.email, values.password);

              console.log("response", response);

              const { token, name, username } = response;

             
              console.log('remember', rememberMe);
            
                if (rememberMe) {
                  localStorage.setItem("user", JSON.stringify({ token, name }));
                  localStorage.setItem("rememberedEmail", JSON.stringify( username ));
                }

                localStorage.setItem("user", JSON.stringify({ token, name }));

              dispatch({ type: LOGIN, payload: token });

              router.push("/home");
            } catch (error) {
              console.error("Error de inicio de sesión:", error);
              setisOpen(true)
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
            >
              <StyledInputLabel
                htmlFor="outlined-adornment-email-login"
                style={{ color: "black" }}
              >
                Correo Electrónico
              </StyledInputLabel>
              <StyledFormControl error={Boolean(touched.email && errors.email)}>
                <StyledInput
                  id="outlined-adornment-email-login"
                  type="email"
                  placeholder="Ingresá tu email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                  label="Email"
                />
              </StyledFormControl>
              {touched.email && errors.email && (
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
                      {touched.email && errors.email && <li>{errors.email}</li>}
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
                          dispatch({ type: "SET_REMEMBER_ME", payload: e.target.checked });
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
            </form>
          )}
        </Formik>
        <NotificationModal
                isOpen={isOpen}
                level="error"
                title="No hemos podido identificarte"
                body="Ingresaste mal tu usuario o contraseña. Por favor revisa los mismos y vuelve a intentar."
                labelOnClick="VOLVER A INTENTAR"
                setClose={setisOpen}
            />
      </Box>
     
    </FormContainer>
  );
};

export default LoginFormContainer;
