import React from "react";
import { Button, Tooltip } from "@mui/material";
import UploadPic from "../UploadPic";

// Navigation component to handle navigation between sections and image upload
const Navigation = ({ scrollToSection, handleEdit, setImage }) => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>

      {/* Button to scroll to Personal Details section */}
      <Tooltip title="Go to Personal Details" arrow>
        <button
          className="nav-button"
          onClick={() => scrollToSection("personalDetails")}
        >
          Personal Details
        </button>
      </Tooltip>

      {/* Button to scroll to Physical Attributes section */}
      <Tooltip title="Go to Physical Attributes" arrow>
        <button
          className="nav-button"
          onClick={() => scrollToSection("physicalAttributes")}
        >
          Physical Attributes
        </button>
      </Tooltip>

      {/* Button to scroll to Style Preferences section */}
      <Tooltip title="Go to Style Preferences" arrow>
        <button
          className="nav-button"
          onClick={() => scrollToSection("stylePreferences")}
        >
          Style Preferences
        </button>
      </Tooltip>

      {/* Button to scroll to Color Season section */}
      <Tooltip title="Go to Color Season" arrow>
        <button
          className="nav-button"
          onClick={() => scrollToSection("colorSeason")}
        >
          Color Analysis
        </button>
      </Tooltip>

      {/* Button to initiate edit action */}
      <Tooltip title="Edit your details" arrow>
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
      </Tooltip>

      {/* Component to handle image upload */}
      <UploadPic setImage={setImage} />
    </div>
  );
};

export default Navigation;
