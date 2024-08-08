import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import BikeRepairGuidelines from './BikeRepairGuidelines';
import Footer from './Footer';
import Guide from './Guide';
import HomePage from './HomePage';
import LocalServiceShop from './LocalServiceShop';
import Login from './Login';
import NavBar from './NavBar';
import Safety from './Safety';
import ServiceCalculator from './ServiceCalculator';
import SignUp from './SignUp';
import Tips from './Tips';
import './styles.css';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('User:', user);
  return (
    <Router>
      {(!user || user.role === 'user') && <NavBar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/service-calculator" element={<ServiceCalculator />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/video-assistance" element={<BikeRepairGuidelines />} />
          <Route path="/local-service-shop" element={<LocalServiceShop />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>
      </main>
      {(!user || user.role === 'user') && <Footer />}
      
    </Router>
  );
}

export default App;
