// src/components/ScenarioList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ScenarioList = () => {
  const [scenarios, setScenarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/scenarios')
      .then(response => setScenarios(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddVehicle = (scenarioId) => {
    navigate(`/add-vehicle?scenarioId=${scenarioId}`);
  };

  const handleEditScenario = (scenarioId) => {
    navigate(`/edit-Scenario?scenarioId=${scenarioId}`);
  };

  const handleDeleteScenario = (scenarioId) => {
    axios.delete(`http://localhost:5000/scenarios/${scenarioId}`)
      .then(() => {
        setScenarios(scenarios.filter(scenario => scenario.id !== scenarioId));
        alert('Scenario deleted successfully!');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>All Scenarios</h1>
      <table>
        <thead>
          <tr>
            <th>Scenario ID</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map(scenario => (
            <tr key={scenario.id}>
              <td>{scenario.id}</td>
              <td>{scenario.name}</td>
              <td>{scenario.time}</td>
              <td>{scenario.vehicles ? scenario.vehicles.length : 0}</td>

              <td>
                <button onClick={() => handleAddVehicle(scenario.id)}>Add Vehicle</button>
                <button onClick={() => handleEditScenario(scenario.id)}>Edit</button>
                <button onClick={() => handleDeleteScenario(scenario.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScenarioList;
