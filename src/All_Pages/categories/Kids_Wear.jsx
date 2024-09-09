import React, { useState } from 'react';
import '../../App.css'; // Adjusted relative path to App.css


const Kids_Wear = () => {
  const [searchItem, setSearchItem] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState(''); // State to store the submitted value

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSubmittedSearch(searchItem); // Set the submitted search value
  };

  const handleClear = () => {
    setSearchItem(''); // Clear the search input
    setSubmittedSearch(''); // Clear the submitted search data
  };

  const backgroundImageStyle = {
    backgroundImage: 'url(/assets/kids-wear.avif)', // Reference the image from public/assets
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Full viewport height
    width: '100%', // Full width
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Optional: Set text color to ensure it's visible over the image
    textAlign: 'center', // Optional: Center align the text
    flexDirection: 'column', 
  };

  const textStyle = {
    marginTop: '20px',
    color: 'black', // Temporarily change to ensure visibility
  };

  const searchInputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    marginRight: '10px',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={textStyle}>
        <h1 className="headingStyle">Welcome to <span className="highlight">Kids Wear</span></h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={handleSearchChange}
            style={searchInputStyle}
          />
          <button type="button" className="btn btn-primary" onClick={handleClear}>Clear</button>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
          <br /><br />
        </form>
        {/* Display the search text */}
        {submittedSearch && <p>Search result: {submittedSearch}</p>}
      </div>
    </div>
  );
};

export default Kids_Wear;
