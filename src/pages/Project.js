import React from 'react';
import projects from '../projects';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css'
// import { Button } from '@material-ui/core';


function Project() {
  return (
    <div id="work" class="container portfolio">
      {projects.map((project) => {

        return (
          <section class="card text-white m-1">
            <div class="card-header">{project.title}</div>
            <figure class="card-body project-image">
              <a href={project.href} target="_blank" rel="noreferrer">
                <img src={project.image.src} alt={project.image.alt}></img>
              </a>
            </figure>
            {/* <Button color="primary" variant="contained">Text</Button> */}
          </section>
        )
      }
      )}
    </div>
  );
}

export default Project;