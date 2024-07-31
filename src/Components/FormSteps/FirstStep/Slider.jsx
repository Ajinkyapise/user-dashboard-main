import React from "react";
import { Slider, Typography, Tooltip } from "@mui/material";
import "./../Step.css";

// Component for slider input with tooltip and error handling
const SliderWithTooltip = ({
  label,
  value,
  onChange,
  error,
  helperText,
  min,
  max,
}) => (
  <Tooltip title={`Select your ${label.toLowerCase()}`} placement="top">
    <div>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        className="slider"
        value={value || min}
        onChange={onChange}
        aria-labelledby={`${label.toLowerCase()}-slider`}
        valueLabelDisplay="auto"
        step={1}
        min={min}
        max={max}
        error={!!error}
        color="red"
        font-size="20px"
      />
      {helperText && (
        <Typography color="error" variant="caption">
          {helperText}
        </Typography>
      )}
    </div>
  </Tooltip>
);

export default SliderWithTooltip;
