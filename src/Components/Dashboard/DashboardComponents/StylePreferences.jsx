import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// Component to display style preferences
const StylePreferences = React.forwardRef(({ data }, ref) => (
  <Card className="card-section" ref={ref}>
    <CardContent>
      <Typography variant="h5" component="div">
        Style Preferences
      </Typography>

      {/* Display Body Type */}
      <p>
        <strong>Body Type:</strong>{" "}
        <span>{data.bodyType ? data.bodyType : "N/A"}</span>
      </p>

      {/* Display Clothing Preferences */}
      <p>
        <strong>Clothing Preferences:</strong>{" "}
        <span>{data.clothingPref ? data.clothingPref : "N/A"}</span>
      </p>

      {/* Display Favorite Retailers */}
      <p>
        <strong>Favorite Retailers:</strong>{" "}
        <span>{data.retailers ? data.retailers : "N/A"}</span>
      </p>
    </CardContent>
  </Card>
));

export default StylePreferences;
