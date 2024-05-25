import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
                Full Stack Developer
              </h1>
              <p>
               Hi,<span>
                  <img src="assets/wave hand.png" />
                </span>
                <br />
                I am Dinesh Patil. Passionate Aspiring Full Stack Developer.
               <br/>
               Feel Free to connect with me.
              </p>
              <div className="profile-links">
                <a href="https://github.com/Dinesh-Patil01">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/dinesh-patil-6001d/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <img id="profile" src="assets/profile.jpeg" alt="profile" />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
