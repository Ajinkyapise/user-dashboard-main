import React from "react";
import { Slider, Typography, Tooltip } from "@mui/material";

// Component for weight slider input with tooltip and error handling
const WeightSlider = ({ value, onChange, error }) => (
  <Tooltip title="Select your weight in kilograms" placement="top">
    <div>
      <Typography gutterBottom>Weight (kg)</Typography>
      <Slider
        color="red"
        value={value || 30} // Default to 30 if no value is provided
        onChange={onChange}
        aria-labelledby="weight-slider"
        valueLabelDisplay="auto"
        step={1}
        min={30}
        max={150}
        className="slider"
        style={{ width: "100%" }}
        error={!!error}
      />
      {/* Display error message if there is an error */}
      {error && (
        <Typography color="error" variant="caption">
          {error}
        </Typography>
      )}
    </div>
  </Tooltip>
);

export default WeightSlider;
