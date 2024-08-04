import React from "react";
import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/hero-img.png";
// import sun from "../../assets/sun.svg";
// import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/zaky-aly-cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  // const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      {/* <div className={styles.colorModeContainer}> */}
      <div className={styles.hero}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profile picture of Zaky Aly"
        />
        {/* <img
          src={themeIcon}
          alt="Theme mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        /> */}
      </div>
      <div className={styles.info}>
        <p className={styles.description}>Hello, I'm</p>
        <h1>Zaky Aly</h1>
        <h2>Frontend Developer</h2>
        {/* <p className={styles.description}>
          With a passion for building and developing modern web apps.
        </p> */}
        <div className={styles.btnContainer}>
          <a href={CV} download>
            <button className={styles.cvBtn}>Download CV</button>
          </a>
          <a href={CV} download>
            <button className={styles.contactBtn}>Contact Info</button>
          </a>
        </div>
        <span>
          <a href="https://github.com/ZakyAly" target="_blank">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/zakyaly/" target="_blank">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Hero;
