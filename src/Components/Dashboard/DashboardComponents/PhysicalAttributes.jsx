import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// Component to display physical attributes
const PhysicalAttributes = React.forwardRef(({ data }, ref) => (
  <Card className="card-section" ref={ref}>
    <CardContent>
      <Typography variant="h5" component="div">
        Physical Attributes
      </Typography>

      {/* Display Height */}
      <p>
        <strong>Height:</strong>{" "}
        <span>{data.height ? data.height : "N/A"}</span>
      </p>

      {/* Display Weight */}
      <p>
        <strong>Weight:</strong>{" "}
        <span>{data.weight ? data.weight : "N/A"}</span>
      </p>

      {/* Display Skin Color with swatch */}
      <p>
        <strong>Skin Color:</strong>
        <span
          className="color-swatch"
          style={{ backgroundColor: data.skinColor }}
        ></span>
        <span>{data.skinColor ? data.skinColor : "N/A"}</span>
      </p>

      {/* Display Hair Color with swatch */}
      <p>
        <strong>Hair Color:</strong>
        <span
          className="color-swatch"
          style={{ backgroundColor: data.hairColor }}
        ></span>
        <span>{data.hairColor ? data.hairColor : "N/A"}</span>
      </p>

      {/* Display Eye Color with swatch */}
      <p>
        <strong>Eye Color:</strong>
        <span
          className="color-swatch"
          style={{ backgroundColor: data.eyeColor }}
        ></span>
        <span>{data.eyeColor ? data.eyeColor : "N/A"}</span>
      </p>
    </CardContent>
  </Card>
));

export default PhysicalAttributes;
