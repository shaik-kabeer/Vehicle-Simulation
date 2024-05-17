import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import ScenarioList from './Components/ScenarioList';
import AddScenario from './Components/AddScenario';
import AddVehicle from './Components/AddVehicle';
import HomePage from './Components/HomePage';
import EditScenarioForm from './Components/EditScenarioForm';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/add-scenario" element={<AddScenario />} />
          <Route path="/scenarios" element={<ScenarioList />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/edit-Scenario" element={<EditScenarioForm/>} />
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
