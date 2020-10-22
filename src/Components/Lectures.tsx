import React from 'react';
import Widget from '../Components/Widget';

const Lectures = () => {
  const lectures: string[] = ['08:15-10:00 - IN3110 Gruppetime',
  '10:15-12:00 - IN2030',
  '12:15-14:00 - IN2040',
  '14:15-16:00 - IN3110'];
  return (
    <Widget
      title='Mine forelesninger'
    >
      <ul>
        {lectures.map((lecture: string) => <li key={lecture}>{lecture}</li>)}
      </ul>
    </Widget>
  )
};
export default Lectures;
