// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     setSelectedScenario(scenarioId);
//     axios.get(`http://localhost:5000/vehicles?scenarioId=${scenarioId}`)
//       .then(response => setVehicles(response.data))
//       .catch(error => console.error(error));
//   };

//   const startSimulation = () => {
//     setIsSimulationRunning(true);
//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const containerWidth = document.querySelector('.simulation-container').offsetWidth;
//           const containerHeight = document.querySelector('.simulation-container').offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
      
//       // Stop the simulation after 10 seconds
//       setTimeout(() => {
//         clearInterval(intervalId);
//         setIsSimulationRunning(false);
//       }, 10000);
//     }, 100);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
//       <div className="simulation-container">
//         {vehicles.map(vehicle => (
//           <div 
//             key={vehicle.id} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.left}px`, top: `${vehicle.top}px` }}
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//   };

//   const startSimulation = () => {
//     setIsSimulationRunning(true);
//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100);

//     // Stop the simulation after 10 seconds
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, 10000);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
//       <div className="simulation-container">
//         {vehicles.map(vehicle => (
//           <div 
//             key={vehicle.id} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.left}px`, top: `${vehicle.top}px` }}
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);
 
//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//   };

//   const startSimulation = () => {
//     setIsSimulationRunning(true);
//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100);

//     // Stop the simulation after 10 seconds
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, 10000);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
//       <div className="simulation-container">
//       {vehicles.map(vehicle => (
//   <div 
//     key={vehicle.id} 
//     className={`vehicle ${vehicle.direction}`} 
//     style={{ left: `${vehicle.initialPosX}px`, top: `${vehicle.initialPosY}px` }} // Update the style here
//   >
//     {vehicle.name}
//   </div>
// ))}

//       </div>
//     </div>
//   );
// };

// export default HomePage;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//   };

//   const startSimulation = () => {
//     setIsSimulationRunning(true);
//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100);

//     // Stop the simulation after 10 seconds
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, 10000);
//   };

//   const deleteVehicle = async (vehicleId) => {
//     try {
//       await axios.delete(`http://localhost:5000/scenarios/${vehicleId}`);
//       setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle.id !== vehicleId));
//     } catch (error) {
//       console.error(error);
//     }
//   };



//   const editVehicle = (vehicleId) => {
//     // Logic for editing vehicle information
//     console.log(`Editing vehicle with ID ${vehicleId}`);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
      
//       {/* Table to display vehicle data */}
//       <table>
//         <thead>
//           <tr>
//             <th>Vehicle ID</th>
//             <th>Name</th>
//             <th>Position X</th>
//             <th>Position Y</th>
//             <th>Speed</th>
//             <th>Direction</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map(vehicle => (
//             <tr key={vehicle.id}>
//               <td>{vehicle.id}</td>
//               <td>{vehicle.name}</td>
//               <td>{vehicle.initialPosX}</td>
//               <td>{vehicle.initialPosY}</td>
//               <td>{vehicle.speed}</td>
//               <td>{vehicle.direction}</td>
//               <td><button onClick={() => editVehicle(vehicle.id)}>Edit</button></td>
//               <td><button onClick={() => deleteVehicle(vehicle.id)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div className="simulation-container">
//         {/* Render vehicles for simulation */}
//         {vehicles.map(vehicle => (
//           <div 
//             key={vehicle.id} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.initialPosX}px`, top: `${vehicle.initialPosY}px` }} // Update the style here
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default HomePage;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//   };

//   const startSimulation = () => {
//     if (!selectedScenario) return;

//     setIsSimulationRunning(true);

//     const scenarioTime = parseInt(selectedScenario.time, 10);
//     const intervalDuration = scenarioTime * 1000; // Convert time to milliseconds

//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100); // Use a shorter interval for smoother animation

//     // Stop the simulation after scenario time
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, intervalDuration);
//   };

//   const deleteVehicle = async (vehicleId) => {
//     try {
//       await axios.get(`http://localhost:5000/scenarios.${vehicleId}`)
//       setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle.id !== vehicleId));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const editVehicle = (vehicleId) => {
//     // Logic for editing vehicle information
//     console.log(`Editing vehicle with ID ${vehicleId}`);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
      
//       {/* Table to display vehicle data */}
//       <table>
//         <thead>
//           <tr>
//             <th>Vehicle ID</th>
//             <th>Name</th>
//             <th>Position X</th>
//             <th>Position Y</th>
//             <th>Speed</th>
//             <th>Direction</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map((vehicle, index) => (
//             <tr key={index + 1}>
//               <td>{index + 1}</td> {/* Use index + 1 as vehicle ID */}
//               <td>{vehicle.name}</td>
//               <td>{vehicle.initialPosX}</td>
//               <td>{vehicle.initialPosY}</td>
//               <td>{vehicle.speed}</td>
//               <td>{vehicle.direction}</td>
//               <td><button onClick={() => editVehicle(index + 1)}>Edit</button></td>
//               <td><button onClick={() => deleteVehicle(index + 1)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div className="simulation-container">
//         {/* Render vehicles for simulation */}
//         {vehicles.map(vehicle => (
//           <div 
//             key={vehicle.id} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.initialPosX}px`, top: `${vehicle.initialPosY}px` }} // Update the style here
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//   };

//   const startSimulation = () => {
//     if (!selectedScenario) return;

//     setIsSimulationRunning(true);

//     const scenarioTime = parseInt(selectedScenario.time, 10);
//     const intervalDuration = scenarioTime * 1000; // Convert time to milliseconds

//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100); // Use a shorter interval for smoother animation

//     // Stop the simulation after scenario time
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, intervalDuration);
//   };

//   const deleteVehicle = async (vehicleName) => {
//     try {
//       // Assuming vehicleName is unique for deletion purposes
//       const updatedVehicles = vehicles.filter(vehicle => vehicle.name !== vehicleName);
//       const updatedScenario = { ...selectedScenario, vehicles: updatedVehicles };
      
//       // Update the scenario with the removed vehicle in the backend
//       await axios.put(`http://localhost:5000/scenarios/${selectedScenario.id}`, updatedScenario);

//       // Update the local state
//       setVehicles(updatedVehicles);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const editVehicle = (vehicleName) => {
//     // Logic for editing vehicle information
//     console.log(`Editing vehicle with name ${vehicleName}`);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
      
//       {/* Table to display vehicle data */}
//       <table>
//         <thead>
//           <tr>
//             <th>Vehicle ID</th>
//             <th>Name</th>
//             <th>Position X</th>
//             <th>Position Y</th>
//             <th>Speed</th>
//             <th>Direction</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map((vehicle, index) => (
//             <tr key={index + 1}>
//               <td>{index + 1}</td> {/* Use index + 1 as vehicle ID */}
//               <td>{vehicle.name}</td>
//               <td>{vehicle.initialPosX}</td>
//               <td>{vehicle.initialPosY}</td>
//               <td>{vehicle.speed}</td>
//               <td>{vehicle.direction}</td>
//               <td><button onClick={() => editVehicle(vehicle.name)}>Edit</button></td>
//               <td><button onClick={() => deleteVehicle(vehicle.name)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div className="simulation-container">
//         {/* Render vehicles for simulation */}
//         {vehicles.map((vehicle, index) => (
//           <div 
//             key={index + 1} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.initialPosX}px`, top: `${vehicle.initialPosY}px` }} // Update the style here
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;




















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//     setIsSimulationRunning(false);
//   };

//   const startSimulation = () => {
//     if (!selectedScenario) return;

//     setIsSimulationRunning(true);

//     const scenarioTime = parseInt(selectedScenario.time, 10);
//     const intervalDuration = scenarioTime * 1000; // Convert time to milliseconds

//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100); // Use a shorter interval for smoother animation

//     // Stop the simulation after scenario time
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, intervalDuration);
//   };

//   const deleteVehicle = async (vehicleId) => {
//     try {
//       // Assuming vehicleId is unique for deletion purposes
//       const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== vehicleId);
//       const updatedScenario = { ...selectedScenario, vehicles: updatedVehicles };
      
//       // Update the scenario with the removed vehicle in the backend
//       await axios.put(`http://localhost:5000/scenarios/${selectedScenario.id}`, updatedScenario);

//       // Update the local state
//       setVehicles(updatedVehicles);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const editVehicle = (vehicleId) => {
//     // Logic for editing vehicle information
//     console.log(`Editing vehicle with ID ${vehicleId}`);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
      
//       {/* Table to display vehicle data */}
//       <table>
//         <thead>
//           <tr>
//             <th>Vehicle ID</th>
//             <th>Name</th>
//             <th>Position X</th>
//             <th>Position Y</th>
//             <th>Speed</th>
//             <th>Direction</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map((vehicle) => (
//             <tr key={vehicle.id}>
//               <td>{vehicle.id}</td>
//               <td>{vehicle.name}</td>
//               <td>{vehicle.initialPosX}</td>
//               <td>{vehicle.initialPosY}</td>
//               <td>{vehicle.speed}</td>
//               <td>{vehicle.direction}</td>
//               <td><button onClick={() => editVehicle(vehicle.id)}>Edit</button></td>
//               <td><button onClick={() => deleteVehicle(vehicle.id)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
      
      
//       <div className="simulation-container">
//         {/* Render vehicles for simulation */}
//         {isSimulationRunning && vehicles.map(vehicle => (
//           <div 
//             key={vehicle.id} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.initialPosX}px`, top: `${vehicle.initialPosY}px` }} // Update the style here
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css'; // Assuming you have the styles for the components

// const HomePage = () => {
//   const [scenarios, setScenarios] = useState([]);
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  
//     const [animationDuration, setAnimationDuration] = useState(5); // Default animation duration in seconds
  

//   useEffect(() => {
//     axios.get('http://localhost:5000/scenarios')
//       .then(response => setScenarios(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleScenarioChange = (e) => {
//     const scenarioId = e.target.value;
//     const scenario = scenarios.find(s => s.id === scenarioId);
//     setSelectedScenario(scenario);
//     setVehicles(scenario ? scenario.vehicles : []);
//   };

//   const startSimulation = () => {
//     if (!selectedScenario) return;

//     setIsSimulationRunning(true);

//     const scenarioTime = parseInt(selectedScenario.time, 10);
//     const intervalDuration = scenarioTime * 1000; // Convert time to milliseconds

//     const intervalId = setInterval(() => {
//       setVehicles((prevVehicles) => 
//         prevVehicles.map((vehicle) => {
//           let { left, top } = vehicle;
//           switch (vehicle.direction) {

            
//             case 'Towards':
//               left += vehicle.speed;
//               break;
//             case 'Backwards':
//               left -= vehicle.speed;
//               break;
//             case 'Upwards':
//               top -= vehicle.speed;
//               break;
//             case 'Downwards':
//               top += vehicle.speed;
//               break;
//             default:
//               break;
//           }

//           // Check if vehicle is going outside the container
//           const container = document.querySelector('.simulation-container');
//           const containerWidth = container.offsetWidth;
//           const containerHeight = container.offsetHeight;
//           if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
//             // Hide the vehicle by setting its position outside the container
//             left = -100;
//             top = -100;
//           }

//           return { ...vehicle, left, top };
//         })
//       );
//     }, 100); // Use a shorter interval for smoother animation

//     // Stop the simulation after scenario time
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setIsSimulationRunning(false);
//     }, intervalDuration);
//   };

//   const deleteVehicle = async (vehicleName) => {
//     try {
//       // Assuming vehicleName is unique for deletion purposes
//       const updatedVehicles = vehicles.filter(vehicle => vehicle.name !== vehicleName);
//       const updatedScenario = { ...selectedScenario, vehicles: updatedVehicles };
      
//       // Update the scenario with the removed vehicle in the backend
//       await axios.put(`http://localhost:5000/scenarios/${selectedScenario.id}`, updatedScenario);

//       // Update the local state
//       setVehicles(updatedVehicles);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const editVehicle = (vehicleName) => {
//     // Logic for editing vehicle information
//     console.log(`Editing vehicle with name ${vehicleName}`);
//   };
  
//   return (
//     <div>
//       <style>
//   {`
//     .vehicle.Towards {
//       animation: moveTowards ${animationDuration}s linear infinite;
//     }
//   `}
// </style>
//       <h1>Home Page</h1>
//       <select onChange={handleScenarioChange}>
//         <option value="">Select Scenario</option>
//         {scenarios.map(scenario => (
//           <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
//         ))}
//       </select>
//       <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
//       {/* onChange={(e) => setAnimationDuration(parseInt(e.target.value))} */}
//       {/* Table to display vehicle data */}
//       <label>
//         Animation Duration (seconds):
        
//       </label>
//       <table>
//         <thead>
//           <tr>
//             <th>Vehicle ID</th>
//             <th>Name</th>
//             <th>Position X</th>
//             <th>Position Y</th>
//             <th>Speed </th>
//             <th>Direction</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map((vehicle, index) => (
//             <tr key={index + 1}>
//               <td>{index + 1}</td> {/* Use index + 1 as vehicle ID */}
//               <td>{vehicle.name}</td>
//               <td>{vehicle.initialPosX}</td>
//               <td>{vehicle.initialPosY}</td>
//               <td>{vehicle.speed} </td>
//               <td>{vehicle.direction}</td>
//               <td><button onClick={() => editVehicle(vehicle.name)}>Edit</button></td>
//               <td><button onClick={() => deleteVehicle(vehicle.name)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       {/* Render vehicles for simulation */}
//       <div className="simulation-container">
//         {isSimulationRunning && vehicles.map((vehicle, index) => (
//           <div 
//             key={index + 1} 
//             className={`vehicle ${vehicle.direction}`} 
//             style={{ left: `${vehicle.initialPosX}px`, top: `${vehicle.initialPosY}px` ,   animationDuration: `${10 / vehicle.speed}s`

//           }} // Update the style here
//           >
//             {vehicle.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css'; // Assuming you have the styles for the components

const HomePage = () => {
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(5); // Default animation duration in seconds

  useEffect(() => {
    axios.get('http://localhost:5000/scenarios')
      .then(response => setScenarios(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleScenarioChange = (e) => {
    const scenarioId = e.target.value;
    const scenario = scenarios.find(s => s.id === scenarioId);
    setSelectedScenario(scenario);
    setVehicles(scenario ? scenario.vehicles : []);
  };

  const startSimulation = () => {
    if (!selectedScenario) return;

    setIsSimulationRunning(true);

    const scenarioTime = parseInt(selectedScenario.time, 10);
    const intervalDuration = scenarioTime * 1000; // Convert time to milliseconds

    const intervalId = setInterval(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => {
          let { left, top } = vehicle;
          switch (vehicle.direction) {
            case 'Towards':
              left += vehicle.speed;
              break;
            case 'Backwards':
              left -= vehicle.speed;
              break;
            case 'Upwards':
              top -= vehicle.speed;
              break;
            case 'Downwards':
              top += vehicle.speed;
              break;
            default:
              break;
          }

          // Check if vehicle is going outside the container
          const container = document.querySelector('.simulation-container');
          const containerWidth = container.offsetWidth;
          const containerHeight = container.offsetHeight;
          if (left < 0 || left > containerWidth || top < 0 || top > containerHeight) {
            // Hide the vehicle by setting its position outside the container
            left = -100;
            top = -100;
          }

          return { ...vehicle, left, top };
        })
      );
    }, 100); // Use a shorter interval for smoother animation

    // Stop the simulation after scenario time
    setTimeout(() => {
      clearInterval(intervalId);
      setIsSimulationRunning(false);
    }, intervalDuration);
  };

  const deleteVehicle = async (vehicleId) => {
    try {
      // Assuming vehicleName is unique for deletion purposes
      const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== vehicleId);
      const updatedScenario = { ...selectedScenario, vehicles: updatedVehicles };

      // Update the scenario with the removed vehicle in the backend
      await axios.put(`http://localhost:5000/scenarios/${selectedScenario.id}`, updatedScenario);

      // Update the local state
      setVehicles(updatedVehicles);
    } catch (error) {
      console.error(error);
    }
  };

  const editVehicle = (vehicleName) => {
    // Logic for editing vehicle information
    console.log(`Editing vehicle with name ${vehicleName}`);
  };

  return (
    <div>
      <style>
        {`
          .vehicle.Towards {
            animation: moveTowards ${animationDuration}s linear infinite;
          }
          .vehicle.Backwards {
            animation: moveBackwards ${animationDuration}s linear infinite;
          }
          .vehicle.Upwards {
            animation: moveUpwards ${animationDuration}s linear infinite;
          }
          .vehicle.Downwards {
            animation: moveDownwards ${animationDuration}s linear infinite;
          }
        `}
      </style>
      <h1>Home Page</h1>
      <select onChange={handleScenarioChange}>
        <option value="">Select Scenario</option>
        {scenarios.map(scenario => (
          <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
        ))}
      </select>
      <button onClick={startSimulation} disabled={!selectedScenario || isSimulationRunning}>Start Simulation</button>
     
      <table>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Name</th>
            <th>Position X</th>
            <th>Position Y</th>
            <th>Speed</th>
            <th>Direction</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td> {/* Use index + 1 as vehicle ID */}
              <td>{vehicle.name}</td>
              <td>{vehicle.initialPosX}</td>
              <td>{vehicle.initialPosY}</td>
              <td>{vehicle.speed}</td>
              <td>{vehicle.direction}</td>
              <td><button onClick={() => editVehicle(vehicle.name)}>Edit</button></td>
              <td><button onClick={() => deleteVehicle(vehicle.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="simulation-container">
        {isSimulationRunning && vehicles.map((vehicle, index) => (
          <div
            key={index + 1}
            className={`vehicle ${vehicle.direction}`}
            style={{
              left: `${vehicle.initialPosX}px`,
              top: `${vehicle.initialPosY}px`,
              animationDuration: `${10/ vehicle.speed}s` // Adjust animation duration inversely proportional to speed
            }}
          >
            {vehicle.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
