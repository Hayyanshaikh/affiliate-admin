import React, { useState, useEffect } from 'react';

const ProgressBar = ({ data, color }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    setProgressPercentage(data)
  }, [data])

  const style = {
    width: `${progressPercentage}%`,
    background: color ? color : "#003340"
  }
  return (
    <div className="progress-bar-main">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={style}></div>
      </div>
      <span>{progressPercentage}%</span>
    </div>
  );
};

export default ProgressBar;
