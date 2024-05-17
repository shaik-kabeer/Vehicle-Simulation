// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/add-scenario">Add Scenario</Link>
    <Link to="/scenarios">All Scenarios</Link>
    <Link to="/add-vehicle">Add Vehicle</Link>
    <Link to="/">Home</Link>
  </div>
);

export default Sidebar;
