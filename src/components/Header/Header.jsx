import React from "react";
import styles from "./HeaderStyle.module.css";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";


const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <>
      <nav id="desktop-nav">
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
        <div>
          <img
          src={themeIcon}
          alt="Theme mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
        </div>
      </nav>
      <nav id="nav-menu">
        <div className="logo">Zaky Aly</div>
        <div className="dropdown-menu">
          <div class="menu-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about" onclick="toggleMenu()">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onclick="toggleMenu()">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            <li>
              <a href="#courses" onclick="toggleMenu()">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
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
