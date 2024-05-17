
import React, { useState } from 'react';
import axios from 'axios';

const AddScenario = () => {
  const [scenario, setScenario] = useState({ name: '', time: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScenario({ ...scenario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/scenarios', scenario)
      .then(() => alert('Scenario added!'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Scenario</h1>
      <input type="text" name="name" placeholder="Scenario Name" onChange={handleChange} required />
      <input type="number" name="time" placeholder="Time" onChange={handleChange} required />
      <button type="submit">Add Scenario</button>
    </form>
  );
};

export default AddScenario;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './AddScenario.css';
// const AddScenario = () => {
//   const [scenario, setScenario] = useState({ name: '', time: '' });
//   const [time, setTime] = useState(0);
//   const [timerRunning, setTimerRunning] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setScenario({ ...scenario, [name]: value });
//   };

//   const handleTimeChange = (e) => {
//     setTime(e.target.value);
//   };

//   const startTimer = () => {
//     setTimerRunning(true);
//     const intervalId = setInterval(() => {
//       setTime(time - 1);
//       if (time <= 0) {
//         clearInterval(intervalId);
//         setTimerRunning(false);
//       }
//     }, 1000);
//   };

//   const resetTimer = () => {
//     setTime(0);
//     setTimerRunning(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/scenarios', scenario)
//       .then(() => alert('Scenario added!'))
//       .catch(error => console.error(error));
//   };

//   const goBack = () => {
//     window.history.back();
//   };

//   return (<div class="add-scenario-page">
//   <h1>Add Scenario</h1>
//   <form>
//     <input type="text" name="name" placeholder="Scenario Name" />
//     <input type="number" name="time" value={time} />
//     <div class="timer-container">
//       <button type="button" onClick={startTimer}>Start Timer</button>
//       <button type="button" onClick={resetTimer}>Reset Timer</button>
//     </div>
//     <button type="submit">Add Scenario</button>
//     <button type="button" onClick={goBack}>Go Back</button>
//   </form>
// </div>
//   );
// };

// export default AddScenario;