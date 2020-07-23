import React from "react";
import { Card, CardImg, CardTitle, CardText, Button, Col } from "reactstrap";
import Project1 from "../images/project1.png";
import QuizGame from "../images/quizgame.png";
import Employee from "../images/employee.png";
import NoteTaker from "../images/notetaker.png";
import Workout from "../images/workout.png";
// import Budget from "../images/budget.png";
import "./style.css";
import SugarRush from "../images/sugarrush.png";

function Projects() {
  return (
    <row className="projectRow">
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Project1} alt="Project One" />
          <CardTitle className="cardTitle">Travel Masters</CardTitle>
          <CardText className="cardText">A travel application where users search a location to get current weather, interesting facts, and map data on places they are visiting. Utilizing REST and Google Maps API's, the Foundation CSS framework, HTML, JavaScript and jQuery.</CardText>
          <Button className="button"
          outline color="secondary"
          href="https://github.com/stevekindt/Project-1"
          target="_blank"
          >GitHub Repository</Button>
          
          <Button className="button"
          outline color="secondary"
          href="https://stevekindt.github.io/Project-1/"
          target="_blank"
          >Deployed App</Button>
        </Card>
      </Col>
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={QuizGame} alt="Quiz Game" />
          <CardTitle className="cardTitle">Quiz Game</CardTitle>
         <CardText className="cardText">A full-stack quiz game application where users create and take quizzes. Utilizes a mySQL database, Node and Express, and the Materialize framework.</CardText>
         
         <Button className="button"
         outline color="secondary"
          href="https://github.com/kelly-bazella/Project-2"
          target="_blank"
         >GitHub Repository</Button>
         <Button className="button"
         outline color="secondary"
          href="https://gold-team-quiz.herokuapp.com/"
          target="_blank"
         >Deployed App</Button>
        </Card>
      </Col>

      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={SugarRush} alt="Budget Tracker" />
          <CardTitle className="cardTitle">Sugar Rush</CardTitle>
         <CardText className="cardText">A full-stack food delivery application that connects users with their favorite local desserts. Built using the MERN stack, passport authentication, and the Materialize framework.</CardText>
         <Button className="button"
         outline color="secondary"
          href="https://github.com/laurenhallau/Sugar-Rush"
          target="_blank"
         >GitHub Repository</Button>
         <Button className="button"
         outline color="secondary"
          href="https://sugar-gold-rush.herokuapp.com/"
          target="_blank"
         >Deployed App</Button>
        </Card>
      </Col>

      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Employee} alt="Employee Directory" />
          <CardTitle className="cardTitle">Employee Directory</CardTitle>
         <CardText className="cardText">My first React App! Created an employee directory with React; Breaking up the application's UI into components, managing component state, and responding to user events.</CardText>
         <Button className="button"
         outline color="secondary"
          href="https://github.com/laurenhallau/Employee-Directory"
          target="_blank"
         >GitHub Repository</Button>
         <Button className="button"
         outline color="secondary"
          href="https://employee-directory-lwh.herokuapp.com/"
          target="_blank"
         >Deployed App</Button>
        </Card>
      </Col>

      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={NoteTaker} alt="Note Taker" />
          <CardTitle className="cardTitle">Note Taker</CardTitle>
          <CardText className="cardText">An Express Note Taker application that allows users to write, save, and delete notes. Built using Bootstrap CSS framework. This application uses an express backend and saves and retrieves note data from a JSON file.</CardText>
          <Button className="button"
          outline color="secondary"
          href="https://github.com/laurenhallau/Note-Taker"
          target="_blank"
          >GitHub Repository</Button>
          <Button className="button"
          outline color="secondary"
          href="https://note-taker-lwh.herokuapp.com/"
          target="_blank"
          >Deployed App</Button>

          
        </Card>
      </Col>
      
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Workout} alt="Workout Tracker" />
          <CardTitle className="cardTitle">Workout App</CardTitle>
         <CardText className="cardText">A fitness tracker application made with a Mongo database, Mongoose schema and Express handle routes.</CardText>
         <Button className="button"
         outline color="secondary"
          href="https://github.com/laurenhallau/Workout-Tracker"
          target="_blank"
         >GitHub Repository</Button>
         <Button className="button"
         outline color="secondary"
          href="https://quarantine-workout-app.herokuapp.com/"
          target="_blank"
         >Deployed App</Button>
         
        </Card>
      </Col>
    </row>
    
  );
}   
export default Projects;
