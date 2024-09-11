import React, { useState, useEffect } from 'react';
import '../../App.css';
import womensWearImages from './womens_wear_images.json';

const Traditional_womens_Wear = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = () => {
      try {
        const imagesWithUrls = womensWearImages.map((image) => {
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
    // Check if it's a double click
    if (e.detail === 2) {
      setSelectedImage(null); // Exit fullscreen on double-click
    } else {
      setSelectedImage(image); // Set the clicked image as the selected image
    }
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null); // Clear the selected image to exit fullscreen
  };

  return (
    <div>
      <h1>Women's Wear</h1>
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
            </div>
          ))
        )}
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="fullscreen"
          />
        </div>
      )}
    </div>
  );
};

export default Traditional_womens_Wear;
