import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

// Function to generate an array of 5 random colors
const generateRandomColors = () => {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return colors;
};

// React component to display and generate color palettes
const ColorSeason = React.forwardRef(({ data }, ref) => {
  const [randomColors, setRandomColors] = useState([]);

  // Function to handle the click event for generating random colors
  const handleSubmit = () => {
    setRandomColors(generateRandomColors());
  };

  return (
    <Card className="card-section" ref={ref}>
      <CardContent>
        <Typography variant="h5" component="div">
          Color Analysis
        </Typography>
        <p>
          <strong>Recommended Color Palettes:</strong>
        </p>

        <button
          className="color-button"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Generate Color Palette
        </button>

        <div className="color-palette">
          {randomColors.length > 0 ? (
            randomColors.map((color, index) => (
              <span
                key={index}
                className="color-swatch-square"
                style={{ backgroundColor: color }}
              ></span>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              Click the button to generate a random color palette.
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

export default ColorSeason;
