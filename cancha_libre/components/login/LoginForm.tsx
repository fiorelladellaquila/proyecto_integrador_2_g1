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
// flex: 1;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
height: 100vh;
// padding: 0 rem;
`;

const Logo = styled.img`
  /* Estilos para el logo, como el tamaño y la posición */
`;

const StyledFormControl = styled(FormControl)`
width: 100%;
margin: 0; /* Establecer márgenes a 0 */
padding: 0; /* Establecer relleno a 0 */
`;

const StyledInputLabel = styled(InputLabel)`
margin: 0rem 3rem;

`;

const StyledInput = styled(OutlinedInput)`
    margin: 1rem 3rem;
    background-color: #FBFCFC;
`;

const ButtonContainer = styled.div`
//   margin: 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
    background-color: #566158 !important; 
    color: white;
`;

const Text = styled.div`
  font-size: 1.2rem; 
  color: white;
  font-family:sans-serif;
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
            <StyledInputLabel htmlFor="outlined-adornment-email-login">Email</StyledInputLabel>
           <StyledFormControl error={Boolean(touched.email && errors.email)}>
                
                <StyledInput
                    id="outlined-adornment-email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                    label="Email"
                />
                {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.email}
                    </FormHelperText>
                )}
            </StyledFormControl>

            <StyledInputLabel htmlFor="outlined-adornment-password-login">Contraseña</StyledInputLabel>
            <StyledFormControl fullWidth error={Boolean(touched.password && errors.password)}>
                {/* <StyledInputLabel htmlFor="outlined-adornment-password-login">Contraseña</StyledInputLabel> */}
                <StyledInput
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
            <Box sx={{ width: '80%', display: "flex", alignItems: "center", justifyContent:"center" }}>
            <ButtonContainer>
              <StyledButton fullWidth size="large" type="submit" variant="contained">
                Iniciar sesión
              </StyledButton>
            </ButtonContainer>
            </Box>
            
          </form>
        )}
      </Formik>
      </Box>
    </FormContainer>
  );
};

export default LoginForm;
