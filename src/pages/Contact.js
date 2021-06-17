import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiGithub } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="container .p-3 col-sm-6 col-md-4">
      <h3>CONTACT:</h3>
      <section className="container .p-3" id="icons">
        <p><a href="https://github.com/mandellbutler"><SiGithub size={40} /></a></p>
        <p><a href="https://www.linkedin.com/in/mandellbutler/"><AiOutlineLinkedin size={45} /></a></p>
      </section>
      <form id="contact" className="contact-form">
        <div>
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
      </form>
    </div>
  );
}

export default Contact;