import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiGithub } from 'react-icons/si';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h3>CONTACT:</h3>
        <section className=".p-3" id="icons">
          <p className="d-flex flex-column align-items-center">
            <a href="mailto:mandell.butler@outlook.com"><AiOutlineMail size={100} /></a>
            Email
          </p >
          <p className="d-flex flex-column align-items-center"><a href="https://github.com/mandellbutler"><SiGithub size={100} /></a>
            Github
          </p>
          <p className="d-flex flex-column align-items-center"><a href="https://www.linkedin.com/in/mandellbutler/"><AiOutlineLinkedin size={100} /></a>
            LinkedIn
          </p>
        </section >
        {/* <form id="contact" className="contact-form">
          <div className="contact-form">
            <label>Name:</label>
            <input name="fullName" id="name" type="text" placeholder="First & Last Name"></input>
          </div>
          <div>
            <label>Email:</label>
            <input name="email" id="email" type="text" placeholder="johndoe@example.com"></input>
          </div>
          <div>
            <label>Comment:</label>
            <textarea className="form-row" id="comment"
              placeholder="Let's Connect! Please leave a message!"></textarea>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <button className="btn btn-secondary btn-sm" type="submit">Submit</button>
          </div>
        </form> */}
      </div >
    </div>
  );
}

export default Contact;