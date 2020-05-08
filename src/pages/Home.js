import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProfilePic from "../images/lwh.jpg";
import "./style.css";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="sm-4">
          <img src={ProfilePic} alt="Lauren Hallau Pic"></img>
        </Col>
        <Col size="sm-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            malesuada fames ac turpis egestas. Lacinia at quis risus sed
            vulputate odio. Diam sit amet nisl suscipit. Tempus imperdiet nulla
            malesuada pellentesque elit eget gravida cum. 
          </p>
          <br />
          <p>
            {" "}
            Imperdiet proin fermentum leo vel orci porta. Viverra
            aliquet eget sit amet. Aenean pharetra magna ac placerat vestibulum
            lectus. Tincidunt vitae semper quis lectus nulla at volutpat. Amet
            porttitor eget dolor morbi. Sit amet dictum sit amet justo donec
            enim diam. Congue eu consequat ac felis donec et odio pellentesque
            diam.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
