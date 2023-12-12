import React, { useState } from "react";
import { Formik } from "formik";
import { FormHelperText, Box, InputAdornment, IconButton } from "@mui/material";
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
} from "./restorePasswordFormContainer.style";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { restorePassword } from "@/services/restorePassword";
import NotificationModal from "../modal/NotificationModal";

const RestorePasswordFormContainer: React.FC<any> = ({ code, email }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setisOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("code", code);
  console.log("email", email);

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
            password: "",
            confirmPassword: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
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
              const response = await restorePassword(
                code,
                email,
                values.password
              );
              console.log("response", response);
              setisOpen(true);
            } catch (error) {
              console.error(
                "Error en el restablecimiento de contraseña:",
                error
              );
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
                    Enviar
                  </StyledButton>
                </ButtonContainer>
              </Box>
              <NotificationModal
                isOpen={isOpen}
                level="success"
                title="Se restauró su contraseña exitosamente"
                body="Tu registración se ha realizado con exito. Por favor, inicia sesion para continuar"
                labelOnClick="Iniciar Sesión"
                setClose={setisOpen}
              />
            </form>
          )}
        </Formik>
      </Box>
    </FormContainer>
  );
};

export default RestorePasswordFormContainer;
