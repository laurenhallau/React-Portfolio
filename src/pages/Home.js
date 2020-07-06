import React from "react";
import ProfilePic from "../images/lwh.jpg";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={ProfilePic} alt="Lauren Hallau Pic"></img>
        </div>
        <div className="col-8" >
          <p>
            Hello and welcome! A little about me! Lifelong-learner with an
            extensive background in education, a lover of languages, and a strong
            interest in creating meaningful work.
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
