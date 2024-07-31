import React from "react";
import "./UploadPic.css";

// Component to handle image upload
const UploadPic = ({ setImage }) => {
  // Function to handle the image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image using the result from FileReader
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="upload-pic">
      <h1>Upload a Picture</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload} // Trigger handleImageUpload on file change
      />
    </div>
  );
};

export default UploadPic;
