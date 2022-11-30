import React, { useEffect, useState } from 'react'
import '../assets/LiveMatches.css'
const LiveMatches = () => {
    const [liveMatches,setLiveMatches] = useState({})

    const getLiveMatches = async () => {
        const res = await fetch(`https://worldcupjson.net/matches/current`)
        const data = await res.json()
        console.log(data)
    }

    useEffect(() => {
        getLiveMatches()
    },[])
  return (
    <div>
        <div className='live-matches-title-box'>
            <h2>Live Matches</h2>
        </div>

        <div className='live-matches-wrapper'>
            {
                Object.keys(liveMatches).length < 1 ? <div className='no-match-box'><p>There's no live matches</p></div>
                :
                <>live match</>
            }
        </div>
    </div>
  )
}

export default LiveMatches