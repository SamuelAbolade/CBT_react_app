import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SignIn from "../components/SignIn";
import Instructions from "../components/Instructions";

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = ["Instructions", "Sign In"];
  return (
    <Box sx={{ width: "100%" }} className="mt-5">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <strong>{label}</strong>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep == 2 && <SignIn />}
      {activeStep == 1 && <Instructions setActiveStep={setActiveStep} />}
    </Box>
  );
}
