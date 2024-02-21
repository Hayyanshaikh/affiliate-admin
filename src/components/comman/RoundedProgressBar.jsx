import React, {useState, useEffect} from 'react';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RoundedProgressBar = ({ progress,text, color,trail, backgroundColor }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(progress)
  }, [setPercentage])
  return (
    <CircularProgressbar
      value={percentage}
      styles={buildStyles({
          textSize: '20px',
          pathTransitionDuration: 1,
          pathColor: color,
          textColor: text,
          trailColor: `${color}22`,
        })}
      text={`${percentage}%`}
      maxValue={100}
    />
  );
};

export default RoundedProgressBar;
