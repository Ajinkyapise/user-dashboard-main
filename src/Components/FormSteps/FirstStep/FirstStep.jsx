import React, { useContext, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { multiStepContext } from "../../StepContext";
import TextFieldWithTooltip from "./TextField";
import SliderWithTooltip from "./Slider";
import SelectWithTooltip from "./Select";
import "./../Step.css";

// First step component for collecting personal details
const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [errors, setErrors] = useState({});

  // Handle age change using the slider
  const handleAgeChange = (event, newValue) => {
    setUserData({ ...userData, age: newValue });
  };

  // Validate the input fields
  const validate = () => {
    let tempErrors = {};
    if (!userData.firstname) tempErrors.firstname = "First name is required";
    if (!userData.lastname) tempErrors.lastname = "Last name is required";
    if (!userData.age || userData.age < 18 || userData.age > 100)
      tempErrors.age = "Age must be between 18 and 100";
    if (!userData.location) tempErrors.location = "Location is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validate()) {
      setStep(2); // Proceed to the next step if validation passes
    }
  };

  return (
    <Box className="details-container">
      <Typography variant="h4" className="title">
        Personal Details
      </Typography>
      <TextFieldWithTooltip
        label="First Name"
        value={userData.firstname}
        onChange={(e) =>
          setUserData({ ...userData, firstname: e.target.value })
        }
        error={errors.firstname}
        helperText={errors.firstname}
      />
      <TextFieldWithTooltip
        label="Last Name"
        value={userData.lastname}
        onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
        error={errors.lastname}
        helperText={errors.lastname}
      />
      <SliderWithTooltip
        label="Age"
        value={userData.age}
        onChange={handleAgeChange}
        error={errors.age}
        helperText={errors.age}
        min={18}
        max={100}
      />
      <SelectWithTooltip
        label="Location"
        value={userData.location}
        onChange={(e) => setUserData({ ...userData, location: e.target.value })}
        error={errors.location}
        helperText={errors.location}
        options={["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]}
      />
      <button
        onClick={handleSubmit}
        className="submit-button"
        variant="contained"
        color="primary"
      >
        Next
      </button>
    </Box>
  );
};

export default FirstStep;
