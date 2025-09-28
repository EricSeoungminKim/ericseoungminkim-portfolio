import "./App.css";
import Avatar from "./sections/Avatar/Avatar";
import Projects from "./sections/Projects/Projects";
import Jobs from "./sections/Jobs/Jobs";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Background from "./sections/Background/Background";

function App() {
  return (
    <>
      <Avatar />
      <Background />
      <Jobs />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
