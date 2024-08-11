import { default as React } from 'react';
import './Safety.css';

const maintenanceTips = [
{
title: "Regular Chain Maintenance",
details: [
  "Lubricate the chain every 100-150 miles to prevent rust and ensure smooth operation.",
  "Clean the chain with a degreaser and brush before lubricating."
]
},
{
title: "Check and Adjust Brakes",
details: [
  "Inspect brake pads for wear and replace if they are worn down.",
  "Adjust the brake calipers and levers for proper engagement."
]
},
{
title: "Inspect and Maintain Tires",
details: [
  "Check tire pressure regularly and inflate to the recommended PSI.",
  "Inspect tires for punctures, cuts, and excessive wear."
]
},
{
title: "Clean and Lubricate Derailleurs",
details: [
  "Clean the derailleur with a degreaser and lubricate the pivot points.",
  "Adjust the derailleur to ensure smooth gear shifting."
]
},
{
title: "Check and Tighten Bolts",
details: [
  "Regularly check all bolts and fasteners on the bike, including those on the handlebars, seat, and wheels.",
  "Tighten any loose bolts to prevent accidents."
]
},
{
title: "Inspect and Maintain the Bottom Bracket",
details: [
  "Check for any unusual noises or play in the bottom bracket.",
  "Clean and lubricate or replace the bottom bracket as needed."
]
},
{
title: "Check and Replace Cables",
details: [
  "Inspect cables for fraying or corrosion.",
  "Replace any damaged cables to ensure proper braking and shifting."
]
},
{
title: "Inspect and Maintain Suspension",
details: [
  "Check the suspension forks and rear shocks for leaks or damage.",
  "Lubricate and service suspension components as recommended."
]
},
{
title: "Replace Worn Out Pedals",
details: [
  "Inspect pedals for wear and replace if they are loose or damaged.",
  "Ensure pedal threads are clean and greased before installation."
]
},
{
title: "Check and Adjust Headset",
details: [
  "Inspect the headset for play or roughness.",
  "Adjust or replace the headset bearings if needed."
]
},
{
title: "Inspect and Replace Chainrings",
details: [
  "Check chainrings for wear and replace if teeth are worn down.",
  "Ensure chainrings are securely attached and properly aligned."
]
},
{
title: "Check and Maintain the Freehub",
details: [
  "Inspect the freehub for smooth operation and replace if it's noisy or sticking.",
  "Clean and lubricate the freehub mechanism as needed."
]
},
{
title: "Replace the Handlebar Tape",
details: [
  "Replace handlebar tape when it becomes worn or torn.",
  "Wrap the new tape tightly and evenly for a comfortable grip."
]
},
{
title: "Inspect and Maintain the Seat Post",
details: [
  "Check for any movement or play in the seat post.",
  "Clean and lubricate the seat post and replace if it's damaged."
]
},
{
title: "Check and Maintain the Gear Shifters",
details: [
  "Inspect gear shifters for proper operation and adjust as necessary.",
  "Lubricate the shifter mechanisms to ensure smooth shifting."
]
},
{
title: "Inspect the Frame for Cracks",
details: [
  "Regularly check the frame for any signs of cracks or damage.",
  "Consult a professional if you suspect any structural issues."
]
},
{
title: "Check and Replace Reflectors",
details: [
  "Ensure that all reflectors are intact and properly positioned.",
  "Replace any missing or damaged reflectors to maintain visibility."
]
},
{
title: "Inspect and Maintain the Kickstand",
details: [
  "Check the kickstand for stability and proper operation.",
  "Lubricate the kickstand mechanism and replace if necessary."
]
},
{
title: "Clean and Maintain the Hubs",
details: [
  "Regularly clean the hubs and inspect for smooth rotation.",
  "Service or replace the hub bearings if they are rough or noisy."
]
},
{
title: "Check and Replace Brake Cables",
details: [
  "Inspect brake cables for fraying or corrosion.",
  "Replace any damaged cables to ensure effective braking."
]
},
{
title: "Inspect and Adjust Derailleur Alignment",
details: [
  "Check the derailleur alignment and adjust as needed.",
  "Ensure that the derailleur is properly indexed for smooth shifting."
]
},
{
title: "Replace Worn Out Cassette",
details: [
  "Inspect the cassette for wear and replace if teeth are worn.",
  "Ensure proper installation and alignment with the chain."
]
},
{
title: "Check and Tighten Crankset",
details: [
  "Inspect the crankset for looseness and tighten crank bolts.",
  "Ensure proper alignment and operation of the crankset."
]
},
{
title: "Inspect and Replace Tubes",
details: [
  "Check for any signs of punctures or leaks in the inner tubes.",
  "Replace any damaged tubes to maintain proper inflation."
]
},
{
title: "Clean and Maintain the Bike Frame",
details: [
  "Regularly clean the bike frame to remove dirt and grime.",
  "Inspect for any scratches or damage and address as needed."
]
},
{
title: "Check and Maintain the Fork",
details: [
  "Inspect the fork for any signs of damage or wear.",
  "Ensure proper operation and lubrication of the fork."
]
},
{
title: "Inspect and Replace Chain",
details: [
  "Check the chain for wear and replace if it is stretched or damaged.",
  "Ensure proper tension and lubrication of the chain."
]
},
{
title: "Check and Adjust Gear Hangers",
details: [
  "Inspect the gear hanger for alignment and adjust if necessary.",
  "Replace the gear hanger if it is bent or damaged."
]
},
{
title: "Inspect and Replace Bolts on Brakes",
details: [
  "Check all bolts on the brake calipers and levers.",
  "Tighten any loose bolts and replace any damaged ones."
]
},
{
title: "Check and Clean the Pedal Threads",
details: [
  "Inspect the pedal threads for any dirt or debris.",
  "Clean and lubricate the threads before installing new pedals."
]
},
{
title: "Inspect and Adjust Bottom Bracket",
details: [
  "Check for any play or noise in the bottom bracket.",
  "Adjust or replace the bottom bracket if needed."
]
},
{
title: "Replace Worn Out Tires",
details: [
  "Inspect tires for tread wear and replace if needed.",
  "Ensure proper installation and inflation of new tires."
]
},
{
title: "Inspect and Maintain the Bell or Horn",
details: [
  "Check the bell or horn for functionality and replace if it’s not working.",
  "Ensure it’s securely attached and easily accessible."
]
},
{
title: "Check and Maintain the Fenders",
details: [
  "Inspect the fenders for cracks or damage.",
  "Ensure proper installation and alignment of fenders."
]
},
{
title: "Inspect and Adjust Saddle Position",
details: [
  "Check the saddle position for comfort and proper alignment.",
  "Adjust the saddle height and angle as needed."
]
},
{
title: "Clean and Lubricate the Gearing System",
details: [
  "Regularly clean the gearing system and lubricate the components.",
  "Ensure smooth shifting and operation of gears."
]
},
{
title: "Inspect and Replace the Rear Derailleur",
details: [
  "Check the rear derailleur for wear or damage.",
  "Replace or adjust the derailleur for smooth shifting."
]
},
{
title: "Inspect and Maintain the Chainstay",
details: [
  "Check the chainstay for any signs of damage or wear.",
  "Ensure proper alignment and protection of the chainstay."
]
},
{
title: "Replace Worn Out Bearings",
details: [
  "Inspect all bearings for wear and replace if necessary.",
  "Ensure smooth operation of wheels, pedals, and other components."
]
},
{
title: "Check and Maintain the Gear Shifters",
details: [
  "Inspect gear shifters for proper operation and adjust if needed.",
  "Lubricate the shifters for smooth performance."
]
},
{
title: "Inspect and Replace Brake Rotors",
details: [
  "Check the brake rotors for warping or excessive wear.",
  "Replace rotors if they are damaged or thin."
]
},
{
title: "Inspect and Clean the Bottom Bracket",
details: [
  "Check for any issues with the bottom bracket and clean if necessary.",
  "Replace bearings or the bottom bracket if needed."
]
},
{
title: "Inspect and Adjust the Suspension Settings",
details: [
  "Check the suspension settings for your riding style and adjust if needed.",
  "Ensure proper air pressure and damping settings."
]
},
{
title: "Clean and Lubricate the Hub Bearings",
details: [
  "Regularly clean and lubricate the hub bearings.",
  "Replace bearings if they are worn or damaged."
]
},
{
title: "Inspect and Replace the Chainring Bolts",
details: [
  "Check the chainring bolts for tightness and wear.",
  "Replace any damaged or worn bolts."
]
},
{
title: "Inspect and Maintain the Kickstand",
details: [
  "Ensure the kickstand is stable and properly aligned.",
  "Lubricate the mechanism and replace if needed."
]
},
{
title: "Check and Replace the Pedal Bearings",
details: [
  "Inspect the pedal bearings for smooth rotation.",
  "Replace bearings if they are rough or noisy."
]
},
{
title: "Inspect and Replace Brake Pads",
details: [
  "Check brake pads for wear and replace if they are too thin.",
  "Ensure proper alignment and secure installation of new pads."
]
},
{
title: "Inspect and Clean the Derailleur Cages",
details: [
  "Regularly clean the derailleur cages to remove dirt and grime.",
  "Inspect for wear and replace if necessary."
]
},
{
title: "Check and Adjust the Headset Bearings",
details: [
  "Inspect the headset bearings for smooth operation.",
  "Adjust or replace the bearings if they are rough or loose."
]
},
{
title: "Inspect and Replace the Bottom Bracket Bearings",
details: [
  "Check the bottom bracket bearings for wear and replace if necessary.",
  "Ensure proper alignment and smooth operation."
]
},
{
title: "Inspect and Adjust the Gear Hanger Alignment",
details: [
  "Check the alignment of the gear hanger and adjust if needed.",
  "Ensure the derailleur is properly aligned for smooth shifting."
]
},
{
title: "Inspect and Replace Worn Out Spokes",
details: [
  "Check spokes for tension and replace any that are broken or worn.",
  "Ensure proper wheel truing and spoke tension."
]
},
{
title: "Inspect and Clean the Brake Calipers",
details: [
  "Clean the brake calipers to remove dirt and debris.",
  "Inspect for wear and replace if necessary."
]
},
{
title: "Inspect and Replace the Headset",
details: [
  "Check the headset for play or roughness and replace if needed.",
  "Ensure smooth steering and proper fit."
]
},
{
title: "Inspect and Clean the Fork Stanchions",
details: [
  "Regularly clean the fork stanchions to remove dirt and grime.",
  "Inspect for scratches or damage and address if needed."
]
},
{
title: "Check and Maintain the Derailleur Cables",
details: [
  "Inspect derailleur cables for fraying or corrosion.",
  "Replace if necessary to ensure smooth shifting."
]
},
{
title: "Inspect and Adjust the Suspension Sag",
details: [
  "Check the suspension sag for proper adjustment.",
  "Adjust according to your weight and riding style."
]
},
{
title: "Inspect and Replace Worn Out Bottom Bracket Cups",
details: [
  "Check the bottom bracket cups for wear and replace if necessary.",
  "Ensure proper installation and alignment."
]
},
{
title: "Inspect and Maintain the Rear Shock",
details: [
  "Check the rear shock for leaks or damage.",
  "Service or replace the shock if it is not functioning properly."
]
},
{
title: "Inspect and Replace the Seat Rails",
details: [
  "Check the seat rails for wear or damage.",
  "Replace if they are bent or broken."
]
},
{
title: "Inspect and Maintain the Pedal Threads",
details: [
  "Ensure pedal threads are clean and free from debris.",
  "Lubricate and replace pedals if necessary."
]
},
{
title: "Inspect and Replace Worn Out Crankset",
details: [
  "Check the crankset for wear and replace if necessary.",
  "Ensure proper alignment and installation."
]
},
{
title: "Inspect and Maintain the Derailleur Springs",
details: [
  "Check the derailleur springs for proper tension and operation.",
  "Adjust or replace if they are worn or damaged."
]
},
{
title: "Inspect and Replace the Handlebar Grips",
details: [
  "Check handlebar grips for wear and replace if necessary.",
  "Ensure a comfortable and secure grip on the handlebars."
]
},
{
title: "Inspect and Clean the Brake Levers",
details: [
  "Clean the brake levers to remove dirt and grime.",
  "Inspect for proper operation and replace if necessary."
]
},
{
title: "Inspect and Maintain the Fork Steerer Tube",
details: [
  "Check the fork steerer tube for play or damage.",
  "Ensure proper installation and adjustment."
]
},
{
title: "Inspect and Replace Worn Out Tire Tubes",
details: [
  "Inspect tire tubes for punctures or damage.",
  "Replace if necessary to maintain proper inflation."
]
},
{
title: "Inspect and Adjust the Chain Tension",
details: [
  "Check the chain tension and adjust as needed.",
  "Ensure proper operation and prevent chain slippage."
]
},
{
title: "Inspect and Replace Worn Out Chainrings",
details: [
  "Check chainrings for wear and replace if necessary.",
  "Ensure proper alignment with the chain."
]
},
{
title: "Inspect and Maintain the Rear Derailleur Hanger",
details: [
  "Check the rear derailleur hanger for alignment and replace if needed.",
  "Ensure smooth shifting and proper gear alignment."
]
}
];

const BikeRepairGuidelines = () => {
    return (
        <div className="safety-container">
        <header className="safety-header">
            <h1>Repair Guidelines</h1>
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
    
export default BikeRepairGuidelines;
