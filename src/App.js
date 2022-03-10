import { useEffect } from 'react';
import "./style/styles.scss";
import "./style/animation.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Quote from "./components/Quote";
import Moonoz from "./components/Moonoz";
import Projects from "./components/Projects";
import ContactMe from "./components/Email";
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



export default function App() {
  useEffect(() => {
    // ..
    AOS.init({delay:100, duration: 3000, mirror:true });
  }, []);
  
  return (
    <div className="App">
      <main>
        <NavBar />
        {/* <ScrollBanner /> */}
        <Banner />
        <Container className="section-bkgd grids" fluid>
          <Quote />
          <About  />
          <Projects scrollEffect="fade-up" />
          <Moonoz />
          <ContactMe />
        </Container>
        <Footer />
      </main>
    </div>
  );
}
