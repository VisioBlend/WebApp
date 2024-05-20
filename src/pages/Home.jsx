import React, { useState } from 'react';
import './home.css';
import logo from './../assets/logo.png'; 
import Picture1 from './../assets/Picture1.png'; 
import Picture2 from './../assets/Picture2.png'; 

function Home() {
  return (
    <div className="App">
      <nav className="navbar">
      </nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className='Judul'>
      <h1 className="title">Partners & <span className="team-title">Team</span></h1></div>
      <h2 className='title2'>Collaborative Excellence : Building 
Bridges, Driving Success</h2>
<p>Memberdayakan kemitraan dan membina kerja sama tim untuk mencapai yang tak tertandingi. Pendekatan kami yang berdedikasi dan visi bersama menciptakan sinergi yang mendorong inovasi dan mendorong kesuksesan yang berkelanjutan bagi semua.</p>
      <div className="boxes-wrapper">
      <div className="boxes-container">
        <div className="box">
        <img src={Picture1} alt="picture" className="box-image" />
        </div>
        <div className="box"><img src={Picture2} alt="picture" className="box-image" /></div>
        <div className="box">Coming Soon</div>
        <div className="box">Coming Soon</div>
      </div>
      <div className="boxes-container">
        <div className="box">Coming Soon</div>
        <div className="box">Coming Soon</div>
        <div className="box">Coming Soon</div>
        <div className="box">Coming Soon</div>
        </div>
    </div>
    </div>
  );
}

export default Home;
