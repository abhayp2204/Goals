import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Cards from './Cards';

function Home() {
  const [span, setSpan] = useState('day');

    return (
        <div className="home">
            <div className="dmy-tab-container">
                <div
                    className={`dmy ${span === 'day' ? 'active' : ''}`}
                    onClick={() => setSpan('day')}
                >
                    Day
                </div>
                <div
                    className={`dmy ${span === 'month' ? 'active' : ''}`}
                    onClick={() => setSpan('month')}
                >
                    Month
                </div>
                <div
                    className={`dmy ${span === 'year' ? 'active' : ''}`}
                    onClick={() => setSpan('year')}
                >
                    Year
                </div>
                <Link
                    className="linkstyle dmy"
                    to='/timeline'
                >
                    Timeline
                </Link>
            </div>

            <div className="cards">
                <Cards type={span} />
            </div>
        </div>
    );
}

export default Home;
