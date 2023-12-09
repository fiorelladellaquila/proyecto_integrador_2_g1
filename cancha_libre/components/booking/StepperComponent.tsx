import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useForm } from "react-hook-form";
import SteppersSectionContainer from "../booking/SteppersSectionContainer";
import { SteppersProvider } from "../booking/context/SteppersContext";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/redux/store";

const steps = ["Reservá tu cancha", "Resumen de la reserva", "Datos del pago"];

interface Props {
  result: any;
}

export default function HorizontalLinearStepper({ result }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const methods = useForm();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignCenter: "center",
        backgroundColor:'#555659'
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel style={{margin: '5rem 1rem 1rem 1rem'}}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <SteppersProvider>
      {/* <Provider store={store}> */}
      <SteppersSectionContainer
          activeStep={activeStep}
          result={result}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      {/* </Provider>, */}
       
      </SteppersProvider>
    </Box>
  );
}
