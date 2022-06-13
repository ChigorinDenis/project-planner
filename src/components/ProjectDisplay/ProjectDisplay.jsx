import React, { useState } from "react";

const ProjectDisplay = ({ project, updateProjects }) => {
  const {
    id,
    title,
    text,
    moreInfo,
    status
  } = project;

  const [show, setShow] = useState(false);
  
  return (
    <li
      key={id}
      id={id}
      className="card"
    >
      <h2>{title}</h2>
      <p>{text}</p>
      {show && 
        <p>
          <b>More Info: </b>
          {moreInfo}
        </p>}
        <button
          className="alt"
          onClick={() => {  
            setShow(!show);
          }}>
          More Info
        </button>
        {status === 'active' ? 
          <button
            onClick={() => {
              project.finish()
              updateProjects();
          }}
          >
            Finish
          </button> :
          <button
            onClick={() => {
              project.activate()
              updateProjects();
          }}
          >
            Activate
          </button>}
      </li>
  );
}

export default ProjectDisplay;