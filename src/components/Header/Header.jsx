import React, { useState } from "react";
import styles from "./HeaderStyle.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id={styles.desktopNav}>
        <div className={styles.logo}>Zaky Aly</div>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id={styles.navMenu}>
        <div className={styles.logo}>Zaky Aly</div>
        <div className={styles.dropdownMenu}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <ul className={`${styles.menuLinks} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#courses" onClick={toggleMenu}>
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
