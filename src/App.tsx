import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import Heart from "./assets/heart.png"

function App() {
  return (
    <div className="app">
      <Timer />
      <div className="footer"><h4>Made with <img src={Heart} height="17px" width="20px" alt="" /> by <strong><a href="https://devtanzeel.web.app" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>TANZEEL UR REHMAN</a></strong></h4></div>
    </div>
  );
}

export default App;
