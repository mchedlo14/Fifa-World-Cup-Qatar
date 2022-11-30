import React, { useEffect } from 'react'
import LiveMatches from './components/LiveMatches'
import TodayMatches from './components/TodayMatches'
import './App.css'
import Header from './components/Header'



const App = () => {
  

  return (
    <div className='main-wrapper'>
      <Header />
      {/* <div className='project-name'>
        <h1>Fifa World Cup Qatar 2022</h1>
      </div> */}
      <TodayMatches />
    </div>
  )
}

export default App