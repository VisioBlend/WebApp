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

import logo from "./../assets/logo.png"
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <style>
        {`
          //atur @media nya 
        `}
      </style>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="justify-content-center shadow"
      >
        <div className="container-fluid mx-5 d-flex justify-content-between align-items-center">
          <div className="logo-brand">
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="60"
                className="d-inline-block align-top "
                alt="Logo"
              />
            </Navbar.Brand>
          </div>
          <div className="nav-links">
            <Nav className="mr-auto ">
              <Nav.Link
                href="/"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname == '/' ? "#B8901A" : "#000", 
                  fontWeight: pathname == '/' ? "bold" : "",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname == '/services' ? "#B8901A" : "#000", 
                  fontWeight: pathname == '/services' ? "bold" : "",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/portfolio"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname == '/portfolio' ? "#B8901A" : "#000", 
                  fontWeight: pathname == '/portfolio' ? "bold" : "",
                }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: "black",
                }}
              >
                Article
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{ fontFamily: "Poppins, sans-serif", color: "black" }}
              >
                Loyalty Rewards
              </Nav.Link>
            </Nav>
          </div>
          <div className="sign-in-sign-up d-flex justify-content-center">
            <Button
              variant="outline-primary"
              className="btn btn-primary btn-block p-2 mx-2 rounded-0"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "white",
                border: "1px solid #B8901A",
                color: "black",
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="primary"
              className="btn btn-primary btn-block p-2 mx-2 rounded-0"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "#B8901A",
                border: "none",
                color: "white",
                width: "80px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Navbar>

      
    </>
  );
};

export default Header;
