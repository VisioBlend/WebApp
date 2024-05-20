import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import logo from "./../assets/logo-white.png"

const Footer = () => {
    return (
        <>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px 50px 20px",
        marginTop: "20%",
        backgroundColor: "#B8901A",
      }}
    >
      <div
        style={{
          flexBasis: "20%",
          position: "relative",
          paddingRight: "20px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "80%", cursor: "pointer" }}
        />
        <p
          style={{
            textAlign: "justify",
            fontSize: "12px",
            fontFamily: "Poppins, sans-serif",
            color: "white",
            marginBottom: "20px",
            cursor: "default",
          }}
        >
          VisioBlend adalah platform digital yang bergerak di bidang, desain,
          fotografer, dan videografer profesional dengan klien di Provinsi
          Bali. Kami menawarkan solusi terpadu untuk kebutuhan desain,
          fotografi, dan videografi, dengan fokus pada fleksibilitas,
          kualitas, dan efisiensi.
        </p>

        <div
          style={{
            position: "absolute",
            top: "0",
            right: "-10px",
            width: "1px",
            height: "100%",
            backgroundColor: "white",
            content: "",
          }}
        ></div>
      </div>
      <div
        style={{
          flexBasis: "20%",
          display: "block",
          marginLeft: "5%",
        }}
      >
        <h6
          style={{
            color: "#FFDC73",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            margin: "0 0 20px 0",
            cursor: "default",
          }}
        >
          Our Company
        </h6>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          About Us
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Partners & Team
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Contact Us
        </a>
      </div>
      <div
        style={{
          flexBasis: "20%",
          paddingRight: "20px",
        }}
      >
        <h6
          style={{
            color: "#FFDC73",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            margin: "0 0 20px 0",
            cursor: "default",
          }}
        >
          Services
        </h6>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Design Marketing
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Design Architecture
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Photography
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Videography
        </a>
      </div>
      <div
        style={{
          flexBasis: "20%",
          paddingRight: "20px",
        }}
      >
        <h6
          style={{
            color: "#FFDC73",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            margin: "0 0 20px 0",
            cursor: "default",
          }}
        >
          Features
        </h6>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Portfolio
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Article
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Loyalty Rewards
        </a>
      </div>
      <div
        style={{
          flexBasis: "20%",
          color: "white",
        }}
      >
        <h6
          style={{
            color: "#FFDC73",
            fontWeight: "bold",
            textAlign: "left",
            fontFamily: "Poppins, sans-serif",
            margin: "0 0 20px 0",
            cursor: "default",
          }}
        >
          Contact Us
        </h6>
        <p
          style={{
            textAlign: "left",
            fontFamily: "Poppins, sans-serif",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faPhone}
            style={{ marginRight: "5px", color: "white" }}
          />{" "}
          +62 8964 2365 0698
        </p>
        <p
          style={{
            textAlign: "left",
            fontFamily: "Poppins, sans-serif",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginRight: "5px", color: "white" }}
          />{" "}
          visioblend@gmail.com
        </p>
        <div
          style={{
            margin: "10% 0 0 15%",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ margin: "0 5%", color: "white", fontSize: "25px" }}
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            style={{ margin: "0 5%", color: "white", fontSize: "28px" }}
          />
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ margin: "0 5%", color: "white", fontSize: "25px" }}
          />
        </div>
      </div>
    </div>
    <div
      style={{
        backgroundColor: "#846815",
        textAlign: "center",
        color: "white",
        padding: "10px",
      }}
    >
      2024 © Batavia Guardians | All Rights Reserved
    </div>
    </>
    )
}

export default Footer;