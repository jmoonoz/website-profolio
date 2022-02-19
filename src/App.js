import "./style/styles.scss";
import "./style/animation.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Quote from "./components/Quote";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/Email";
import {Container} from 'react-bootstrap';

export default function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Banner />
        <Container className="section-bkgd" fluid>
          <Quote />
          <About />
          <Skills />
          <Projects />
          <ContactMe />
        </Container>
        <Footer />
      </main>
    </div>
  );
}
