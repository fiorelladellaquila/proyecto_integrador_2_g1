import React, { FC } from 'react';
import { Box, Paper } from "@mui/material";
import CheckShiftStepperContainer from './CheckShiftStepperContainer';
import Calendar from './ShiftStepperContainer';
import CheckoutStepperContainer from './CheckoutStepperContainer';
import { useRouter } from 'next/router';


interface Props {
    activeStep: number;
    result: any;
    handleBack: () => void;
    handleNext: () => void;
}

const SteppersSectionContainer: FC<Props> = ({ result, activeStep, handleBack, handleNext }) => {
    const router = useRouter();
    
    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <Calendar handleBack={handleCustomBack} handleNext={handleNext}/>;
            case 1:
                return <CheckShiftStepperContainer handleBack={handleBack} handleNext={handleNext} />;
            case 2:
                return <CheckoutStepperContainer handleBack={handleBack} handleNext={handleNext} />;
                
            default:
                throw new Error("Paso no válido");
        }
    };

    const handleCustomBack = () => {
        if (activeStep === 0) {
            router.push('/home');
        } else {
            handleBack();
        }
    };

    return (
        <Box sx={{ width: "80%", alignSelf: "center", marginTop: "1rem" }}>
            <Paper elevation={8} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3, background: '#787B81' }}>
                {renderStepContent(activeStep)}
            </Paper>
        </Box>
    );
}

export default SteppersSectionContainer;
