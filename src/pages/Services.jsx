import React from "react";
import "./services.css";
import image1 from "./../assets/image1.jpg";
import image2 from "./../assets/image2.jpg";
import image3 from "./../assets/image3.jpg";
import { NavLink } from "react-router-dom";

function Services() {
  const handleNextButtonClick = () => {
    console.log("Next button clicked!");
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="services-wrapper">
        <h1
          className="title fs-1 fw-bold"
          style={{
            fontFamily: "'Outfit', sans-serif",
            alignItem: "center",
          }}
        >
          Design Marketing
        </h1>
        <p style={{ lineHeight: "30px", margin: "0 0 50px 0" }}>
          Menciptakan solusi Marketing Design yang efektif dan menarik untuk
          memenuhi <br />
          berbagai kebutuhan untuk memenuhi kebutuhan klien dari perencanaan
          hingga implementasi.
        </p>
        <div className="box-container">
          <div className="box-services">
            <div className="detail">
              <h3>Paket UMKM</h3>
              <div className="box-content">
                <ul>
                  <li>Desain Feed Marketing</li>
                  <li>Desain Story Marketing</li>
                </ul>
              </div>
              <div className="price">
                <span>Start from</span>{" "}
                <span className="yellow-text">Rp 16.000/ Item</span>
              </div>
            </div>

            <div className="action">
              <NavLink to="/portfolio" className="button button-secondary">
                See Product
              </NavLink>
              <button className="button button-primary">Book Now</button>
            </div>
          </div>
          <div className="box-services">
            <div className="detail">
              <h3>Paket UMKM</h3>
              <div className="box-content">
                <ul>
                  <li>Desain Feed Marketing</li>
                  <li>Desain Story Marketing</li>
                </ul>
              </div>
              <div className="price">
                <span>Start from</span>{" "}
                <span className="yellow-text">Rp 16.000/ Item</span>
              </div>
            </div>

            <div className="action">
              <button className="button button-secondary">See Product</button>
              <button className="button button-primary">Book Now</button>
            </div>
          </div>
          <div className="box-services">
            <div className="detail">
              <h3>Paket UMKM</h3>
              <div className="box-content">
                <ul>
                  <li>Desain Feed Marketing</li>
                  <li>Desain Story Marketing</li>
                </ul>
              </div>
              <div className="price">
                <span>Start from</span>{" "}
                <span className="yellow-text">Rp 16.000/ Item</span>
              </div>
            </div>
            <div className="action">
              <button className="button button-secondary">See Product</button>
              <button className="button button-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="review-and-ulasan">
          <h2 className="review-title">Review & Ulasan</h2>
          <div className="reviews-container">
            <div className="review">
              <div className="review-header">
                <img src={image1} alt="Reviewer 1" className="reviewer-photo" />
                <span>Wilson Yeun</span>
              </div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="divider"></div>
              <div className="ulasan">
                <p>
                  Saya sangat puas dengan pelayanan yang saya dapatkan dari
                  Visioblend. Customer service-nya sangat responsif dan
                  membantu, sehingga saya bisa mendapatkan informasi yang saya
                  butuhkan dengan cepat.
                </p>
              </div>
            </div>
            <div className="review">
              <div className="review-header">
                <img src={image2} alt="Reviewer 2" className="reviewer-photo" />
                <span>Anderson M.</span>
              </div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="divider"></div>
              <div className="ulasan">
                <p>
                  Saya sangat merekomendasikan Visioblend kepada siapa saja yang
                  membutuhkan jasa arsitek, fotografer, atau videografer.
                  Visioblend adalah platform yang sangat profesional dan
                  terpercaya.
                </p>
              </div>
            </div>
            <div className="review">
              <div className="review-header">
                <img src={image3} alt="Reviewer 3" className="reviewer-photo" />
                <span>Matthew Yo</span>
              </div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="divider"></div>
              <div className="ulasan">
                <p>
                  Visioblend adalah platform yang sangat memudahkan saya untuk
                  mencari jasa arsitek, fotografer, dan videografer. Saya bisa
                  menemukan berbagai pilihan jasa dengan mudah dan cepat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-next-container">
          {/* Tombol Next */}
          <button className="oval-button" onClick={handleNextButtonClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
