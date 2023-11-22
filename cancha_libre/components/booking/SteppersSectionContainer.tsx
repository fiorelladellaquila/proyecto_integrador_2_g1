import React, { FC } from 'react';
import { Box, Paper } from "@mui/material";
import CheckShiftStepperContainer from './CheckShiftStepperContainer';
import Calendar from './ShiftStepperContainer';


interface Props {
    activeStep: number;
    result: any;
    handleBack: () => void;
    handleNext: () => void;
}

const SteppersSectionContainer: FC<Props> = ({ result, activeStep, handleBack, handleNext }) => {
    
    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <Calendar handleNext={handleNext}/>;
            case 1:
                return <CheckShiftStepperContainer handleBack={handleBack} handleNext={handleNext} />;
            case 2:
                return <h1>holaaaaaa</h1>;
            default:
                throw new Error("Paso no válido");
        }
    };

    return (
        <Box sx={{ width: "80%", alignSelf: "center", marginTop: "2rem" }}>
            <Paper elevation={8} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
                {renderStepContent(activeStep)}
            </Paper>
        </Box>
    );
}

export default SteppersSectionContainer;
