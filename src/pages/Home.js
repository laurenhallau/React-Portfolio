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
            Hello and welcome to my website! A little about me! I have an
            extensive background in education, a love of languages, and a strong
            interest in creating meaningful work.
          </p>
          <br />
          <p>
            {" "}
            I bring a unique skill set and experience to the world of full-stack
            web development. Ultimately I would like to combine my experience in
            education with my knowledge of computer programs and apply that to
            creating the best experience for our learners and teachers.
          </p>
          <p>
            ¡Hola y bienvenidos a mi sitio web! ¡Un poco sobre mí! Yo tengo un
            experiencia ampliaen educación, amor por los idiomas y
          gran interés en crear trabajo significativo. Aporto un conjunto de habilidades 
          y experiencia únicas al mundo del full-stack desarrollo web. En última instancia, me gustaría
            combinar mi experiencia en educación con mi conocimiento de programas de computadora y aplicar eso a
          creando la mejor experiencia para nuestros alumnos y
            profesores.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
