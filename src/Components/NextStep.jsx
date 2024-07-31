import React, { useContext } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { multiStepContext } from "./StepContext";
import FirstStep from "./FormSteps/FirstStep/FirstStep";
import SecondStep from "./FormSteps/SecondStep/SecondStep";
import ThirdStep from "./FormSteps/ThirdStep/ThirdStep";
import Title from "./Title";

// Component to manage the multi-step form navigation
const NextStep = () => {
  const { currentStep } = useContext(multiStepContext);

  // Function to render the current step component based on the current step number
  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <NextStep step={currentStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Title />
      <div className="centre-stepper">
        <Stepper
          style={{ width: "18%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {renderStep(currentStep)}
    </div>
  );
};

export default NextStep;
