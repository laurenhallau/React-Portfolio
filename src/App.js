import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../src/pages/About";
import NavTabs from "./components/NavTabs";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
