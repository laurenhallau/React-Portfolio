import React from "react";
// import { Document, Page, pdfjs } from 'react-pdf';

// import resume2 from '../images/resume2.pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="resume">
    <p className="Intro">
      <h3>Lauren W Hallau</h3>
      <p>Phone: 952-220-9484 | Email: lhallau@gmail.com</p>
      <a href="https://www.linkedin.com/in/lauren-hallau-82393744/" 
      target="_blank" 
      rel="noopener noreferrer">LinkedIn </a> 
      <a href="https://github.com/laurenhallau"
      target="_blank" 
      rel="noopener noreferrer" > Github</a>
      <a href="https://laurenhallau.github.io/Responsive-Portfolio/" 
      target="_blank" 
      rel="noopener noreferrer"> Portfolio</a></p>
      <br></br>

      <h4>Summary</h4>
      <p>
      Full Stack Web Developer with an extensive background in Elementary 
      Education looking for and life-long dedication to learning and teaching. 
      Effective at combining creativity and problem solving to develop user-friendly 
      applications.  {" "}
      </p>

      <h4>Developing Technical Skills</h4>
      <p>Browser Based Technologies: HTML, CSS, JavaScript,  jQuery, Responsive Design, Bootstrap, Handlebars, Local Storage, Session Storage, IndexedDB, React.js </p>
      <p>Deployment: Heroku, Git </p>
      <p>Databases: MySQL, MongoDB </p>
      <p>Server-Side Development: Express, User Authentication, Sequelize,  MERN Stack (MongoDB, Express.js, React.js, Node.js)</p>
      <p>Quality and Performance: Unit Testing, Google Lighthouse, Webpack, PWAs (Progressive Web Apps), Service Workers</p>
      <p>Agile Development: Kanban, Project Management, Issues, User Stories, Standup
      </p>
      

      <h4>Projects</h4>
      <h5>Workday Scheduler </h5>
      <p>
        Application allowing user to input data into a calendar, which is color
        coded based on current time Developed all aspects of the application
        HTML, CSS, Bootstrap, JavaScript
      </p>

      <h5>Travel Master </h5>
      <p>
        Application allowing the user to get valuable information (weather, fun
        facts, map) about a location. Group project involving framework, Agile
        methodology, GIT, front-end and back-end development. Personally built
        the REST Countries v1 API to gather data about the country searched.
        jQuery, AJAX. OpenWeather, RESTCountries, and GoogleMaps APIs.
        Foundation framework.{" "}
      </p>

      <h5> Quiz Game </h5>
      <p>
        {" "}
        Full-stack application allowing user to take and create quizzes
        Developed all aspects of the application CSS, Materialize, JavaScript,
        MySQL, Node.js, Sequelize, Handlebars
      </p>

      <h4>Experience</h4>
      <h5>Kindergarten Teacher </h5>
      <p>Breck School, Minneapolis, MN</p>
      <p>St Peter’s School, Delano, MN </p>
      <p>
        Worked successfully as a Minnesota licensed teacher in two private
        schools in the Minneapolis area.{" "}
      </p>

      <h5>Director of Communications, Learning & Development </h5>
      <p> Devanadi School of Yoga, Minneapolis, MN </p>
      <p> Spirit of the Lake Yoga, Excelsior, MN </p>
      <p>
        Coordinated, implemented and maintained the online presence via website
        WordPress, Constant Contact, and MBO.{" "}
      </p>

      <h4>Education</h4>
      <h5>Bootcamp Certificate: University of Minnesota, St Paul, MN </h5>
      <p>
        A 24-week intensive program focused on gaining technical programming
        skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js,
        MySQL, MongoDB, Express, Handelbars.js & ReactJS.{" "}
      </p>
      <p>
        B.S Elementary Education & Spanish Education: Minnesota State, Moorhead,
        MN
      </p>

      <p> M.A. Curriculum & Development: St Thomas, Minneapolis, MN</p>

      <p> B2 (CEFR) Certification: EAFIT, Medellin, Colombia</p>

      <p>500 Hour Yoga Therapist: Spirit of the Lake, Excelsior, MN</p>
    </div>
  );
}

export default Resume;

// export default class Resume extends Component {
//   render() {
//     return (
//       <Document className="resumePDF"
//         file={resume2}
//         onLoadSuccess={this.onDocumentLoadSuccess}
//       >
//      <Page  pageNumber={1} />
//       </Document>
//     );
//   }
// }
