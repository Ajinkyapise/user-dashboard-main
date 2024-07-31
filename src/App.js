import React, { useContext } from "react";
import { multiStepContext } from "./Components/StepContext";
import "./App.css";
import DisplayData from "./Components/Dashboard/Displaydata";
import NextStep from "./Components/NextStep";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  return (
    <div className="App">
      {currentStep < 4 ? (
        <NextStep step={currentStep} />
      ) : (
        <DisplayData data={finalData} />
      )}
    </div>
  );
}

export default App;
