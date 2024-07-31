import React from "react";
import { Typography, Divider, Box } from "@mui/material";

// Component to display the title and subtitle of the form
const Title = () => {
  return (
    <Box textAlign="center" my={4}>
      <Typography variant="h2" component="h1" gutterBottom>
        Personalised Form
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Please fill out the form to get personalized recommendations.
      </Typography>
      <Divider variant="middle" />
    </Box>
  );
};

export default Title;
