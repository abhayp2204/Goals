import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Cards from './Cards';
import Calendar from './Calendar';

function Home() {
    const [span, setSpan] = useState('day')
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    }
    

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
                <div
                    className="dmy"
                    onClick={toggleCalendar}
                >
                    Calendar
                </div>
            </div>

            <h1>{date.getDate()} / {1 + date.getMonth()} / {date.getFullYear()}</h1>
            {showCalendar && (
                <Calendar
                    selectedDate={date}
                    setSelectedDate={setDate}
                    closeCalendar={toggleCalendar}
                />
            )}
            <div>
                {console.log(date.getYear())}
            </div>





            <div className="cards">
                <Cards type={span} />
            </div>
        </div>
    );
}

export default Home;
