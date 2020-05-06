import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import NavTabs from "./components/NavTabs";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
