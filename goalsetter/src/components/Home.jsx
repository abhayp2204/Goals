import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css";

function Home() {
    const [span, setSpan] = useState('day')
    return (
        <div className='home'>
            <Link className='linkstyle dmy' to='/day'>Day</Link>
            <Link className='linkstyle dmy' to='/month'>Month</Link>
            <Link className='linkstyle dmy' to='/year'>Year</Link>
        </div>
    )
}

export default Home