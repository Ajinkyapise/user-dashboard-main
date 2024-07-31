import React, { useContext, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { multiStepContext } from "../../StepContext";
import HeightSlider from "./HeightSlider";
import WeightSlider from "./WeightSlider";
import ColorSelect from "./ColorSelect";

// Second step component for collecting physical attributes
const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [errors, setErrors] = useState({});

  // Handle height change using the slider
  const handleHeightChange = (event, newValue) => {
    setUserData({ ...userData, height: newValue });
  };

  // Handle weight change using the slider
  const handleWeightChange = (event, newValue) => {
    setUserData({ ...userData, weight: newValue });
  };

  // Validate the input fields
  const validate = () => {
    let tempErrors = {};
    if (!userData.height || userData.height < 100 || userData.height > 250)
      tempErrors.height = "Height must be between 100 and 250 cm";
    if (!userData.weight || userData.weight < 30 || userData.weight > 150)
      tempErrors.weight = "Weight must be between 30 and 150 kg";
    if (!userData.skinColor) tempErrors.skinColor = "Skin color is required";
    if (!userData.hairColor) tempErrors.hairColor = "Hair color is required";
    if (!userData.eyeColor) tempErrors.eyeColor = "Eye color is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validate()) {
      setStep(3); // Proceed to the next step if validation passes
    }
  };

  return (
    <Box className="details-container">
      <Typography variant="h4" className="title">
        Physical Attributes
      </Typography>
      <HeightSlider
        value={userData.height}
        onChange={handleHeightChange}
        error={errors.height}
      />
      <WeightSlider
        value={userData.weight}
        onChange={handleWeightChange}
        error={errors.weight}
      />
      <ColorSelect
        label="Skin Color"
        value={userData.skinColor}
        onChange={(e) =>
          setUserData({ ...userData, skinColor: e.target.value })
        }
        error={errors.skinColor}
        options={[
          { value: "PapayaWhip", label: "Fair" },
          { value: "Moccasin", label: "Medium" },
          { value: "Olive", label: "Olive" },
          { value: "Brown", label: "Brown" },
          { value: "Black", label: "Black" },
        ]}
      />
      <ColorSelect
        label="Hair Color"
        value={userData.hairColor}
        onChange={(e) =>
          setUserData({ ...userData, hairColor: e.target.value })
        }
        error={errors.hairColor}
        options={[
          { value: "Black", label: "Black" },
          { value: "Brown", label: "Brown" },
          { value: "Moccasin", label: "Blonde" },
          { value: "Red", label: "Red" },
          { value: "Gray", label: "Gray" },
        ]}
      />
      <ColorSelect
        label="Eye Color"
        value={userData.eyeColor}
        onChange={(e) => setUserData({ ...userData, eyeColor: e.target.value })}
        error={errors.eyeColor}
        options={[
          { value: "Brown", label: "Brown" },
          { value: "Blue", label: "Blue" },
          { value: "Green", label: "Green" },
          { value: "Red", label: "Red" },
          { value: "Gray", label: "Gray" },
        ]}
      />
      <button
        onClick={handleSubmit}
        className="submit-button"
        variant="contained"
        color="primary"
      >
        Next
      </button>
      <button
        onClick={() => setStep(1)}
        className="submit-button"
        variant="contained"
      >
        Back
      </button>
    </Box>
  );
};

export default SecondStep;
