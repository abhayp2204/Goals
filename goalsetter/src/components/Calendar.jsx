import React from 'react';
import '../css/Calendar.css'

const CalendarPopup = ({ selectedDate, setSelectedDate, closeCalendar }) => {
    // Helper function to generate an array of years for the dropdown
    const getYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        years.push(i);
        }
        return years;
    };

    // Helper function to generate an array of months for the dropdown
    const getMonths = () => {
        const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months;
    };

    // Helper function to generate an array of days for the dropdown
    const getDays = () => {
        const days = [];
        for (let i = 1; i <= 31; i++) {
        days.push(i);
        }
        return days;
    };

    // Event handler for when a date is selected
    const handleDateChange = () => {
        // Get the selected values from the dropdowns
        const selectedYear = parseInt(document.getElementById('year').value, 10);
        const selectedMonth = document.getElementById('month').value;
        const selectedDay = parseInt(document.getElementById('day').value, 10);

        // Create a new Date object with the selected values
        const newDate = new Date(selectedYear, getMonths().indexOf(selectedMonth), selectedDay);

        // Update the selectedDate state
        setSelectedDate(newDate);

        // Close the calendar
        closeCalendar();
    };

    return (
        <div className="calendar-popup">
            <div className='calendar-title'>Calendar</div>

            <div className='calendar-date'>

                <select className='cc' id="day">
                    {getDays().map(day => (
                        <option key={day} value={day}>
                        {day}
                    </option>
                    ))}
                </select>

                <select className='cc' id="month">
                    {getMonths().map(month => (
                        <option key={month} value={month}>
                        {month}
                    </option>
                    ))}
                </select>

                <select className='cc' id="year">
                    {getYears().map(year => (
                        <option key={year} value={year}>
                        {year}
                    </option>
                    ))}
                </select>
            </div>

            <button className='calendar-select' onClick={handleDateChange}>Select</button>
        </div>
    );
};

export default CalendarPopup;
