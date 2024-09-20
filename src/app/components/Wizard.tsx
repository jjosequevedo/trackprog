import * as React from 'react';
import * as Yup from 'yup';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import TrainingOneForm from './forms/TrainingOneForm';
import TrainingTwoForm from './forms/TrainingTwoForm';
import { Form, Formik } from 'formik';

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

      // Validation schemas for each step
  const validationSchemas = [
    Yup.object(),
    Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    Yup.object(),
    Yup.object(),
  ];

    const initialValues = {};

    const submitTraining = () => { };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas}
                onSubmit={submitTraining}>
                {() => (
                    <Form>
                        {currentCmp(activeStep)}
                    </Form>
                )}
            </Formik>
            {
                activeStep > 0
                && activeStep < steps.length - 1
                && <Button variant='contained' endIcon={<Send />} onClick={nextStep}>Continue</Button>
            }
        </Box>
    );
};

export default Wizard;
