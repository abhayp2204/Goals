import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css";
import Cards from './Cards'

function Home() {
    const [span, setSpan] = useState('day')
    return (
        <div className='home'>
            <div className='dmy-tab-container'>
                <div className='dmy' onClick={() => setSpan('day')}>Day</div>
                <div className='dmy' onClick={() => setSpan('month')}>Month</div>
                <div className='dmy' onClick={() => setSpan('year')}>Year</div>
            </div>

            <div className='cards'>
                <Cards type={span}/>
            </div>
        </div>
    )
}

export default Home