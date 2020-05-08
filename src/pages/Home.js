import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProfilePic from "../images/lwh.jpg";
import "./style.css";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <img src={ProfilePic}
           alt="Lauren Hallau Pic"></img>
        </Col>
        <Col size="md-8">
        <p>Developing full-stack coder with an education background.

        Wants to make a difference in the world.
        
        Fluent in Spanish, proficient in German, developing in HTML, CSS, Javascript! Enjoys languages of all types!
        </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
