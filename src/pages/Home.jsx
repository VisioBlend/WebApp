import React from "react";
import "./home.css";
import iconpartners from "./../assets/iconPartners.svg";
import banner from "./../assets/banner.svg";
import Picture1 from "./../assets/Picture1.png";
import Picture2 from "./../assets/Picture2.png";

function Home() {
  return (
    <div className="text-center">
      {" "}
      <div
        className="banner position-relative d-inline-block"
        style={{ width: "100%", marginTop: "50px" }}
      >
        {" "}
        <img
          src={banner}
          className="img-fluid"
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          className="teks-di-atas position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <h1 className="mb-4">Realize Your Dream World</h1>
          <p className="mb-4">Capture Every Moment</p>
          <p className="mb-0">
            With{" "}
            <span className="fw-bold">
              <span style={{ color: "#B8901A" }}>V</span>
              isio
              <span style={{ color: "#B8901A" }}>B</span>
              lend
            </span>
          </p>
        </div>
      </div>
      <div className="section"></div>
      <div className="wrap-content" style={{ padding: "50px 100px" }}>
        <div className="logo-container">
          <img src={iconpartners} alt="Logo" className="logo" />
        </div>
        <div className="Judul">
          <h1
            className="title fw-bold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "50px",
            }}
          >
            Partners & <span className="team-title">Team</span>
          </h1>
        </div>
        <h2 className="title2 fs-3">
          Collaborative Excellence : Building Bridges, Driving Success
        </h2>
        <p style={{ marginTop: "2%", lineHeight: "25px" }}>
          Memberdayakan kemitraan dan membina kerja sama tim untuk mencapai yang
          tak tertandingi. <br />
          Pendekatan kami yang berdedikasi dan visi bersama menciptakan sinergi
          yang mendorong inovasi <br />
          dan mendorong kesuksesan yang berkelanjutan bagi semua.
        </p>
        <div className="boxes-wrapper">
          <div className="boxes-container">
            <div className="box">
              <img src={Picture1} alt="picture" style={{ width: "50%" }} />
            </div>
            <div className="box">
              <img src={Picture2} alt="picture" style={{ width: "50%" }} />
            </div>
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
    </div>
  );
}

export default Home;
