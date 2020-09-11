import React, { Component } from "react";
import "../styles/main.css";
import Navbar from "../components/Navbar";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Button,
  CardLink,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Course, Specialisation } from "../utils/course";
import axios from "axios";
export default class Main extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    const { name, email, phone, message } = this.state;
    const request = {
      name,
      email,
      phone,
      message,
    };
    axios
      .post("http://anshuman-mohapatra.herokuapp.com/api/contact", { request })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { name, email, phone, message } = this.state;
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
          <h1>Skills I a'm Proud of</h1>
          <Row>
            <Col md={{ size: 6, order: 1 }} xs={{ size: 12, order: 2 }}>
              <img
                src={require("../assets/skill.svg")}
                alt="skill"
                id="skill-img"
              />
            </Col>
            <Col md={{ size: 6, order: 2 }} xs={{ size: 12, order: 1 }}>
              <Row>
                <Col md={{ size: 6 }} xs={{ size: 12 }} id="icons">
                  <span>
                    <img
                      src={require("../assets/html.svg")}
                      alt="html"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                  <span>
                    <img
                      src={require("../assets/css.svg")}
                      alt="css"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                  <span>
                    <img
                      src={require("../assets/js.svg")}
                      alt="js"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                  <span>
                    <img
                      src={require("../assets/bootstrap.svg")}
                      alt="bootstrap"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                </Col>
                <Col md={{ size: 6 }} xs={{ size: 12 }} id="icons">
                  <span>
                    <img
                      src={require("../assets/react.svg")}
                      alt="bootstrap"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                  <span>
                    <img
                      src={require("../assets/php.svg")}
                      alt="php"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                  <span>
                    <img
                      src={require("../assets/nodejs.svg")}
                      alt="nodejs"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                  <span>
                    <img
                      src={require("../assets/git.svg")}
                      alt="git"
                      class="skill"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                    <img
                      src={require("../assets/star.png")}
                      alt=""
                      class="star"
                    />
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} id="courses">
          <h1>Courses that have helped me a lot</h1>
          <h2>Specializations:</h2>
          <Row>
            <Col md={{ size: 3 }} xs={{ size: 12 }} key={Specialisation.id}>
              <Card id="card">
                <CardImg
                  src={require("../assets/coursera.jfif")}
                  alt=""
                  id="course-img"
                />
                <CardBody id="c-body">
                  <h5>{Specialisation.name}</h5>
                  <p>{Specialisation.by}</p>

                  <CardLink href={Specialisation.link}>
                    <Button color="light" block>
                      View Certificate
                    </Button>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <h2>Courses:</h2>
          <Row>
            {Course.map((item) => {
              return (
                <>
                  <Col md={{ size: 3 }} xs={{ size: 12 }} key={item.id}>
                    <Card id="card">
                      <CardImg
                        src={require("../assets/coursera.jfif")}
                        alt=""
                        id="course-img"
                      />
                      <CardBody id="c-body">
                        <h5>{item.name}</h5>
                        <p>{item.by}</p>
                        <span>
                          <strong>GRADE</strong>:{`${item.grade}%`}
                        </span>
                        <br />
                        <CardLink href={item.link}>
                          <Button color="light" block>
                            View Certificate
                          </Button>
                        </CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
        <Container fluid={true} id="projects">
          <h1>Some Projects I have done</h1>
          <Row id="p-row">
            <Col md={{ size: 3 }} xs={{ size: 12 }} class="p-col">
              <span class="p-span">
                <a href="https://firsttome.in/">
                  <img src={require("../assets/p1.png")} alt="" />
                </a>
              </span>
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} class="p-col">
              <span class="p-span">
                <a href="https://bustorwin.com/">
                  <img
                    src={require("../assets/p2.png")}
                    alt=""
                    className="mt-5"
                    width="50%"
                  />
                </a>
              </span>
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} class="p-col">
              <span class="p-span">
                <a href="https://docvideoappp.000webhostapp.com">
                  <img src={require("../assets/p3.png")} alt="" width="50%" />
                </a>
              </span>
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} class="p-col">
              <span class="p-span">
                <a href="https://tecguru.in/">
                  <img
                    src={require("../assets/p4.jpeg")}
                    alt=""
                    className="mt-3"
                  />
                </a>
              </span>
            </Col>
          </Row>
        </Container>
        <Container id="contact">
          <h1>Contact Me</h1>
          <Row>
            <Col md={{ size: 8, offset: 2 }} xs={{ size: 12 }}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  id="Email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Contact</Label>
                <Input
                  type="text"
                  name="phone"
                  value={phone}
                  id="phone"
                  placeholder="Contact Number"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  value={message}
                  id="message"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button color="primary" id="send" onClick={this.handleClick}>
                Send Message
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
