import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './HomePage.css';
import unimyImage from '../assets/unimy.png';
import bacImage from '../assets/bac.png';

function HomePage() {
  return (
    <div className="student-portal">
      <div className="Frame1">
        <div className="Background" />
        
        <div className="Group1">
          <div className="Rectangle2" />
          <div className="Rectangle1" />
        </div>

        <div className="TextSection">
          <div className="Unimy">UNIMY</div>
          <div className="BacGroup">
            <span className="Bac">BAC</span>
            <span className="Group"> GROUP</span>
          </div>
          <Link to="/student-dashboard" className="GetStarted">GET STARTED</Link>
          <div className="Welcome">WelCome</div>
          <div className="WorkingTogether">Working together....</div>
        </div>

        <div className="Subject">
          <img className="Shoes" src={unimyImage} alt="Hero" />
          <div className="Shadow" />
          <div className="Ellipse1" />
        </div>

        <Navbar />

        <div className="WeTakeOverTheAi">WE TAKE OVER THE AI</div>
        <img className="Vector1" src={bacImage} alt="Vector" />
      </div>
    </div>
  );
}

export default HomePage;
