import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  Grid,
  Box,
  useTheme,
  FormControlLabel,
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
  StyledButtonGoogle,
} from './loginFormContainer.style';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
import {jwtDecode} from 'jwt-decode';
import { useRouter } from 'next/router';

const LoginFormContainer: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <Box sx={{ width: '100%' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Debe ser un email valido').max(255).required('El email es requerido'),
          password: Yup.string().max(255).required('La contraseña es requerida'),
        })}
        onSubmit={async (values) => {
          try {
            // const response = await axios.post('https://run.mocky.io/v3/bbad14ad-42a4-4c85-854b-cd185451c37f', {
            //   email: `${values.email}`,
            //   password: `${values.password}`,
            // });
            // const token = response.data.result.accessToken
            // if (token) {
            //   dispatch(login(token));
            //   const decodedToken: { [key: string]: any } = jwtDecode(token);

            //   console.log('decoded', decodedToken);
      
            //   if (typeof decodedToken === 'object' && 'email' in decodedToken) {
            //     console.log('entraaaa')
            //     if (decodedToken.email === values.email) {
            //       return '200'
            //       // router.push('/home');
              
            //     } else {
            //       console.error('Los datos del usuario no coinciden con el token JWT');
            //     }
            //   } else {
            //     console.error('El token JWT no contiene una propiedad "email" válida');
            //   }
            // } else {
            //   console.error('No se recibió un token JWT en la respuesta');
            // }

            if (values.email === 'test@mail.com' && values.password === 'test') {
              // Redirigir al usuario al template "home"
              router.push('/home');
              return;
            }
          } catch (error) {
            console.error('Error de inicio de sesión:', error);
          }
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
            <StyledInputLabel htmlFor="outlined-adornment-email-login" style={{ color: 'black' }}>Correo Electrónico</StyledInputLabel>
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
            {(touched.email && errors.email) && (
            <Box sx={{ 
              width: '80%', 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "left",
              borderRadius: '8px', 
              margin: '0 auto',
            }}>
          <StyledValidationMessages>
                  <ul>
                    {touched.email && errors.email && (
                      <li>{errors.email}</li>
                    )}
                  </ul>
          </StyledValidationMessages>
              </Box>
            )}

            <StyledInputLabel htmlFor="outlined-adornment-password-login" style={{ color: 'black' }}>Contraseña</StyledInputLabel>
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
            {(touched.password && errors.password) && (
            <Box sx={{ 
              width: '80%', 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "left", 
              borderRadius: '8px', 
              margin: '0 auto',
            }}>
          <StyledValidationMessages>
                  <ul>
                    {touched.password && errors.password && (
                      <li>{errors.password}</li>
                    )}
                  </ul>
          </StyledValidationMessages>
              </Box>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <StyledFormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      name="rememberMe"
                      color="primary"
                      style={{ marginLeft: '3rem', color: "black" }}
                    />
                  }
                  label="Recuérdame"
                  style={{ color: 'black' }}
                />
              </StyledFormControl>
            </Grid>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent:"center", padding:'1.5rem 0 0 0' }}>
            <ButtonContainer>
              <StyledButton  size="large" type="submit" variant="contained">
                Iniciar sesión
              </StyledButton>
            </ButtonContainer>
            </Box>
            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
              <Text style={{ color: 'white',  marginBottom: '1rem' }}>
                <a href="#" style={{ color: 'black',}}>¿Olvidaste tu contraseña?</a>
              </Text>
            </Box>

            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
              
            <Box style={{backgroundColor: '#0A711B', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '20rem', padding: '0.5rem 0', borderRadius: '8px', }}>
            <Text style={{ color: 'white', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '14px' }}>¿No tienes cuenta?</span>
            </Text>
              <ButtonContainer>
                <StyledButton  size="large" type="submit" variant="contained">
                  Registrate acá
                </StyledButton>
              </ButtonContainer>
            </Box>
          </Box>
            {/* <Box style={{backgroundColor: '#0A711B', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1.5rem 0'}}> */}
              <ButtonContainer>
                <StyledButtonGoogle  size="large" type="submit" variant="contained" style={{color: 'black', margin: '1rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 262" style={{margin: '0.5rem'}}><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                 Ingresá con Google
                </StyledButtonGoogle>
              </ButtonContainer>
            {/* </Box> */}           
          </form>
        )}
      </Formik>
      </Box>
    </FormContainer>
  );
};

export default LoginFormContainer;
