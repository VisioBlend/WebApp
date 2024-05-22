import React from "react";
import "./Home.css";
import iconpartners from "./../assets/iconPartners.svg";
import banner from "./../assets/banner.svg";
import feed from "./../assets/feed.svg";
import design from "./../assets/design.svg";
import ceremonial from "./../assets/ceremonial.svg";
import reels from "./../assets/reels.svg";
import Picture1 from "./../assets/Picture1.png";
import Picture2 from "./../assets/Picture2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="container" style={{ width: "100%", height: "100vh" }}>
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
          <div
            className="box-home"
            style={{
              width: "300px",
              height: "380px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "30px",
                padding: "5px",
                backgroundColor: "#B8901A",
                borderRadius: "5px",
                color: "white",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  top: "75%",
                  left: "0",
                }}
              />
              <div
                className="wrap-price d-flex justify-content-between align-items-center"
                style={{
                  marginTop: "30px",
                }}
              >
                <p style={{ margin: 0 }}>Start Rp. 16,000</p>
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

          {/* SERVICE 2 */}

          <div
            className="box-home"
            style={{
              width: "300px",
              height: "380px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "30px",
                padding: "5px",
                backgroundColor: "#B8901A",
                borderRadius: "5px",
                color: "white",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>Design Architect</p>
            </div>

            <img
              src={design}
              alt="Service 1"
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
                  top: "75%",
                  left: "0",
                }}
              />
              <div
                className="wrap-price d-flex justify-content-between align-items-center"
                style={{
                  marginTop: "30px",
                }}
              >
                <p style={{ margin: 0 }}>Start Rp. 150,000</p>
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

          {/* SERVICE 3 */}

          <div
            className="box-home"
            style={{
              width: "300px",
              height: "380px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "30px",
                padding: "5px",
                backgroundColor: "#B8901A",
                borderRadius: "5px",
                color: "white",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>Photography</p>
            </div>

            <img
              src={ceremonial}
              alt="Service 1"
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
                  top: "75%",
                  left: "0",
                }}
              />
              <div
                className="wrap-price d-flex justify-content-between align-items-center"
                style={{
                  marginTop: "30px",
                }}
              >
                <p style={{ margin: 0 }}>Start Rp. 250,000</p>
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

          {/* SERVICE 4 */}

          <div
            className="box-home"
            style={{
              width: "300px",
              height: "380px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "30px",
                padding: "5px",
                backgroundColor: "#B8901A",
                borderRadius: "5px",
                color: "white",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>Videography</p>
            </div>

            <img
              src={reels}
              alt="Service 1"
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
                  top: "75%",
                  left: "0",
                }}
              />
              <div
                className="wrap-price d-flex justify-content-between align-items-center"
                style={{
                  marginTop: "30px",
                }}
              >
                <p style={{ margin: 0 }}>Start Rp. 325,000</p>
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
        </div>
      </div>
      <div className="section"></div>
      <div
        className="wrap-content"
        style={{ padding: "50px 100px", textAlign: "center" }}
      >
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
