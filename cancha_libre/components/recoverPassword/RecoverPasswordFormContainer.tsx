import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import {
  FormHelperText,
  Box,
} from '@mui/material';
import * as Yup from 'yup';
import {
  FormContainer,
  StyledFormControl,
  StyledInputLabel,
  StyledInput,
  ButtonContainer,
  StyledButton,
  Text,
  StyledValidationMessages,
} from './recoverPasswordFormContainer.style';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
import {jwtDecode} from 'jwt-decode';
import { useRouter } from 'next/router';

const RecoverPasswordFormContainer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <FormContainer>
      <Box sx={{ width: '100%' }}>
      <Formik
        initialValues={{
          email: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Debe ser un email valido').max(255).required('El email es requerido'),
        })}
        onSubmit={async (values) => {
          try {
            const response = await axios.post('https://run.mocky.io/v3/bbad14ad-42a4-4c85-854b-cd185451c37f', {
              email: `${values.email}`,
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

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent:"center", padding:'1.5rem 0 0 0' }}>
            <ButtonContainer>
              <StyledButton  size="large" type="submit" variant="contained">
                Enviar
              </StyledButton>
            </ButtonContainer>
            </Box>
            <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
              <Text style={{ color: 'white',  marginBottom: '1rem' }}>
                <a style={{  alignItems: "center",  color: 'black',}}>Si pasados 10 minutos aún no te llegó el mail, por las dudas revisá la papelera o la carpeta spam.</a>
              </Text>
            </Box>
          </form>
        )}
      </Formik>
      </Box>
    </FormContainer>
  );
};

export default RecoverPasswordFormContainer;

