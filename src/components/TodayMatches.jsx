import React, { useEffect, useState,CSSProperties  } from 'react'
import '../assets/TodayMatches.css'
import ClipLoader from "react-spinners/ClipLoader";



const TodayMatches = () => {
    const [matches,setMatches] = useState({})
    const [loading, setLoading] = useState(true);

    const getTodayMatches = async () => {
        const res = await fetch(`https://worldcupjson.net/matches/today`)
        const data = await res.json()
        setMatches(data)
    }

    useEffect(() => {
        getTodayMatches()
    },[])


  return (
    <div className='today-matches-main-wrapper'>
        <div className='today-matches-title-box'>
            <h2>Today's  Matches</h2>
        </div>

        <div className='matches-table-box'>
            {
                Object.keys(matches).length > 0 ? (
                    matches.map(item => {
                        return <div className='match-box'>
                        <div className='teams-box'>
                            <h3>{item.home_team.name}</h3>
                            <h3>{item.away_team.name}</h3>
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
                ):
                <div className='loader-box'>
                    <ClipLoader
                        loading={loading}
                        color='#fff'
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            }
        </div>
    </div>
  )
}

export default TodayMatches