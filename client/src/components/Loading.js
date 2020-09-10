import React, { Component } from "react";
import "../styles/loading.css";
import { Spinner, Container, Row, Col } from "reactstrap";
export default class Loader extends Component {
  render() {
    return (
      <Container id="load">
        <Row>
          <Col md={{ size: 1 }} id="loading">
            <Spinner color="warning" />
          </Col>
          <Col md={{ size: 7 }}>
            <h2> Loading....</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
