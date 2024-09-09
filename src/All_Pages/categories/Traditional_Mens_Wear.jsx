import React, { useState, useEffect } from 'react';
import '../../App.css'; // Import your CSS file
import mensWearImages from './mens_wear_images.json'; // Import image data from JSON

const Traditional_Mens_Wear = () => {
  // State to hold the list of images
  const [images, setImages] = useState([]);
  // State to handle errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to load images
    const fetchImages = () => {
      try {
        // Map through the array of image data and construct the full URL for each image
        const imagesWithUrls = mensWearImages.map((image) => {
          // Construct the URL based on the public directory
          // Ensure the path is correct relative to the public directory
          const imgSrc = `/assets/${image.url}`;
          return { ...image, url: imgSrc }; // Return image object with the new URL
        });
        setImages(imagesWithUrls); // Update the state with the list of images
      } catch (error) {
        // Handle any errors that occur during the image loading process
        console.error('Error loading images:', error);
        setError('Failed to load images.'); // Set error state to display an error message
      }
    };

    fetchImages(); // Call the function to load images
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  return (
    <div>
      <h1>Men's Wear</h1>
      {/* Display an error message if there was an issue loading the images */}
      {error && <p>{error}</p>}
      {/* Container for the image gallery */}
      <div className="image-gallery">
        {/* Check if images are still loading */}
        {images.length === 0 ? (
          <p>Loading images...</p> // Display loading message
        ) : (
          // Display images in a grid
          images.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.url} alt={image.alt} className="image" /> {/* Render each image */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Traditional_Mens_Wear;
