import React, { useState } from 'react';
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
import { useRouter } from 'next/router';
import { recoverPassword } from '@/services/recoverPassword';
import NotificationModal from '../modal/NotificationModal';

const RecoverPasswordFormContainer: React.FC = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);


  return (
    <FormContainer >
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
            const response = await recoverPassword(values.email);
            setisOpen(true)
          } catch (error) {
            console.error("Error en el restablecimiento de contraseña:", error);
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
      <NotificationModal
          isOpen={isOpen}
          level="success"
          title="Email enviado"
          body="Revise su casilla de correo electronico para restaurar su contraseña"
          labelOnClick="CERRAR"
          setClose={setisOpen}
        />
      </Box>
    </FormContainer>
  );
};

export default RecoverPasswordFormContainer;

