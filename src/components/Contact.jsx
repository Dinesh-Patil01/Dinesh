import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact"> 
      <div className="container">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <div className="contact-details">
            <img src="assets/mobile.png" />
            <a href="tel:9644636001">+91 9644636001</a>
          </div>
          <div className="contact-details">
            <img src="assets/email.png" />
            <a href="dineshpatil9644@gmail.com">
            dineshpatil9644@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
