import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>
        <div className="all-projects">
          <div className="project-reverse">
            <div className="project-text">
              <h3>PharmEasy</h3>
              <p className="project-desc">
              PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products.
              </p>
              <div className="project-stack">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/Dinesh-Patil01/project-1/tree/main/pharmaeasy" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://661bf8272a203283c3a4b091--playful-froyo-3f55e2.netlify.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href="https://661bf8272a203283c3a4b091--playful-froyo-3f55e2.netlify.app/"
                target="_blank"
              >
                <img src="assets/pharma.png" alt="pharmaEasy-app" />
              </a>
            </div>
          </div>



          <div className="project">
            <div className="project-img">
              <a href="https://myntra-clone-coral-sigma.vercel.app/" target="_blank">
                <img src="assets/myntra.png" alt="Myntra" />
              </a>
            </div>
            <div className="project-text">
              <h3>Myntra</h3>
              <p className="project-desc">
              About Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India. The company was founded in 2007 to sell personalized gift items. In May 2014, Myntra.com was acquired by Flipkart.
              </p>
              <div className="project-stack">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Dinesh-Patil01/Myntra-clone"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://myntra-clone-coral-sigma.vercel.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>




          <div className="project-reverse">
            <div className="project-text">
              <h3>FITFINITY GYM CENTER</h3>
              <p className="project-desc">
                A gym website is a comprehensive resource for fitness
                information, class schedules, membership options, and tools to
                help users achieve their fitness goals.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/Dinesh-Patil01/fitfinity-clone" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://fitfinity-clone.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href="https://fitfinity-clone.vercel.app/"
                target="_blank"
              >
                <img src="assets/Fitfinity.png" alt="fitfinity-gym-center" />
              </a>
            </div>
          </div>



          <div className="project">
            <div className="project-img">
              <a href="https://bo-at-clone-eight.vercel.app/" target="_blank">
                <img src="assets/boat.png" alt="Boat" />
              </a>
            </div>
            <div className="project-text">
              <h3>BoAT</h3>
              <p className="project-desc">
                BoAt sell the breathtaking collection of Earbuds, Headphones, Earphones & Wireless Speakers with contemporary designs and best features from India’s No.1 Earwear Audio Brand - boAt Lifestyle.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>Javascript</p>
                <p>CSS</p>
                <p>Chakra UI</p>
                <p>Vite</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Dinesh-Patil01/BoAt-Clone"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://bo-at-clone-eight.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
