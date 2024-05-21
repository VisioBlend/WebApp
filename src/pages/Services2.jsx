import React from 'react';
import './services.css';
import image4 from './../assets/image4.jpg'; 
import image5 from './../assets/image5.jpg';
import image6 from './../assets/image6.jpg';
import { NavLink } from 'react-router-dom';

function Services2() {
  const handleNextButtonClick = () => {
    console.log('Next button clicked!');
  };

  return (
    <div className="App">
      <div className="title-and-boxes">
        <h1 className="title">Design Architecture</h1>
        <p>mencakup proses perencanaan, perancangan, dan pembangunan berbagai struktur fisik, termasuk bangunan.</p>
        <div className="box-container">

          <div className="box-services">
            <div className="detail">
              <h3>Produk Canvas</h3>
              <div className="box-content">
                <ul>
                  <li>Desain Gambar IMB/ PBG</li>
                  <li>Desain Gambar SLF ber SKA</li>
                  <li>Desain Gambar Perencanaan</li>
                </ul>
              </div>
              <div className='price'>
                <span>Start from</span> <span className="yellow-text">Rp 16.000/ M2</span>
              </div>
            </div>

            <div className="action">
              <NavLink
                to='/portfolio'
                className='button button-secondary'>
                See Product
              </NavLink>
              <button className='button button-primary'>Book Now</button>
            </div>
          </div>
          <div className="box-services">
            <div className="detail">
              <h3>Produk Inspire</h3>
              <div className="box-content">
                <ul>
                  <li>Laporan Struktur</li>
                  <li>Laporan Sondir</li>
                </ul>
              </div>
              <div className='price'>
                <span>Start from</span> <span className="yellow-text">Rp 47.000/ M2</span>
              </div>
            </div>

            <div className="action">
              <button className='button button-secondary'>See Product</button>
              <button className='button button-primary'>Book Now</button>
            </div>
          </div>
          <div className="box-services">

            <div className="detail">
              <h3>Produk Vision</h3>
              <div className="box-content">
                <ul>
                  <li>Desain Gambar IMB/ PBG + Gambar 3D + Video Animasi</li>
                  <li>Desain Gambar SLF ber SKA + Gambar 3D + Video Animasi</li>
                  <li>Desain Gambar Perencanaan + Gambar 3D + Video Animasi</li>
                </ul>
              </div>
              <div className='price'>
                <span>Start from</span> <span className="yellow-text">Rp 75.000/ M2</span>
              </div>
            </div>

            <div className="action">
              <button className='button button-secondary'>See Product</button>
              <button className='button button-primary'>Book Now</button>
            </div>
          </div>
        </div>
        <div className='review-and-ulasan'>
          <h2 className="review-title">Review & Ulasan</h2>
          <div className="reviews-container">
            <div className="review">
              <div className="review-header">
                <img src={image4} alt="Reviewer 1" className="reviewer-photo"/>
                <span>Mahendra</span>
              </div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="divider"></div>
              <div className="ulasan">
                <p>Saya sangat puas dengan jasa arsitek yang saya dapatkan dari Visioblend. Arsiteknya sangat profesional dan komunikatif.</p>
              </div>
            </div>
            <div className="review">
              <div className="review-header">
                <img src={image5} alt="Reviewer 2" className="reviewer-photo"/>
                <span>David Beck</span>
              </div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="divider"></div>
              <div className="ulasan">
                <p>Saya sangat puas dengan hasil video yang saya dapatkan dari Visioblend. Videografernya sangat profesional dan memiliki kreativitas tinggi.</p>
              </div>
            </div>
            <div className="review">
              <div className="review-header">
                <img src={image6} alt="Reviewer 3" className="reviewer-photo"/>
                <span>Liam Jordan</span>
              </div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="divider"></div>
              <div className="ulasan">
                <p>Desain yang saya dapatkan selalu sesuai dengan keinginan saya. Selain itu, harga yang ditawarkan juga sangat terjangkau.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-next-container">
      {/* Tombol Next */}
      <button className="oval-button" onClick={handleNextButtonClick}>Next</button>
      </div>
    </div>
  );
}

export default Services2;
