import React from 'react'
import CircularProgressBar from './CircularProgressBar'

interface TimerChoseProps {
  time: number
  onTimerChange: (newValue: number) => void;
  resestTimer: (newReset: boolean) => void;
}

const TimerChose: React.FC<TimerChoseProps> = ({
  time,
  onTimerChange,
  resestTimer
}) => {

    const handleChoseClick = () => {
        onTimerChange(time)
        resestTimer(true)
    };

  return (
    <div className="TimerChose" onClick={handleChoseClick}>
      <CircularProgressBar radius={100} strokeWidth={15} minutes={time} seconds={0} percentage={100} />
    </div>
  )
}

export default TimerChose;