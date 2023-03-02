import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SignIn from '../components/SignIn'



export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(1)
  const steps = [
    <SignIn setActiveStep={setActiveStep}/>,
    'Select master blaster campaign settings',
  ];
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}