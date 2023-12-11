import React, { useState } from "react";
import { Formik } from "formik";
import { FormHelperText, IconButton, InputAdornment, Box } from "@mui/material";
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
  StyledButtonGoogle,
} from "./singUpFormContainer.style";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { amiko } from "../fonts";
import { createUser } from "@/services/createUser";
import NotificationModal from "../modal/NotificationModal";

const SignUpFormContainer: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setisOpen] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <Box sx={{ width: "100%" }}>
        <Formik
          initialValues={{
            username: "",
            fullName: "",
            email: "",
            phone: "111111",
            password: "",
            confirmPassword: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required("El nombre de usuario es requerido"),
            fullName: Yup.string()
              .max(255)
              .required("El nombre completo es requerido"),
            email: Yup.string()
              .email("Debe ser un email valido")
              .max(255)
              .required("El email es requerido"),
            password: Yup.string()
              .max(255)
              .required("La contraseña es requerida"),
            confirmPassword: Yup.string().oneOf(
              [Yup.ref("password")],
              "Las contraseñas deben coincidir"
            ),
          })}
          onSubmit={async (values) => {
            try {
              const response = await createUser(
                values.fullName,
                values.email,
                values.username,
                values.phone,
                values.password
              );
              setisOpen(true);
            } catch (error) {
              console.error("Error en Registracion de Usuario:", error);
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
                htmlFor="outlined-adornment-username-login"
                style={{ color: "black" }}
              >
                Nombre de usuario
              </StyledInputLabel>
              <StyledFormControl
                error={Boolean(touched.username && errors.username)}
              >
                <StyledInput
                  id="outlined-adornment-username-login"
                  type="text"
                  placeholder="Ingresá tu nombre de usuario"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                  label="Nombre de usuario"
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
                      {touched.username && errors.username && (
                        <li>{errors.username}</li>
                      )}
                    </ul>
                  </StyledValidationMessages>
                </Box>
              )}
              <StyledInputLabel
                htmlFor="outlined-adornment-fullName-login"
                style={{ color: "black" }}
              >
                Nombre y apellido
              </StyledInputLabel>
              <StyledFormControl
                error={Boolean(touched.fullName && errors.fullName)}
              >
                <StyledInput
                  id="outlined-adornment-fullName-login"
                  type="text"
                  placeholder="Ingresá tu nombre completo"
                  value={values.fullName}
                  name="fullName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                  label="Nombre Completo"
                />
              </StyledFormControl>
              {touched.fullName && errors.fullName && (
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
                  <StyledValidationMessages style={{ fontFamily: `${amiko}` }}>
                    <ul>
                      {touched.fullName && errors.fullName && (
                        <li>{errors.fullName}</li>
                      )}
                    </ul>
                  </StyledValidationMessages>
                </Box>
              )}

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
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
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

              <StyledInputLabel
                htmlFor="outlined-adornment-confirmPassword-login"
                style={{ color: "black" }}
              >
                Confirmar Contraseña
              </StyledInputLabel>
              <StyledFormControl
                fullWidth
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
              >
                <StyledInput
                  id="outlined-adornment-confirmPassword-login"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirmá tu contraseña"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="medium"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                  label="Confirmar Contraseña"
                />
              </StyledFormControl>
              {touched.confirmPassword && errors.confirmPassword && (
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
                      {touched.confirmPassword && errors.confirmPassword && (
                        <li>{errors.confirmPassword}</li>
                      )}
                    </ul>
                  </StyledValidationMessages>
                </Box>
              )}

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
                    Crear Cuenta
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
                <NextLink href="/auth/login" passHref>
                  <Text style={{ color: "white", marginBottom: "1rem" }}>
                    <a href="login" style={{ color: "black" }}>
                      ¿Ya tenés tu cuenta? Iniciá sesión acá
                    </a>
                  </Text>
                </NextLink>
              </Box>
            </form>
          )}
        </Formik>
        <NotificationModal
          isOpen={isOpen}
          level="success"
          title="Registracion exitosa"
          body="Tu registración se ha realizado con exito. Por favor, inicia sesion para continuar"
          labelOnClick="CERRAR"
          setClose={setisOpen}
        />
      </Box>
    </FormContainer>
  );
};

export default SignUpFormContainer;
