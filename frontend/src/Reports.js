    import React, { useState } from 'react';
import './Reports.css';

    function Reports() {
    const [reportType, setReportType] = useState('User Report');
    const [reportData, setReportData] = useState([]);

    const generateReport = () => {
    // Dummy data for demonstration
    if (reportType === 'User Report') {
        setReportData([
        { name: 'John Doe', email: 'john@example.com', vehicleType: 'Bike' },
        { name: 'Jane Smith', email: 'jane@example.com', vehicleType: 'Car' },
        ]);
    } else if (reportType === 'Vehicle Report') {
        setReportData([
        { email: 'john@example.com', vehicleNumber: 'ABC123', vehicleType: 'Bike', brand: 'Yamaha', model: 'MT-07' },
        { email: 'jane@example.com', vehicleNumber: 'XYZ789', vehicleType: 'Car', brand: 'Toyota', model: 'Corolla' },
        ]);
    } else if (reportType === 'Shop Report') {
        setReportData([
        { shopId: 'S001', type: 'Bike', location: '123 Main St', city: 'New York' },
        { shopId: 'S002', type: 'Car', location: '456 Elm St', city: 'Los Angeles' },
        ]);
    }
    };

    return (
    <div className="admin-page">
        <h1>Generate Report</h1>
        <div className="report-options">
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="User Report">User Report</option>
            <option value="Vehicle Report">Vehicle Report</option>
            <option value="Shop Report">Shop Report</option>
        </select>
        <button className="generate-button" onClick={generateReport}>Generate Report</button>
        </div>
        {reportData.length > 0 && (
        <table className="admin-table">
            <thead>
            <tr>
                {Object.keys(reportData[0]).map((key) => (
                <th key={key}>{key}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {reportData.map((data, index) => (
                <tr key={index}>
                {Object.values(data).map((value, idx) => (
                    <td key={idx}>{value}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        )}
    </div>
    );
    }

    export default Reports;
