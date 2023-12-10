import styled from "styled-components";
import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  width: 35rem;
  height: 70vh;
`;

export const Logo = styled.img``;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledInputLabel = styled(InputLabel)`
  margin: 0rem 3rem;
  color: black;
`;

export const StyledInput = styled(OutlinedInput)`
  margin: 0.6rem 3rem;
  background-color: #fbfcfc;
`;

export const ButtonContainer = styled.div`
  // margin: 1.5rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  background-color: #00cc00 !important;
  color: white;
`;

export const Text = styled.div`
  font-size: 1rem;
  color: white;
  font-family: sans-serif;
`;

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
`;
