import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css'; // Import your CSS file

const Dashboard = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(/assets/dashboard-image.avif)', // Reference the image from public/assets
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Full viewport height
    width: '100%', // Full width
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Optional: Set text color to ensure it's visible over the image
    textAlign: 'center' // Optional: Center align the text
  };

  return (
    <div style={backgroundImageStyle}>
      <Outlet /> {/* Renders nested routes */}
      <h1 className="headingStyle">Welcome to <span className="highlight">H&Modelling</span></h1>
    </div>
  );
};

export default Dashboard;
