import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import Dashboard from './All_Pages/dashboard'; // Ensure this matches your actual file name
import BasicDetails from './All_Pages/BasicDetails';
import Branches from './All_Pages/Branches';
import Address from './All_Pages/Address';
import './App.css'; 
import Kids_Wear from './All_Pages/categories/Kids_Wear'; // Ensure this matches your actual file name
import Traditional_Mens_Wear from './All_Pages/categories/Traditional_Mens_Wear'; // Ensure this matches your actual file name
import Traditional_Womens_Wear from './All_Pages/categories/Traditional_Womens_Wear'; // Ensure this matches your actual file name


const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kids-wear" element={<Kids_Wear />} />
          <Route path="/traditional-mens-wear" element={<Traditional_Mens_Wear />} /> 
          <Route path="/traditional-womens-wear" element={<Traditional_Womens_Wear />} />
          <Route path="/basicdetails" element={<BasicDetails />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
