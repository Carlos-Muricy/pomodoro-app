import React from 'react'
import '../Style/CircularProgressBar.css'

interface CircularProgressBarProps {
  percentage: number
  radius: number
  strokeWidth: number
  minutes: number
  seconds: number
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  radius,
  strokeWidth,
  minutes,
  seconds
}) => {
  const normalizedRadius = radius - strokeWidth
  const circumference = 2 * Math.PI * normalizedRadius
  const offset = circumference - (percentage / 100) * circumference

  function numberFormater(seconds: number) {
    if (seconds < 10) {
      return "0" + seconds;
    } else {
      return seconds.toString()
    }
  }

  var secondsFormater = numberFormater(seconds)

  return (
    <svg className="circular-progress" width={radius * 2} height={radius * 2}>
      <circle
        className="circular-progress-background"
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="circular-progress-foreground"
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        strokeWidth={strokeWidth}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: offset,
        }}
      />
      <text x={radius} y={radius} className="circular-progress-text">
        {minutes}:{secondsFormater}
      </text>
    </svg>
  )
}

export default CircularProgressBar