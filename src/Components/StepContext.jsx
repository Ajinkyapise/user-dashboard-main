import React, { useState } from "react";
import App from "../App";

// Creating a context for managing multi-step form data
export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1); // State to manage the current step
  const [userData, setUserData] = useState({}); // State to manage user data
  const [finalData, setFinalData] = useState({}); // State to manage final submitted data

  // Function to submit data and move to the final step
  function submitData() {
    setFinalData(userData);
    setStep(4);
  }

  return (
    <multiStepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <App />
    </multiStepContext.Provider>
  );
};

export default StepContext;
