import React from "react";
// import { Document, Page, pdfjs } from 'react-pdf';

// import resume2 from '../images/resume2.pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="resume">
      <h3>Lauren W Hallau</h3>
      <p>Phone: 952-220-9484 | Email: lhallau@gmail.com</p>
      <p> LinkedIn: https://www.linkedin.com/in/lauren-hallau-82393744/</p>
      <p> Github: https://github.com/laurenhallau</p>
      <p>Portfolio: https://laurenhallau.github.io/Responsive-Portfolio/</p>

      <h4>Summary</h4>
      <p>
        Full Stack Web Developer with a background in Elementary Education and
        life-long dedication to learning. Effective at combining creativity and
        problem solving to develop user-friendly applications. Known among staff
        for strong wit and attention to detail no matter the complexity of the
        project.{" "}
      </p>

      <h4>Developing Technical Skills</h4>
      <p>Languages: HTML, CSS, JavaScript, jQuery, Sequelize, Handlebars</p>
      <p> Tools:: Node.js, Bootstrap, Foundation, MySQL, MongoDB, React</p>

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
