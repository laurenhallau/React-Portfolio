import React from "react";
import { Container, Row, Col } from "reactstrap";

function Contact() {
    return (
        <Container className="ContactContainer">
          <Row>
            <Col>
              <h3>Contact:</h3>
              <h4>I look forward to hearing from you!</h4>
              <ul>
                <li><a className="email" href="mailto:lhallau@gmail.com">Email </a></li>
                <li>GitHub</li>
                <li>LinkedIn</li>
              </ul>

            </Col>
          </Row>
        </Container>
    );
}

export default Contact;