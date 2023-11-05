import React, { useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import {
  FormHelperText,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Grid,
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';


const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const StyledFormControl = styled(FormControl)`
    margin: 20px; /* Espacio de 20px en la parte inferior */
`;

const StyledButton = styled(Button)`
  /* Estilos personalizados aquí */
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: process.env.NODE_ENV === 'development' ? 'testing2@mail.com' : 'testing@email.com',
          password: process.env.NODE_ENV === 'development' ? 'testing2' : 'testing',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Debe ser un email valido').max(255).required('El email es requerido'),
          password: Yup.string().max(255).required('La contraseña es requerida'),
        })}
        onSubmit={(values) => {
          // Lógica de autenticación aquí
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <StyledFormControl fullWidth error={Boolean(touched.email && errors.email)}>
              <InputLabel htmlFor="outlined-adornment-email-login">Dirección de correo electrónico</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </StyledFormControl>

            <StyledFormControl fullWidth error={Boolean(touched.password && errors.password)}>
              <InputLabel htmlFor="outlined-adornment-password-login">Contraseña</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
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
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
                label="Password"
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </StyledFormControl>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>{/* Lógica de "Recuérdame" aquí */}</Grid>
            </Grid>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <StyledButton color="primary" fullWidth size="large" type="submit" variant="contained">
                Iniciar sesión
              </StyledButton>
            </Box>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
