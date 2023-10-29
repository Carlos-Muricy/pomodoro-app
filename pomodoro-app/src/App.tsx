import React, { useState } from 'react'
import './Style/App.css'
import Timer from './components/Timer'
import TimerChose from './components/TimerChose'

function App() {
  const [timerValue, setTimerValue] = useState(60);
  const [resetValue, setResetValue] = useState(false);

  const handleTimerChange = (newValue: number) => {
    setTimerValue(newValue)
  }

  const handleTimerReset = (newReset: boolean) => {
    setResetValue(newReset)
  }

  return (
    <>
      <header className='header'>
       <div className='logo'/>
       <div className='menu'>
        <div className='contact'>Contato</div>
        <div className='theme'>Tema</div>
       </div>
      </header>
      <main>
        <div className='main-pomodoro'>
          <div> Adicionar Tarefa</div>
          <Timer time={timerValue} reset={resetValue}/>
        </div>
        <div className='chose-pomodoro'>
          <TimerChose time={60} onTimerChange={handleTimerChange} resestTimer={handleTimerReset}/>
          <TimerChose time={45} onTimerChange={handleTimerChange} resestTimer={handleTimerReset}/>
          <TimerChose time={30} onTimerChange={handleTimerChange} resestTimer={handleTimerReset}/>
          <TimerChose time={25} onTimerChange={handleTimerChange} resestTimer={handleTimerReset}/>
        </div>
        <div/>
      </main>
    </>
  )
}

export default App
