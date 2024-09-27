import React, { useState } from 'react';

const Branches = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Location submitted: ${selectedLocation}`);
    // You can add further logic for submission here
  };

  return (
    <div>
      <h2>please select near Branch to your location</h2>
      
      
      <label htmlFor="location">Select a Location: </label>
      <select id="location" value={selectedLocation} onChange={handleLocationChange}>
        <option value="">--Choose a location--</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="vizag">Vizag</option>
        <option value="bangalore">Bangalore</option>
        <option value="chennai">Chennai</option>
      </select>

      <button 
        onClick={handleSubmit} 
        disabled={!selectedLocation} // Disable if no location is selected
        style={{ marginLeft: '10px' }}
      >
        Submit
      </button>

      {selectedLocation && <p>You selected: {selectedLocation}</p>}
    </div>
  );
};

export default Branches;
