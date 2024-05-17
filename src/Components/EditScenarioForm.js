import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditScenarioForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scenarioId = new URLSearchParams(location.search).get('scenarioId');

  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (scenarioId) {
      axios.get(`http://localhost:5000/scenarios/${scenarioId}`)
        .then(response => {
          const { name, time, description } = response.data;
          setName(name);
          setTime(time);
          setDescription(description);
        })
        .catch(error => console.error(error));
    }
  }, [scenarioId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/scenarios/${scenarioId}`, {
        name,
        time,
        description
      });
      alert('Scenario updated successfully!');
      navigate('/scenarios');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Scenario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditScenarioForm;
