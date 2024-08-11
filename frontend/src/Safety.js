    import React from 'react';
import './Safety.css';

    const maintenanceTips = [
    // The list of maintenance tips as before
    {
    title: "Regular Oil Changes",
    details: [
        "Frequency: Change the engine oil and filter every 7,500 to 10,000 miles, or as recommended by Audi.",
        "Type: Use the specified synthetic oil that meets Audi’s standards (e.g., VW 502 00/505 00)."
    ]
    },
    {
    title: "Monitor and Maintain Fluid Levels",
    details: [
        "Coolant: Use the Audi-specified coolant and check levels regularly.",
        "Brake Fluid: Replace the brake fluid every 2 years to maintain braking performance.",
        "Transmission Fluid: Follow Audi’s recommendations for checking and changing the transmission fluid."
    ]
    },
    {
    title: "Check and Maintain Tires",
    details: [
        "Tire Pressure: Maintain the recommended tire pressure for optimal handling and fuel efficiency.",
        "Tread Depth: Replace tires when tread depth is below the recommended level.",
        "Alignment and Rotation: Rotate tires every 5,000 to 7,500 miles and check alignment annually."
    ]
    },
    {
    title: "Inspect and Replace Brake Components",
    details: [
        "Brake Pads and Rotors: Regularly inspect brake pads and rotors for wear and replace them when necessary.",
        "Brake System Check: Have the entire brake system inspected periodically."
    ]
    },
    {
    title: "Replace Filters",
    details: [
        "Air Filter: Change the engine air filter every 15,000 to 30,000 miles to ensure optimal engine performance.",
        "Cabin Air Filter: Replace the cabin air filter every 15,000 to 20,000 miles to maintain good air quality inside the car."
    ]
    },
    {
    title: "Battery Maintenance",
    details: [
        "Battery Health: Test the battery regularly and replace it every 3-5 years.",
        "Terminals: Clean the battery terminals to ensure proper electrical connections."
    ]
    },
    {
    title: "Check and Maintain the Cooling System",
    details: [
        "Coolant Levels: Regularly check and top off coolant levels.",
        "Radiator and Hoses: Inspect the radiator and hoses for leaks or wear and replace as needed."
    ]
    },
    {
    title: "Update Vehicle Software",
    details: [
        "Software Updates: Regularly check for and install software updates to ensure the vehicle’s systems are running efficiently and to fix any bugs.",
        "Diagnostics: Use Audi-specific diagnostic tools to read and clear any error codes."
    ]
    },
    {
    title: "Inspect and Replace Wiper Blades",
    details: [
        "Functionality: Replace wiper blades at least once a year or when they start to streak.",
        "Fluid: Keep the windshield washer fluid reservoir filled with Audi-approved fluid."
    ]
    },
    {
    title: "Follow the Manufacturer’s Maintenance Schedule",
    details: [
        "Scheduled Services: Adhere to the maintenance schedule outlined in the owner’s manual for services like timing belt replacement, spark plug changes, and other vital components.",
        "Professional Service: Take the vehicle to an Audi-certified service center for major services and complex repairs."
    ]
    },
    {
    title: "Bonus Tip: Keep Detailed Service Records",
    details: [
        "Documentation: Maintain detailed records of all services and repairs to track the maintenance history and enhance the resale value of your Audi."
    ]
    },
    {
    title: "Inspect the Suspension System",
    details: [
        "Shocks and Struts: Check the condition of shocks and struts for leaks or wear.",
        "Suspension Components: Inspect bushings, ball joints, and other suspension components regularly."
    ]
    },
    {
    title: "Check the Exhaust System",
    details: [
        "Exhaust Leaks: Inspect for any leaks or damage in the exhaust system.",
        "Muffler: Ensure the muffler is in good condition and replace if necessary."
    ]
    },
    {
    title: "Inspect the Timing Belt/Chain",
    details: [
        "Timing Belt: Replace the timing belt as per the manufacturer's recommended intervals, typically every 60,000 to 100,000 miles.",
        "Timing Chain: Check the timing chain for wear if your vehicle uses one."
    ]
    },
    {
    title: "Clean and Protect the Exterior",
    details: [
        "Washing: Regularly wash the vehicle to remove dirt and prevent rust.",
        "Waxing: Apply wax every few months to protect the paint and maintain shine."
    ]
    },
    {
    title: "Maintain Interior Components",
    details: [
        "Dashboard Cleaning: Regularly clean and condition the dashboard and interior surfaces.",
        "Upholstery: Vacuum and clean seats and carpets to maintain the interior condition."
    ]
    },
    {
    title: "Check and Maintain Lighting",
    details: [
        "Headlights and Taillights: Regularly check that all lights are working and replace bulbs as needed.",
        "Signal Lights: Ensure turn signals and hazard lights are functioning correctly."
    ]
    },
    {
    title: "Verify Climate Control System",
    details: [
        "AC System: Check the air conditioning system for proper operation and recharge refrigerant if necessary.",
        "Heater: Ensure the heater is working correctly and servicing as needed."
    ]
    },
    {
    title: "Inspect the Fuel System",
    details: [
        "Fuel Filter: Replace the fuel filter at recommended intervals to ensure proper fuel flow.",
        "Fuel Lines: Check fuel lines for any signs of leakage or damage."
    ]
    },
    {
    title: "Check the Drive Belts",
    details: [
        "Drive Belts: Inspect all drive belts for signs of wear or cracking and replace if necessary.",
        "Belt Tension: Ensure belts are properly tensioned and aligned."
    ]
    },
    {
    title: "Regularly Inspect and Replace Spark Plugs",
    details: [
        "Spark Plugs: Replace spark plugs at the interval specified in the owner’s manual to ensure optimal engine performance.",
        "Ignition Coils: Check ignition coils for proper operation and replace if needed."
    ]
    },
    {
    title: "Inspect and Maintain the Differential",
    details: [
        "Differential Fluid: Check and replace differential fluid according to the manufacturer's recommendations.",
        "Differential Components: Inspect differential components for wear or damage."
    ]
    }
    ];

    const Safety = () => {
        return (
            <div className="safety-container">
            <header className="safety-header">
                <h1>Vehicle Maintenance Tips</h1>
            </header>
            <main className="safety-content">
                <section className="safety-tips">
                {maintenanceTips.map((tip, index) => (
                    <div key={index} className="safety-tip-card">
                    <h2 className={`tip-title ${tip.title.includes('Oil Changes') ? 'highlight' : 'highlight'}`}>{tip.title}</h2>
                    <ul>
                        {tip.details.map((detail, idx) => (
                        <li key={idx} className="tip-detail">{detail}</li>
                        ))}
                    </ul>
                    </div>
                ))}
                </section>
            </main>
            <footer className="safety-footer">
                <p>&copy; 2024 Vehicle Maintenance Tips</p>
            </footer>
            </div>
        );
        };
        
        export default Safety;
