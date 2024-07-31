import React from "react";
import { TextField } from "@mui/material";

// Component for text field input with error handling
const TextFieldWithError = ({ label, value, onChange, error, helperText }) => (
  <TextField
    className="field"
    label={label}
    value={value || ""}
    onChange={onChange}
    variant="outlined"
    fullWidth
    margin="normal"
    error={!!error}
    helperText={helperText}
  />
);

export default TextFieldWithError;
