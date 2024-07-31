import React from "react";
import { Slider, Typography, Tooltip } from "@mui/material";

// Component for height slider input with tooltip and error handling
const HeightSlider = ({ value, onChange, error }) => (
  <Tooltip title="Select your height in centimeters" placement="top">
    <div>
      <Typography gutterBottom>Height (cm)</Typography>
      <Slider
        color="red"
        value={value || 0} // Default to 100 if no value is provided
        onChange={onChange}
        aria-labelledby="height-slider"
        valueLabelDisplay="auto"
        step={1}
        min={100}
        max={250}
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

export default HeightSlider;
