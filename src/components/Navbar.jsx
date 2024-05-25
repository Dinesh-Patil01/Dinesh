import React, { useState } from "react";

const Navbar = () => {
  // Set Navbar background when scrolling down
  const [navBg, setNavBg] = useState("");
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavBg("nav-bg");
    } else {
      setNavBg("");
    }
  };
  window.addEventListener("scroll", handleScroll);

  // Set Navbar on mobile
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  const fileID = '10Q7Qi60hw5-z9EIu3mGGiDpNo51qa1o9';
  const viewLink = `https://drive.google.com/file/d/${fileID}/view?usp=sharing`;
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;

  return (
    <>
      <nav>
        {/* Desktop */}
        <div className={`navbar ${navBg}`}>
          <div className="navbar_logo">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <h1>Dinesh Patil</h1>
            </a>
          </div>

          <ul className="navbar__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href={viewLink} target="_blank" rel="noopener noreferrer"> Resume</a>
            </li>
            <li>
              <a href={downloadLink} download="Resume.pdf"><i class="fa-solid fa-download"></i></a>
            </li>

          </ul>

          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* Mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div className="mobile-navbar-close" onClick={openNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a onClick={openNav} href={viewLink} target="_blank" rel="noopener noreferrer"> Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
