import React from 'react';
import './App.css';
import Lectures from './Components/Lectures';
import Assignments from './Components/Assignments';

const App = () => {
  return (
    <div>
      <h1 className="header">
        Kians dashboard
      </h1>
      <div className="dashboardRow">
        <Lectures />
        {/* <Assignments /> */}
      </div>
    </div>
  );
};

export default App;
