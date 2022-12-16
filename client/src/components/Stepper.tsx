import { FC } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepButton,
} from '@mui/material';

import { StepperProps } from '../utils/interfaces/stepperProps';
import { styles } from './styles';

const steps = [
  'Step one',
  'Step two',
  'Submit',
];

export const CustomStepper: FC<StepperProps> = ({
  activeStep, setActiveStep,
}) => {
  const handleStep = (step: number): ReturnType<any> => {
    setActiveStep(step);
  };

  return (
    <Box sx={styles.stepperContainer}>
      <Stepper nonLinear activeStep={activeStep}>
        {
            steps.map((label, index) => (
              <Step key={label} active={index === activeStep}>
                <StepButton color="inherit" onClick={() => handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))
          }
      </Stepper>
    </Box>
  );
};
