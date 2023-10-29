import React, { useState, useEffect } from 'react'
import CircularProgressBar from './CircularProgressBar'

interface TimerProps {
  time: number,
  reset: boolean
}

const Timer: React.FC<TimerProps> = ({
  time,
  reset
}) => {
  const [minutes, setMinutes] = useState(time)
  const [seconds, setSeconds] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && minutes === 0 && seconds === 0) {
      setIsRunning(false);
    }

    if (isRunning) {
        const interval = setInterval(() => {
            setPercentage((prevPercentage) =>
            prevPercentage < 100 ? prevPercentage + ((1 / (time * 60)) * 100) : 100
          );
          if (minutes > 0) {
            if (seconds > 0) {
              setSeconds((prevSeconds) => prevSeconds - 1);
            } else {
              setMinutes((prevMinutes) => prevMinutes - 1);
              setSeconds(59);
            }
          } else {
            clearInterval(interval);
          }
        }, 1000)
        

        return () => clearInterval(interval)
      }
    }, [minutes, seconds, isRunning])

    const handleStartPauseClick = () => {
      setIsRunning(!isRunning);
    };

  useEffect(() => {
    if (reset) {
      setMinutes(time);
      setSeconds(0);
      setPercentage(0);
    }
  }, [reset, time]);

  return (
    <div className="TimerContainer">
      <div className="Timer">
        <CircularProgressBar radius={200} strokeWidth={25} minutes={minutes} seconds={seconds} percentage={percentage} />
        <button onClick={handleStartPauseClick}>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>
      </div>
    </div>
  )
}

export default Timer;