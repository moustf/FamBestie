import { Dispatch, SetStateAction } from 'react';

export interface StepperProps {
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>,
}
