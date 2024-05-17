import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddVehicle = () => {
  const [vehicle, setVehicle] = useState({
    name: '', initialPosX: '', initialPosY: '', speed: '', direction: ''
  });
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/scenarios')
      .then(response => setScenarios(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleScenarioChange = (e) => {
    setSelectedScenario(e.target.value);
  };

  const validatePosition = (position) => {
    const pos = parseInt(position, 10);
    return pos >= 0 && pos <= 800;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePosition(vehicle.initialPosX) || !validatePosition(vehicle.initialPosY)) {
      alert('Position values must be between 0 and 800');
      return;
    }


    
    const vehicleWithId = { ...vehicle, id: uuidv4() };

    axios.get(`http://localhost:5000/scenarios/${selectedScenario}`)
      .then(response => {
        const scenario = response.data;
        const updatedVehicles = scenario.vehicles ? [...scenario.vehicles, vehicleWithId] : [vehicleWithId];

        return axios.patch(`http://localhost:5000/scenarios/${selectedScenario}`, { vehicles: updatedVehicles });
      })
      .then(() => alert('Vehicle added!'))
      .catch(error => console.error(error));
  };

  const handleReset = () => {
    setVehicle({ name: '', initialPosX: '', initialPosY: '', speed: '', direction: '' });
    setSelectedScenario('');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Vehicle</h1>
      <select onChange={handleScenarioChange} value={selectedScenario} required>
        <option value="">Select Scenario</option>
        {scenarios.map(scenario => (
          <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
        ))}
      </select>
      <input
        type="text"
        name="name"
        placeholder="Vehicle Name"
        onChange={handleChange}
        value={vehicle.name}
        required
      />
      <input
        type="number"
        name="initialPosX"
        placeholder="Initial Position X (0-800)"
        onChange={handleChange}
        value={vehicle.initialPosX}
        required
      />
      <input
        type="number"
        name="initialPosY"
        placeholder="Initial Position Y (0-800)"
        onChange={handleChange}
        value={vehicle.initialPosY}
        required
      />
      <input
        type="number"
        name="speed"
        placeholder="Speed"
        onChange={handleChange}
        value={vehicle.speed}
        required
      />
      <select
        name="direction"
        onChange={handleChange}
        value={vehicle.direction}
        required
      >
        <option value="">Direction</option>
        <option value="Towards">Towards</option>
        <option value="Backwards">Backwards</option>
        <option value="Upwards">Upwards</option>
        <option value="Downwards">Downwards</option>
      </select>
      <button type="submit">Add</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="button" onClick={handleGoBack}>Go Back</button>
    </form>
  );
};

export default AddVehicle;
