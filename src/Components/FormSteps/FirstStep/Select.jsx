import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

// Component for select input with tooltip and error handling
const SelectWithTooltip = ({
  label,
  value,
  onChange,
  error,
  helperText,
  options,
}) => (
  <Tooltip title={`Select your ${label.toLowerCase()}`} placement="top">
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
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {/* Display helper text if there is an error */}
      {helperText && (
        <Typography color="error" variant="caption">
          {helperText}
        </Typography>
      )}
    </FormControl>
  </Tooltip>
);

export default SelectWithTooltip;
