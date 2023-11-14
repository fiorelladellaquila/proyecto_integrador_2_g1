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
        onSubmit={async (values) => {
          try {
            const response = await axios.post('https://run.mocky.io/v3/bbad14ad-42a4-4c85-854b-cd185451c37f', {
              email: `${values.email}`,
              password: `${values.password}`,
            });
            const token = response.data.result.accessToken
            if (token) {
              dispatch(login(token));
              const decodedToken: { [key: string]: any } = jwtDecode(token);

              console.log('decoded', decodedToken);
      
              if (typeof decodedToken === 'object' && 'email' in decodedToken) {
                console.log('entraaaa')
                if (decodedToken.email === values.email) {
                  return '200'
                  // router.push('/home');
              
                } else {
                  console.error('Los datos del usuario no coinciden con el token JWT');
                }
              } else {
                console.error('El token JWT no contiene una propiedad "email" válida');
              }
            } else {
              console.error('No se recibió un token JWT en la respuesta');
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
              <StyledFormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      name="rememberMe"
                      color="primary"
                      style={{ marginLeft: '3rem', color: "white" }}
                    />
                  }
                  label="Recuérdame"
                  style={{ color: 'white' }}
                />
              </StyledFormControl>
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
            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
              <Text style={{ color: 'white' }}>
                <a href="#" style={{ color: 'white' }}>¿Olvidaste tu contraseña?</a>
              </Text>
            </Box>

            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
              <Text style={{ color: 'white', marginBottom: '1rem' }}>
                <span style={{ fontSize: '14px' }}>¿No tienes cuenta?</span> <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Regístrate</a>
              </Text>
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

export default LoginFormContainer;
