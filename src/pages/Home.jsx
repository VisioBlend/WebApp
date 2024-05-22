import React, { useState } from 'react';
import './home.css';
import logo from './../assets/logo.png';
import about from './../assets/about.svg';
import partner from './../assets/partner.svg';
import Picture1 from './../assets/Picture1.png';
import Picture2 from './../assets/Picture2.png';
import { FaPhone, FaComments, FaTasks, FaBox } from 'react-icons/fa';


function Home() {
  return (
    <div className="App">
      <nav className="navbar"></nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* ALUR PEMESANAN */}

      <div className="container">
        <div className="header">
          <div className='title'>
            <h4> Alur Pemesanan</h4>
          </div>
          <div className="step">
            <div><FaPhone className='icon' /> 1. Hubungi Kami</div>
            <div><FaComments className='icon' /> 2. Diskusi Projek</div>
            <div><FaTasks className='icon' /> 3. Pengerjaan Projek</div>
            <div><FaBox className='icon' /> 4. Penyerahan Projek</div>
          </div>
        </div>

        {/* ABOUT US */}

        <div className="aboutSection">
          <img src={about} alt="About" className="about" />
          <h2 className="title">
            About <span style={{ color: '#B8901A' }}>Us</span>
          </h2>
          <p className="description">
            Kami memiliki keahlian di berbagai sektor dan skala proyek, yang melibatkan desain, fotografi, dan videografi.
            Pendekatan kami terhadap setiap proyek adalah sama, memberikan perhatian dan perhatian yang konsisten.
          </p>
          <div className="services">
            <div className="serviceCard">
              <h3 className="serviceTitle">Design</h3>
              <p>
                Menciptakan Solusi Visual Yang Efektif Dan Menarik Untuk Berbagai Kebutuhan Untuk Memenuhi Kebutuhan Klien Dari Perencanaan Hingga Implementasi.
              </p>
            </div>
            <div className="serviceCard">
              <h3 className="serviceTitle">Photography</h3>
              <p>
                Menangkap dan menampilkan detail yang rumit, elemen desain, dan estetika keseluruhan struktur arsitektur.
              </p>
            </div>
            <div className="serviceCard">
              <h3 className="serviceTitle">Videography</h3>
              <p>
                Membawa penceritaan visual ke tingkat yang lebih tinggi dengan memasukkan elemen dinamis dan gerakan.
              </p>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>

      {/* PARTNERS & TEAM */}

      <div className='tittle'>
        <img src={partner} alt="Partner" className="partner" />
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

      {/* CONTACT US */}

      <div className='footer'></div>

      <div className="contact-container">
        <form className="contact-form">
          <div className="mt-4 mb-4">
            <label>Name *</label>
            <input type="text" className="form-control" name="name" placeholder="" />
          </div>
          <div className="mt-4 mb-4">
            <label >Email *</label>
            <input type="email" className="form-control" name="name" placeholder="" />
          </div>
          <div className="mt-4 mb-4">
            <label>Phone *</label>
            <input type="tel" className="form-control" name="name" placeholder="" />
          </div>
          <div className="mt-4 mb-5">
            <label>Message *</label>
            <input type="text" className="form-control" name="name" placeholder="" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="contact-info">
          <h2>Contact Us <span className="highlight">Today</span></h2>
          <p>
            We will contact you and draw up requirements for the project and estimate.
          </p>
          <p><strong>Email :</strong> <br></br> <span className="highlight">visioblendbali@gmail.com</span></p>
          <p><strong>Phone :</strong><br></br><span className="highlight">+62 857 3814 4820</span></p>
          <p><strong>Address :</strong><br></br> <span className="highlight">Jl. Kapten Agung No.1, Denpasar</span></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
