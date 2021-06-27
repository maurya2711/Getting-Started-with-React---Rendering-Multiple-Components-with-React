import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [project, setProject] = useState("Dream 11");
  return (
    <div id="main">
      <h1 data-ns-test="project-name">{project}</h1>

      <p data-ns-test="project-description">
        provides a fantasy gaming platform for multiple sports such as cricket,
        football, basketball, kabaddi, hockey, volleyball, handball and
        baseball. It is an online game where users create a virtual team of
        real-life players and earn points based on the performances of these
        players in real matches.
      </p>
    </div>
  );
};

export default App;
