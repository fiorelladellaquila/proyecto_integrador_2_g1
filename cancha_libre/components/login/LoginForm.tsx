import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  Grid,
  Box,
  useTheme,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';
import {
  FormContainer,
  Logo,
  StyledFormControl,
  StyledInputLabel,
  StyledInput,
  ButtonContainer,
  StyledButton,
  Text,
  StyledValidationMessages,
} from './loginFormContainer.style';

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
      <Logo src="/logo.png" alt="Logo" width={"350px"} height={"150px"} />
      <Text>Ingresá a tu cuenta</Text>
      <Box sx={{ width: '100%' }}>
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
            <StyledInputLabel htmlFor="outlined-adornment-email-login" style={{ color: 'white' }}>Email</StyledInputLabel>
           <StyledFormControl error={Boolean(touched.email && errors.email)}>
                
                <StyledInput
                    id="outlined-adornment-email-login"
                    type="email"
                    placeholder='Ingresá tu email'
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                    label="Email"
                />
            </StyledFormControl>

            <StyledInputLabel htmlFor="outlined-adornment-password-login" style={{ color: 'white' }}>Contraseña</StyledInputLabel>
            <StyledFormControl fullWidth error={Boolean(touched.password && errors.password)}>
                <StyledInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Ingresá tu contraseña'
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
            </StyledFormControl>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>{/* Lógica de "Recuérdame" aquí */}</Grid>
            </Grid>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent:"center" }}>
            <ButtonContainer>
              <StyledButton fullWidth size="large" type="submit" variant="contained">
                Iniciar sesión
              </StyledButton>
            </ButtonContainer>
            </Box>
           
            {((touched.email && errors.email) || (touched.password && errors.password)) && (
  <Box sx={{ 
    width: '80%', 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center", 
    background: "#E6B0AA", 
    borderRadius: '8px', 
    margin: '0 auto',
  }}>
    <StyledValidationMessages>
      <ul>
        {touched.email && errors.email && (
          <li>{errors.email}</li>
        )}
        {touched.password && errors.password && (
          <li>{errors.password}</li>
        )}
      </ul>
    </StyledValidationMessages>
  </Box>
)}
           
          </form>
        )}
      </Formik>
      </Box>
    </FormContainer>
  );
};

export default LoginForm;
