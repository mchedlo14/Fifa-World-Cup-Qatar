import React, { useEffect, useState } from 'react'
import '../assets/LiveMatches.css'
import Header from './Header'
const LiveMatches = () => {
    const [liveMatches,setLiveMatches] = useState({})

    


    const getLiveMatches = async () => {
        const res = await fetch(`https://worldcupjson.net/matches/current`)
        const data = await res.json()
        console.log(data)
        setLiveMatches(data)
    }

    useEffect(() => {
        getLiveMatches()
    },[])
  return (
    <>
    <Header />
    <div style={{'width':'100%',"height":"100vh",'background':'black'}}>
        <div className='live-matches-title-box'>
            <h2>Live Matches</h2>
        </div>

        <div className='live-matches-wrapper'>
            {
                Object.keys(liveMatches).length === 0 ? <div className='no-match-box'><p>There's no live matches</p></div>
                :
                liveMatches.map(item => {
                    return <div className='match-box'>
                    <div className='teams-box'>
                        <div className='score-wrapper'>
                            <h3>{item.home_team.name}</h3>
                            <p>{item.home_team.goals}</p>
                        </div>
                        <div  className='score-wrapper'>
                            <h3>{item.away_team.name}</h3>
                            <p>{item.home_team.goals}</p>
                        </div>
                    </div>
    
                    <div className='location-wrapper'>
                        <p>{item.location}</p>
                    </div>
    
                    <div className='stadium-wrapper'>
                        <p>{item.venue}</p>
                    </div>

                    <div className='reffere-wrapper'>
                        <p>Reffere {item.officials[0].name}</p>
                    </div>
                </div>
                })
            }
        </div>
    </div>
    </>
  )
}

export default LiveMatches