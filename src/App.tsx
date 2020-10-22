import React from 'react';
import './App.css';
import Lectures from './Components/Lectures';
import Widget from './Components/Widget'
import Assignments from './Components/Assignments';
import YesNo from './Components/YesNo'

const App = () => {
  return (
    <div>
      <h1 className="header">
        Kians dashboard
      </h1>
      <div className="dashboardRow">
        <Lectures />
        <Assignments />
        <YesNo />
      </div>
    </div>
  );
};

export default App;
