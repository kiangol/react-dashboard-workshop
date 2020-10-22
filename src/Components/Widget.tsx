import React from 'react';


const Widget: React.FC<{title: String}> = ({ title, children}) => (
  <div className="widget">
    <h2>{title}</h2>
    {children}
  </div>
)

export default Widget;
