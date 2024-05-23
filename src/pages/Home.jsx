import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import iconpartners from "./../assets/iconPartners.svg";
import banner from "./../assets/banner.svg";
import feed from "./../assets/feed.svg";
import design from "./../assets/design.svg";
import ceremonial from "./../assets/ceremonial.svg";
import reels from "./../assets/reels.svg";
import Picture1 from "./../assets/Picture1.png";
import Picture2 from "./../assets/Picture2.png";
import about from "./../assets/iconAboutus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaPhone, FaComments, FaTasks, FaBox } from "react-icons/fa";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="container-home" style={{ cursor: "default" }}>
      {" "}
      <div
        className="banner position-relative d-inline-block"
        style={{
          width: "100%",
          marginTop: "50px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src={banner}
          className="img-fluid"
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          className="teks-di-atas position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{
            fontFamily: "'Outfit', sans-serif",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "0" }}>
            Realize Your Dream World & Capture Every Moment
          </h1>
          <h1 style={{ margin: "0" }}>
            With <span style={{ color: "#B8901A" }}>V</span>
            isio
            <span style={{ color: "#B8901A" }}>B</span>
            lend
          </h1>
        </div>
      </div>
      <div className="container" style={{ width: "100%" }}>
        <div
          className="Heading-text"
          style={{ margin: "50px 0", fontFamily: "'Outfit', sans-serif" }}
        >
          <h1 className="fw-bold">
            Most{" "}
            <span style={{ color: "#B8901A" }}>Needed Services in Bali</span>
          </h1>
          <div
            className="text-home-head"
            style={{
              color: "gray",
              lineHeight: "15px",
              marginTop: "30px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <p>
              "There is gold everywhere, most people are just not trained to see
              it."{" "}
            </p>
            <p>• Robert Kiyosaki</p>
          </div>
        </div>
        <div
          className="box-home-container d-flex gap-5"
          style={{ fontFamily: "Poppins, sans-serif", marginLeft: "-20px" }}
        >
          {/* SERVICE 1 */}
          <a href="/" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Design Marketing</p>
              </div>

              <img
                src={feed}
                alt="Service 1"
                style={{ alignItems: "center", padding: "20px" }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Design Feed, Story, Logo Dll</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#B8901A" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (15)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 16,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* SERVICE 2 */}

          <a href="/" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Design Architect</p>
              </div>
              <img
                src={design}
                alt="Service 2"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "30px",
                }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Design 2D/3D Bangunan</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#B8901A" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (20)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 150,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* SERVICE 3 */}
          <a href="/" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Photography</p>
              </div>

              <img
                src={ceremonial}
                alt="Service 3"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "30px",
                }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Ceremonial, Company, Gen Z</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#E7E9EB" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (102)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 250,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* SERVICE 4 */}
          <a href="/" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Videography</p>
              </div>

              <img
                src={reels}
                alt="Service 4"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "30px",
                }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Reels, Event, Drone, Company ..</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#E7E9EB" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (102)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 325,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* ALUR PEMESANAN */}
      <div
        className="custom-container d-flex"
        style={{
          fontFamily: "Poppins, sans-serif",
          marginTop: "100px",
          height: "180px",
          width: "100%",
        }}
      >
        <div className="custom-header">
          <div className="custom-title fs-3">
            <p>Alur Pemesanan</p>
          </div>
          <div className="custom-step">
            <div>
              <FaPhone
                className="custom-phoneIcon custom-icon"
                style={{ transform: "scaleX(-1)" }}
              />{" "}
              1. Hubungi Kami
            </div>
            <div>
              <FaComments className="custom-commentsIcon custom-icon" /> 2.
              Diskusi Projek
            </div>
            <div>
              <FaTasks className="custom-tasksIcon custom-icon" /> 3. Pengerjaan
              Projek
            </div>
            <div>
              <FaBox className="custom-boxIcon custom-icon" /> 4. Penyerahan
              Projek
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT US */}
      <div
        className="aboutSectionCustom"
        style={{
          height: "100vh",
          padding: " 50px 100px",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        <div
          className="aboutSectionCustom-wrapper"
          style={{ justifyContent: "center" }}
        >
          <img
            src={about}
            alt="About"
            className="aboutCustom"
            style={{ height: "80px" }}
          />
          <h1
            className="titleCustom fw-bold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "50px",
              margin: "20px 0",
            }}
          >
            About <span style={{ color: "#B8901A" }}>Us</span>
          </h1>
          <p
            className="descriptionCustom"
            style={{ marginTop: "2%", lineHeight: "25px" }}
          >
            Kami memiliki keahlian di berbagai sektor dan skala proyek, yang
            melibatkan desain, fotografi, dan videografi.
            <br /> Pendekatan kami terhadap setiap proyek adalah sama,
            memberikan perhatian dan perhatian yang konsisten.
          </p>
          <div className="servicesCustom" style={{ marginTop: "60px" }}>
            <div className="serviceCardCustom">
              <h3 className="serviceTitleCustom">Design</h3>
              <p className="service-text">
                Menciptakan solusi visual yang efektif dan menarik untuk
                berbagai kebutuhan untuk memenuhi kebutuhan klien dari
                perencanaan hingga implementasi
              </p>
            </div>
            <div className="serviceCardCustom">
              <h3 className="serviceTitleCustom">Photography</h3>
              <p className="service-text">
                Menangkap dan menampilkan detail yang rumit, elemen desain, dan
                estetika keseluruhan struktur arsitektur.
              </p>
            </div>
            <div className="serviceCardCustom">
              <h3 className="serviceTitleCustom">Videography</h3>
              <p className="service-text">
                Membawa penceritaan visual ke tingkat yang lebih tinggi dengan
                memasukkan elemen dinamis dan gerakan.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION PEMISAH */}
      <div className="section"></div>
      {/* PARTNERS & TEAMS */}
      <div
        className="partner-container-content"
        style={{
          padding: "100px",
          minHeight: "100vh",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="partner-wrapper-content">
          <img
            src={iconpartners}
            alt="Logo"
            className="partner-logo"
            style={{ height: "80px" }}
          />
          <h1
            className="partner-title fw-bold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "50px",
              margin: "20px 0",
            }}
          >
            Partners &{" "}
            <span className="partner-team-title" style={{ color: "#B8901A" }}>
              Team
            </span>
          </h1>
          <h2 className="partner-title2 fs-3">
            Collaborative Excellence : Building Bridges, Driving Success
          </h2>
          <p style={{ marginTop: "2%", lineHeight: "25px" }}>
            Memberdayakan kemitraan dan membina kerja sama tim untuk mencapai
            yang tak tertandingi. <br />
            Pendekatan kami yang berdedikasi dan visi bersama menciptakan
            sinergi yang mendorong inovasi <br />
            dan mendorong kesuksesan yang berkelanjutan bagi semua.
          </p>
          <div
            className="partner-boxes-wrapper d-flex"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <div
              className="partner-boxes-container d-flex"
              style={{
                justifyContent: "center",
                gap: "50px",
                margin: "15px 0",
              }}
            >
              <div className="partner-box">
                <img src={Picture1} alt="picture" style={{ width: "50%" }} />
              </div>
              <div className="partner-box">
                <img src={Picture2} alt="picture" style={{ width: "50%" }} />
              </div>
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
            </div>
            <div
              className="partner-boxes-container d-flex"
              style={{
                justifyContent: "center",
                gap: "50px",
                margin: "15px 0",
              }}
            >
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section"></div>
      {/* PORTFOLIO */}
      {/* ISI DENGAN CODE PORTFOLIO DESIGN */}
      <br></br>
      <br></br>
      <div className="section"></div>
      {/* CONTACT US */}
      <div
        className="custom-contact-container"
        style={{ fontFamily: "Poppins, sans-serif", height: "100vh" }}
      >
        <div className="custom-contact-wrapper d-flex">
          <div className="form-wrapper" style={{ marginRight: "200px" }}>
            <form className="custom-contact-form" style={{ width: "400px" }}>
              <div className="custom-mt-4 custom-mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="custom-form-control form-control"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="custom-mt-4 custom-mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="custom-form-control form-control"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="custom-mt-4 custom-mb-4">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="custom-form-control form-control"
                  name="phone"
                  placeholder="Your number"
                />
              </div>
              <div className="custom-mt-4 custom-mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="custom-form-control form-control"
                  name="message"
                  placeholder="Write something..."
                ></textarea>
              </div>
              <button type="submit" className="custom-submit-button">
                Submit
              </button>
            </form>
          </div>
          <div className="custom-contact-info">
            <div className="contact-info-wrap">
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "bold",
                }}
              >
                Contact Us{" "}
                <span
                  className="custom-highlight"
                  style={{
                    color: "#bf9b30",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Today
                </span>
              </h2>
              <p style={{ marginTop: "20px" }}>
                We will contact you and draw up requirements for the project and
                estimate.
              </p>

              <div className="text-wrap-contactInfo">
                <p className="text-contactInfo">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#bf9b30" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>Email</span>
                  <br />
                  <span className="custom-highlight">
                    visioblendbali@gmail.com
                  </span>
                </p>
              </div>
              <div className="text-wrap-contactInfo">
                <p className="text-contactInfo">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#bf9b30" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>Phone</span>
                  <br />
                  <span className="custom-highlight">+62 857 3814 4820</span>
                </p>
              </div>
              <div className="text-wrap-contactInfo">
                <p className="text-contactInfo">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#bf9b30" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>Address</span>
                  <br />
                  <span className="custom-highlight">
                    Jl. Kapten Agung No.1, Denpasar
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
