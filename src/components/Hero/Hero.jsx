import React from "react";
import styles from './HeroStyle.module.css'
import heroImg1 from '../../assets/hero-img1.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV  from '../../assets/zaky-aly-cv.pdf'
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight: githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return(
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}  
          src={heroImg1}
          alt="Profile picture of Zaky Aly"
        />
        <img
          src={themeIcon}
          alt="Theme mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
          Zaky
          <br />
          Aly
        </h1>
        <h2>Frontend Developer</h2>
        <span>
        <a href="https://github.com/ZakyAly" target="_blank">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/zakyaly/" target="_blank">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </span>
          <p>With a passion for building and developing modern web apps.</p>
          <a href={CV} download>
            <button className="hover" >
              Resume
            </button>
          </a>
      </div>
    </section>
  )
};

export default Hero;
