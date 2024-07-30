import "./App.css";

import {
  AboutMe,
  ContactMe,
  Courses,
  // Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <WorkExperience />
      <Courses />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
