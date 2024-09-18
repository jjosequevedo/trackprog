import * as React from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import TrainingOneForm from './forms/TrainingOneForm';
import TrainingTwoForm from './forms/TrainingTwoForm';

const steps = [
    "Let's start!",
    'What would you like to train today?',
    'Enter weight and repetitions by set',
    'Finish today!',
];

const Wizard: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const currentCmp = (step: number) => {
        switch (step) {
            case 0: return <Button variant='contained' endIcon={<Send />} onClick={nextStep}>Start!</Button>;
            case 1: return <TrainingOneForm />;
            case 2: return <TrainingTwoForm />;
            case 3: return <Typography>Awesome! We're done for today</Typography>;
        }
    };

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {currentCmp(activeStep)}
            {
                activeStep > 0
                && activeStep < steps.length - 1
                && <Button variant='contained' endIcon={<Send />} onClick={nextStep}>Continue</Button>
            }
        </Box>
    );
};

export default Wizard;
