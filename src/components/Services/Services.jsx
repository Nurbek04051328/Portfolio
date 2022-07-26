import React from 'react';
import './services.css';
import Card from '../UI/Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './resume.doc';
import { useContext } from 'react'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Services = () => {
  const transition = {duration: 1, type: 'spring'} 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <spane>
          I am currently learning Solid, CI/CV and Next js.
          <br/>
          consequatur, porro, distinctio, sequi qui id amet nobis ab
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div 
          initial={{left: '25rem'}}
          whileInView= {{left: '14rem'}}
          transition={transition}
          style={{left: '17rem'}}
          className="card1"
        >
          <Card emoji={HeartEmoji} heading={'Design'} detail={"Figma, Photoshop, Canva"}/>
        </motion.div>
        <motion.div 
          initial={{left: '-25rem'}}
          whileInView= {{left: '0rem'}}
          transition={transition}
          style={{left: '-2rem', top:"10rem"}}
          className="card2"
        >
          <Card emoji={Glasses} heading={'Frontend'} detail={"Html5, Css3, Bootstrap, Javascript, React, React hooks, Redux, Vue, Vuex, OOP"}/>
        </motion.div>
        <motion.div 
          initial={{left: '25rem'}}
          whileInView= {{left: '18rem'}}
          transition={transition}
          style={{left: '15rem', top:"17rem"}}
          className="card3"
        >
          <Card emoji={Humble} heading={'Backend'} detail={"Node js, Express js, MongoDB, Heroku"}/>
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services