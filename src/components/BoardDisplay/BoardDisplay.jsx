import React, { useState } from "react";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";

const BoardDisplay = ({ board }) => {
  
  const [ finishedProjects, setFinishedProjects ] = useState(board.finishedProjects);
  const [ activeProjects, setActiveProjects ] = useState(board.activeProjects);

  const updateProjects = (board) => () => {
    setFinishedProjects(board.finishedProjects);
    setActiveProjects(board.activeProjects);
  }

  const renderProject = (project) => (
    <ProjectDisplay
      key={project.id}
      project={project}
      updateProjects={updateProjects(board)}
    />
    );
  
  return (
    <>
      <section id="active-projects">
        <header>
          <h2>Active Projects</h2>
        </header>
        <ul>
          {activeProjects.map(renderProject)}
        </ul>
      </section>
      <section id="finished-projects">
        <header>
          <h2>Finished Projects</h2>
        </header>
        <ul>
          {finishedProjects.map(renderProject)}
        </ul>
      </section>
    </>
  )
}

export default BoardDisplay;