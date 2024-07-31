import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

// Component for select input with error handling
const SelectWithError = ({
  label,
  value,
  onChange,
  error,
  helperText,
  options,
}) => (
  <FormControl
    variant="outlined"
    className="field"
    fullWidth
    margin="normal"
    error={!!error}
  >
    <InputLabel>{label}</InputLabel>
    <Select value={value || ""} onChange={onChange} label={label}>
      {/* Render options as menu items */}
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    {/* Display helper text if there is an error */}
    {error && (
      <Typography color="error" variant="caption">
        {helperText}
      </Typography>
    )}
  </FormControl>
);

export default SelectWithError;
