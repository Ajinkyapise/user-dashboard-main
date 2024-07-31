import React from "react";
import { TextField, Tooltip } from "@mui/material";

// Component for text field input with tooltip and error handling
const TextFieldWithTooltip = ({
  label,
  value,
  onChange,
  error,
  helperText,
}) => (
  <Tooltip title={`Enter your ${label.toLowerCase()}`} placement="top">
    <TextField
      className="field"
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
      error={!!error}
      helperText={helperText}
    />
  </Tooltip>
);

export default TextFieldWithTooltip;
