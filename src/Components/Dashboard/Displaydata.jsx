import React, { useContext, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { multiStepContext } from "../StepContext";
import Navigation from "./DashboardComponents/Navigation";
import PersonalDetails from "./DashboardComponents/PersonalDetails";
import PhysicalAttributes from "./DashboardComponents/PhysicalAttributes";
import StylePreferences from "./DashboardComponents/StylePreferences";
import ColorSeason from "./DashboardComponents/ColorSeason";
import "./DisplayData.css";

// Function to generate random colors
const getRandomColors = (num) => {
  const colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return colors;
};

// Main component to display user data
const DisplayData = () => {
  const { finalData, setStep, setUserData } = useContext(multiStepContext);
  const [image, setImage] = useState(finalData.image || null);

  // References to different sections
  const personalDetailsRef = useRef(null);
  const physicalAttributesRef = useRef(null);
  const stylePreferencesRef = useRef(null);
  const colorSeasonRef = useRef(null);

  // Function to scroll to specific sections
  const scrollToSection = (section) => {
    switch (section) {
      case "personalDetails":
        personalDetailsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "physicalAttributes":
        physicalAttributesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "stylePreferences":
        stylePreferencesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "colorSeason":
        colorSeasonRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // Function to handle edit action
  const handleEdit = () => {
    setUserData(finalData); // Load the finalData back to userData for editing
    setStep(1);
  };

  // Generate random colors
  const randomColors = getRandomColors(5);

  return (
    <Grid container className="dashboard-container">
      {/* Navigation component */}
      <Grid item xs={12} md={3}>
        <Navigation
          scrollToSection={scrollToSection}
          handleEdit={handleEdit}
          setImage={setImage}
        />
      </Grid>

      {/* Main content section */}
      <Grid item xs={12} md={9} className="main-content">
        <h1 className="Title-display">Hello, {finalData.firstname} !!</h1>

        {/* Display uploaded image if available */}
        {image && (
          <div className="uploaded-image-container">
            <img src={image} alt="Uploaded" className="uploaded-image" />
          </div>
        )}

        {/* Display different sections of user data */}
        <PersonalDetails data={finalData} ref={personalDetailsRef} />
        <PhysicalAttributes data={finalData} ref={physicalAttributesRef} />
        <StylePreferences data={finalData} ref={stylePreferencesRef} />
        <ColorSeason data={finalData} ref={colorSeasonRef} />
      </Grid>
    </Grid>
  );
};

export default DisplayData;
