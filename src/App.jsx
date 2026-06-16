import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
