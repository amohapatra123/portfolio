import React, { Component } from "react";
import "../styles/main.css";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "reactstrap";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Navbar />
        </Container>

        <Container fluid={true} id="about">
          <Row>
            <Col md={{ size: 6 }} xs={{ size: 12 }}>
              <h1>Hi I'am Anshuman Mohapatra</h1>
              <p>
                A passionate Web Developer. Likes to work on User Experience &
                User Interface hence more off a Front-End Developer. Having
                experience in making Web applications using Javascript/React js
                and some libraries like Bootstrap.
              </p>
            </Col>
            <Col md={{ size: 6 }} xs={{ size: 12 }}>
              <div id="img">
                <img src={require("../assets/anshuman.jpg")} alt="" />
              </div>
              <Row id="social">
                <span>
                  <a href="https://github.com/amohapatra123">
                    <img
                      src={require("../assets/github.svg")}
                      alt="github"
                      id="github"
                    />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/anshuman-mohapatra-72374318b/">
                    <img
                      src={require("../assets/linkedin.svg")}
                      alt="linkedin"
                      id="linkedin"
                    />
                  </a>
                </span>
                <span>
                  <a href="mailto:amohapatra2001@gmail.com">
                    <img
                      src={require("../assets/gmail.svg")}
                      alt="gmail"
                      id="gmail"
                    />
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/profile.php?id=100009797476778">
                    <img
                      src={require("../assets/facebook.svg")}
                      alt="facebook"
                      id="facebook"
                    />
                  </a>
                </span>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} id="skills">
          <Row>
            <Col md={{ size: 6, order: 1 }} xs={{ size: 12, order: 2 }}>
              <img
                src={require("../assets/skill.svg")}
                alt="skill"
                id="skill-img"
              />
            </Col>
            <Col md={{ size: 6, order: 2 }} xs={{ size: 12, order: 1 }}>
              <h1>Skills I a'm Proud of</h1>
              <Row>
                <Col id="icons">
                  <span>
                    <img
                      src={require("../assets/html.svg")}
                      alt="html"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                  <span>
                    <img
                      src={require("../assets/css.svg")}
                      alt="css"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                  <span>
                    <img
                      src={require("../assets/js.svg")}
                      alt="js"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                  <span>
                    <img
                      src={require("../assets/bootstrap.svg")}
                      alt="bootstrap"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                </Col>
                <Col id="icons">
                  <span>
                    <img
                      src={require("../assets/react.svg")}
                      alt="bootstrap"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                  <span>
                    <img
                      src={require("../assets/php.svg")}
                      alt="php"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                  <span>
                    <img
                      src={require("../assets/nodejs.svg")}
                      alt="nodejs"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                  <span>
                    <img
                      src={require("../assets/git.svg")}
                      alt="git"
                      class="skill"
                    />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                    <img src={require("../assets/star.png")} class="star" />
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} id="courses">
          <Row>
            <Col>
              <h1>Courses that have helped me a lot</h1>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
