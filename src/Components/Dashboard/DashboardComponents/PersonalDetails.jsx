import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// Component to display personal details
const PersonalDetails = React.forwardRef(({ data }, ref) => (
  <Card className="card-section" ref={ref}>
    <CardContent>
      <Typography variant="h5" component="div">
        Personal Details
      </Typography>

      {/* Display First Name */}
      <p>
        <strong>First Name:</strong>{" "}
        <span>{data.firstname ? data.firstname : "N/A"}</span>
      </p>

      {/* Display Last Name */}
      <p>
        <strong>Last Name:</strong>{" "}
        <span>{data.lastname ? data.lastname : "N/A"}</span>
      </p>

      {/* Display Age */}
      <p>
        <strong>Age:</strong> <span>{data.age ? data.age : "N/A"}</span>
      </p>

      {/* Display Location */}
      <p>
        <strong>Location:</strong>{" "}
        <span>{data.location ? data.location : "N/A"}</span>
      </p>
    </CardContent>
  </Card>
));

export default PersonalDetails;
