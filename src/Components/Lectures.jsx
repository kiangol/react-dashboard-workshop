import React from 'react';
import Widget from './Widget';


const list = [
  '08:15-10:00 - IN3110 Gruppetime',
  '10:15-12:00 - IN2030',
  '12:15-14:00 - IN2040',
  '14:15-16:00 - IN3110'
];

const Lectures = () => (
  <Widget title="Mine forelesninger">
    <div className="widget">
      {
        list.map((item, index) =>
        <li key={index}>{item}</li>
        )
      }
    </div>
  </Widget>
);

export default Lectures;
