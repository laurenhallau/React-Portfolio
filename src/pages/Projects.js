import React from "react";
import { Card, CardImg, CardTitle, CardText, Button, Row, Col } from "reactstrap";
import Project1 from "../images/project1.png";
import QuizGame from "../images/quizgame.png";
import Employee from "../images/employee.png";
import NoteTaker from "../images/notetaker.png";
import Workout from "../images/workout.png";
import Budget from "../images/budget.png";
import "./style.css";

function Projects() {
  return (
    <Row className="projectRow">
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Project1} alt="Project One" />
          <CardTitle>Project #1</CardTitle>
          <CardText>Travel Masters: Bringing the World to You!</CardText>
          <Button 
          outline color="secondary"
          href="https://github.com/stevekindt/Project-1"
          target="_blank"
          >See More</Button>
        </Card>
      </Col>
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={QuizGame} alt="Quiz Game" />
          <CardTitle>Project #2</CardTitle>
         <CardText>Quiz Game: Create and Take Quizzes with this full-stack app</CardText>
         <Button
         outline color="secondary"
          href="https://gold-team-quiz.herokuapp.com/"
          target="_blank"
         >See More</Button>
        </Card>
      </Col>
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Employee} alt="Employee Directory" />
          <CardTitle>Employee Directory</CardTitle>
         <CardText>First React App</CardText>
         <Button
         outline color="secondary"
          href="https://employee-directory-lwh.herokuapp.com/"
          target="_blank"
         >See More</Button>
        </Card>
      </Col>

      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={NoteTaker} alt="Note Taker" />
          <CardTitle>Note Taker</CardTitle>
          <CardText>An Express Note Taker App</CardText>
          <Button
          outline color="secondary"
          href="https://note-taker-lwh.herokuapp.com/"
          target="_blank"
          >See More</Button>
        </Card>
      </Col>
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Budget} alt="Budget Tracker" />
          <CardTitle>On/Offline Budget Tracker</CardTitle>
         <CardText>Use this budget tracker to track your expenses on and off line.</CardText>
         <Button
         outline color="secondary"
          href="https://budget-tracker-lwh.herokuapp.com/"
          target="_blank"
         >See More</Button>
        </Card>
      </Col>
      <Col className="col-6">
        <Card className="card">
          <CardImg className="CardImg" src={Workout} alt="Workout Tracker" />
          <CardTitle>Workout App</CardTitle>
         <CardText>A fitness tracker application made with a Mongo database, Mongoose schema and Express handle routes</CardText>
         <Button
         outline color="secondary"
          href="https://quarantine-workout-app.herokuapp.com/"
          target="_blank"
         >See More</Button>
        </Card>
      </Col>
    </Row>
    
  );
}   
export default Projects;
