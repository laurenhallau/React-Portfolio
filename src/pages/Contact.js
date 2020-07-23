import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

function Contact() {
    return (
        <Container className="ContactContainer">
          <Row className="Row">
            <Col>
              <h4>Contact Me:</h4>
              <ul>
                <li><i className="far fa-envelope"></i> 
                <a className="link" href="mailto:lhallau@gmail.com">Email </a></li>
                <li><i className="fab fa-github"></i>
                <a className="link" href="https://github.com/laurenhallau" target="blank">GitHub </a></li>
                <li><i className="fab fa-linkedin-in"></i>
                <a className="link" href="https://www.linkedin.com/in/lauren-hallau-82393744/" target="blank">LinkedIn</a></li>
              </ul>

            </Col>
          </Row>
        </Container>
    );
}

export default Contact;