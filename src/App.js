import { Contact } from "./compoenents/contact/Contact";
import { Education } from "./compoenents/education/Education";
import { Experience } from "./compoenents/experience/Experience";
import { Footer } from "./compoenents/footer/Footer";
import { Intro } from "./compoenents/intro/Intro";
import { Navbar } from "./compoenents/navbar/Navbar";
import { Projects } from "./compoenents/projects/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
