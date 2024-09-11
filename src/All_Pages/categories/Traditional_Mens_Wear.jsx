import React, { useState, useEffect } from 'react';
import '../../App.css'; // Import your CSS file
import mensWearImages from './mens_wear_images.json'; // Import image data from JSON

const Traditional_Mens_Wear = () => {
<<<<<<< HEAD
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = () => {
      try {
        const imagesWithUrls = mensWearImages.map((image) => {
          const imgSrc = `/assets/${image.url}`;
          return { ...image, url: imgSrc };
        });
        setImages(imagesWithUrls);
      } catch (error) {
        console.error('Error loading images:', error);
        setError('Failed to load images.');
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image, e) => {
    if (e.detail === 2) {
      setSelectedImage(null); // Exit fullscreen on double-click
    } else {
      setSelectedImage(image); // Set the clicked image as the selected image
    }
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null); // Clear the selected image to exit fullscreen
  };
=======
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
>>>>>>> origin/master

  return (
    <div>
      <h1>Men's Wear</h1>
<<<<<<< HEAD
      {error && <p>{error}</p>}
      <div className="image-gallery">
        {images.length === 0 ? (
          <p>Loading images...</p>
        ) : (
          images.map((image) => (
            <div
              key={image.id}
              className={`image-card ${selectedImage === image ? 'selected' : ''}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="image"
                onClick={(e) => handleImageClick(image, e)}
              />
=======
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
>>>>>>> origin/master
            </div>
          ))
        )}
      </div>
<<<<<<< HEAD
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="fullscreen-image"
          />
        </div>
      )}
=======
>>>>>>> origin/master
    </div>
  );
};

export default Traditional_Mens_Wear;
