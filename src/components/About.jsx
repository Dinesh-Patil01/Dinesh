import React from "react";

const About = () => {
  return (
    <div className="container">
      <section className="about" id="about">
        <img src="assets/about.jpg"/>
        <div className="about-text">
          <h3>ABOUT ME</h3>
          <p>
            I am an enthusiastic and aspiring Full Stack Developer with a strong foundation in front-end development and an ongoing commitment to mastering back-end technologies. My journey in the world of web development began with a deep dive into HTML, CSS, and JavaScript, where I honed my skills in creating responsive, user-friendly, and visually appealing web interfaces. With a passion for coding and problem-solving, I have successfully completed various projects that demonstrate my ability to turn ideas into functional and aesthetically pleasing digital experiences.
          </p>
          <p>
            Currently, I am expanding my expertise to include back-end development, focusing on technologies such as Node.js, Express.js, and databases like MongoDB and SQL. 
          </p>
          <p>
            My goal is to become a versatile full stack developer capable of handling both client-side and server-side development with equal proficiency.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
