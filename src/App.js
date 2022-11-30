import React, { useEffect } from 'react'
import LiveMatches from './components/LiveMatches'
import TodayMatches from './components/TodayMatches'
import './App.css'



const App = () => {

  return (
    <div className='main-wrapper'>
      <div className='project-name'>
        <h1>Fifa World Cup Qatar 2022</h1>
      </div>
      <TodayMatches />
      <LiveMatches />
    </div>
  )
}

export default App