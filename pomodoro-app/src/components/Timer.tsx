import React, { useState, useEffect } from 'react';
import CircularProgressBar from './CircularProgressBar';

const Timer = () => {
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);
  const [percentage, setPercentage] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
        setPercentage((prevPercentage) =>
        prevPercentage < 100 ? prevPercentage + 0.027 : 100
      );
      if (minutes <= 59) {
        if (seconds <= 59) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(0);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="Timer">
      <CircularProgressBar radius={100} strokeWidth={10} minutes={minutes} seconds={seconds} percentage={percentage} />
    </div>
  );
};

export default Timer;