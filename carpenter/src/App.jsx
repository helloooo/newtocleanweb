import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DeleteAccountPage from './pages/DeleteAccount';

function App() {
  return (
    <Router>
      <div className="text-white font-sans">
        {/* Navbar */}
        <nav className="bg-white-100 ">
    <div className="container mx-auto flex items-center justify-between">
        {/* Menu */}
        <div className="py-8 space-x-5">
            <NavLink to="/" className={({ isActive }) => `font-bold hover:text-gray-950 ${isActive ? 'text-gray-800' : 'text-gray-500 '}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `font-bold hover:text-gray-950 ${isActive ? 'text-gray-800' : 'text-gray-500 '}`}>About Us</NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => `font-bold hover:text-gray-950 ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>Contact Us</NavLink>
            <NavLink to="/privacy-policy" className={({ isActive }) => `font-bold hover:text-gray-950 ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>Privacy Policy</NavLink>
            <NavLink to="/deleteaccount" className={({ isActive }) => `font-bold hover:text-gray-950 ${isActive ? 'text-gray-800' : 'text-gray-500'}`}></NavLink>
        </div>

        {/* Icon */}
        <img src="/assets/logo1.png" alt="Icon" className="h-20 mr-2" />
    </div>
</nav>









        {/* Routes Setup */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/deleteaccount" element={<DeleteAccountPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
