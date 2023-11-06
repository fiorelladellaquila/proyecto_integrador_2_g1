import styled from 'styled-components'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from '@mui/material'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Logo = styled.img``

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin: 0;
  padding: 0;
`

export const StyledInputLabel = styled(InputLabel)`
  margin: 0rem 3rem;
  color: white;
`

export const StyledInput = styled(OutlinedInput)`
  margin: 1rem 3rem;
  background-color: #FBFCFC;
`

export const ButtonContainer = styled.div`
  margin: 1.5rem 1rem;
  width: 85%;
  display: flex;
  justify-content: center;
`

export const StyledButton = styled(Button)`
  background-color: #566158 !important;
  color: white;
`

export const Text = styled.div`
  font-size: 1.2rem;
  color: white;
  font-family: sans-serif;
`

export const StyledValidationMessages = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    list-style-type: disc;
    padding-left: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
`
