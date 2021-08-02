import React from 'react';
// Here we are importing a CSS file as a dependency
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'

function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact">
          <h3>CONTACT:</h3>
          <section className="contact-icons-container">
            <p id="email-icon" className="contact-icons">
              <a href="mailto:mandell.butler@outlook.com"><i className="far fa-envelope"></i></a>
              Email
            </p >
            <p className="contact-icons">
              <a href="https://github.com/mandellbutler"><i id="github-icon" className="fab fa-github"></i></a>
              Github
            </p>
            <p id="linkedin-icon" className="contact-icons"><a href="https://www.linkedin.com/in/mandellbutler/"><i className="fab fa-linkedin-in"></i></a>
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
    </div>
  );
}

export default Contact;