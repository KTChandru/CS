// src/ServiceCalculator.js
import React, { useState } from 'react';
import './styles.css';

function ServiceCalculator() {
const [lastServiceDate, setLastServiceDate] = useState('');
const [serviceInterval, setServiceInterval] = useState('');
const [nextServiceDate, setNextServiceDate] = useState('');

const calculateNextServiceDate = () => {
    const lastService = new Date(lastServiceDate);
    const interval = parseInt(serviceInterval, 10);

    if (!isNaN(lastService.getTime()) && !isNaN(interval)) {
    const nextService = new Date(lastService);
    nextService.setMonth(nextService.getMonth() + interval);
    setNextServiceDate(nextService.toDateString());
    } else {
    setNextServiceDate('Invalid input. Please check the dates and interval.');
    }
};

return (
    <div className="service-calculator">
    <h2>Service Calculator</h2>
    <div className="calculator-form">
        <label>
        Last Service Date:
        <input
            type="date"
            value={lastServiceDate}
            onChange={(e) => setLastServiceDate(e.target.value)}
        />
        </label>
        <label>
        Service Interval (months):
        <input
            type="number"
            value={serviceInterval}
            onChange={(e) => setServiceInterval(e.target.value)}
        />
        </label>
        <button onClick={calculateNextServiceDate}>Calculate Next Service Date</button>
    </div>
    {nextServiceDate && (
        <div className="next-service-date">
        <h3>Next Service Date:</h3>
        <p>{nextServiceDate}</p>
        </div>
    )}
    </div>
);
}

export default ServiceCalculator;