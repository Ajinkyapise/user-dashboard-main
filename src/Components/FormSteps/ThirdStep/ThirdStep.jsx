import React, { useContext, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { multiStepContext } from "../../StepContext";
import SelectWithError from "./SelectThird";
import TextFieldWithError from "./TextFieldThird";

// Third step component for collecting additional information
const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  const [errors, setErrors] = useState({});

  // Validate the input fields
  const validate = () => {
    let tempErrors = {};
    if (!userData.bodyType) tempErrors.bodyType = "Body type is required";
    if (!userData.clothingPref)
      tempErrors.clothingPref = "Clothing preferences are required";
    if (!userData.retailers)
      tempErrors.retailers = "Favourite retailers are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validate()) {
      submitData(); // Submit data if validation passes
    }
  };

  return (
    <Box className="details-container">
      <Typography variant="h4" className="title">
        Additional Information
      </Typography>
      <SelectWithError
        label="Body Type"
        value={userData.bodyType}
        onChange={(e) => setUserData({ ...userData, bodyType: e.target.value })}
        error={errors.bodyType}
        helperText={errors.bodyType}
        options={[
          { value: "Slim", label: "Slim" },
          { value: "Average", label: "Average" },
          { value: "Athletic", label: "Athletic" },
          { value: "Heavy", label: "Heavy" },
        ]}
      />
      <TextFieldWithError
        label="Clothing Preferences"
        value={userData.clothingPref}
        onChange={(e) =>
          setUserData({ ...userData, clothingPref: e.target.value })
        }
        error={errors.clothingPref}
        helperText={errors.clothingPref}
      />
      <TextFieldWithError
        label="Favourite Retailers"
        value={userData.retailers}
        onChange={(e) =>
          setUserData({ ...userData, retailers: e.target.value })
        }
        error={errors.retailers}
        helperText={errors.retailers}
      />
      <button
        onClick={handleSubmit}
        className="submit-button"
        variant="contained"
        color="primary"
      >
        Submit
      </button>
      <button
        onClick={() => setStep(2)}
        className="submit-button"
        variant="contained"
      >
        Back
      </button>
    </Box>
  );
};

export default ThirdStep;
