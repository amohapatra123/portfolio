import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const show = menu ? "show" : "";

  return (
    <>
      <Container fluid={true} id="nav">
        <Row>
          <Col>
            <nav
              className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
              id="nav"
            >
              <a className="navbar-brand" href="/">
                <img src={require("../assets/am-logo.png")} alt="" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={"collapse navbar-collapse " + show}>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={toggleMenu}>
                      <h4>About</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills" onClick={toggleMenu}>
                      <h4>Skills</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#courses"
                      onClick={toggleMenu}
                    >
                      <h4>Courses</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#projects"
                      onClick={toggleMenu}
                    >
                      <h4>Projects</h4>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#contact"
                      onClick={toggleMenu}
                    >
                      <h4>Contact</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
}
