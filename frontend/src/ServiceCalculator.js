// src/ServiceCalculator.js
import React, { useState } from 'react';
import './styles.css';

function ServiceCalculator() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [yearOfBuying, setYearOfBuying] = useState('');
  const [totalKm, setTotalKm] = useState('');
  const [lastServiceDate, setLastServiceDate] = useState('');
  const [nextServiceDate, setNextServiceDate] = useState('');

  const calculateNextServiceDate = () => {
    const lastService = new Date(lastServiceDate);
    const intervalKm = 10000; // Example: Service every 10,000 km

    if (!isNaN(lastService.getTime()) && !isNaN(parseInt(totalKm, 10))) {
      const nextServiceKm = parseInt(totalKm, 10) + intervalKm;
      const nextServiceMonths = Math.floor(nextServiceKm / intervalKm);
      const nextService = new Date(lastService);
      nextService.setMonth(nextService.getMonth() + nextServiceMonths);
      setNextServiceDate(nextService.toDateString());
    } else {
      setNextServiceDate('Invalid input. Please check the dates and total kilometers.');
    }
  };

  return (
    <div className="service-calculator-wrapper">
      <div className="service-calculator">
        <h2>Service Calculator</h2>
        <div className="calculator-form">
          <label>
            Vehicle Number:
            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </label>
          <label>
            Vehicle Type:
            <input
              type="text"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            />
          </label>
          <label>
            Year of Buying:
            <input
              type="number"
              value={yearOfBuying}
              onChange={(e) => setYearOfBuying(e.target.value)}
            />
          </label>
          <label>
            Total Kilometers Driven:
            <input
              type="number"
              value={totalKm}
              onChange={(e) => setTotalKm(e.target.value)}
            />
          </label>
          <label>
            Last Service Date:
            <input
              type="date"
              value={lastServiceDate}
              onChange={(e) => setLastServiceDate(e.target.value)}
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
    </div>
  );
}

export default ServiceCalculator;
    