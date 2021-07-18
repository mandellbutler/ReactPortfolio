import React from 'react';
import projects from '../projects';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css'
// import { Button } from '@material-ui/core';


function Project() {
  return (
    <div id="work" className="container portfolio">
      {projects.map((project) => {

        return (
          // <section className="card text-white m-1" key={project.href}>
          //   <div className="card-header">{project.title}</div>
          //   <figure className="card-body project-image">
          //     <a href={project.href} target="_blank" rel="noreferrer">
          //       <img src={project.image.src} alt={project.image.alt}></img>
          //     </a>
          //   </figure>
          //   {/* <Button color="primary" variant="contained">Text</Button> */}
          // </section>
          <div>
            <div className="card text-white m-1" key={project.href}>
              <figure className="project-image">
                <img src={project.image.src} alt={project.image.alt}></img>
              </figure>
              <div className="container">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.github} target="_blank" rel="noreferrer" className="card-link">Github</a>
                <a href={project.live} target="_blank" rel="noreferrer" className="card-link">Live</a>
              </div>
            </div>
          </div>
        )
      }
      )}
    </div>
  );
}

export default Project;