import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/Header.css'

const Header = () => {
    const router = useNavigate()
  return (
    <div className='header-wrapper'>
        <h1 onClick={() => router('/')}>Fifa World Cup Qatar 2022</h1>
        
        <ul>
            <li onClick={() => router('/live')}>Live Matches</li>
            <li>Groups</li>
        </ul>
    </div>
  )
}

export default Header