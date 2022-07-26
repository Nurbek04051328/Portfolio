import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import { Experience } from "./components/Experience/Experience";
import { Works } from "./components/Works/Works";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Testimorial } from "./components/Testimorials/Testimorial";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";

import {HandySvg} from 'handy-svg';
import HomeSrc from './img/svg/home-outline.svg';
import LayerSrc from './img/svg/layers-outline.svg';
import PlanetSrc from './img/svg/planet-outline.svg';
import PersonSrc from './img/svg/person-outline.svg';
import ClipSrc from './img/svg/clipboard-outline.svg';



function App() {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

const handleClick = e => {
  const list = document.querySelectorAll('.list');

  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove("active");
  }

  e.currentTarget.classList.add("active");
};
  return (
    <div className="App"
      style={{
        background: darkMode? 'black': '',
        color: darkMode? 'white': ''
      }}
    >
      <div className="contanier">
        < Navbar />
        < Intro />
        < Services />
        < Experience />
        < Works />
        < Portfolio />
        < Testimorial />
        < Contact />
      </div>
      
      < Footer/>

      <div className="navigation">
        <ul>
          <li className="list active" onClick={handleClick}>
            <a href='#Navbar'>
              <span className="icon">
                <HandySvg
                    src={HomeSrc}
                    className="icon"
                    width="30"
                    height="30"
                />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list" onClick={handleClick}>
            <a href='#Services'>
              <span className="icon">
                <HandySvg
                    src={LayerSrc}
                    className="icon"
                    width="30"
                    height="30"
                />
              </span>
              <span className="text">Services</span>
            </a>
          </li>
          <li className="list" onClick={handleClick}>
            <a href='#Experience'>
              <span className="icon">
                <HandySvg
                    src={PlanetSrc}
                    className="icon"
                    width="30"
                    height="30"
                />
              </span>
              <span className="text">Experience</span>
            </a>
          </li>
          <li className="list" onClick={handleClick}>
            <a href='#Portfolio'>
              <span className="icon">
                <HandySvg
                    src={PersonSrc}
                    className="icon"
                    width="30"
                    height="30"
                />
              </span>
              <span className="text">Portfolio</span>
            </a>
          </li>
          <li className="list" onClick={handleClick}>
            <a href='#Contact'>
              <span className="icon">
                <HandySvg
                    src={ClipSrc}
                    className="icon"
                    width="30"
                    height="30"
                />
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
