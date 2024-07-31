import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Tooltip,
} from "@mui/material";

// Component for color select input with tooltip and error handling
const ColorSelect = ({ label, value, onChange, error, options }) => (
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
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {/* Display error message if there is an error */}
      {error && (
        <Typography color="error" variant="caption">
          {error}
        </Typography>
      )}
    </FormControl>
  </Tooltip>
);

export default ColorSelect;
