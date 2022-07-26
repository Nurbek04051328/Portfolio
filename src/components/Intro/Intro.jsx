import React from 'react';
import FloatingDiv from '../UI/FloatingDiv/FloatingDiv';
import './intro.css';
//img
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Intro = () => {
  const transition = {duration: 2, type: 'spring'} 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
          <span>Nurbek Ismoilov</span>
          <span>
          I am Fullstack developer with experience in building websites for small and medium sized businesses. Whether you are trying to win work, list your services or even create a whole online store – I can help! 
          </span>
        </div>
        <a href='tel:998997997965' className="button i-button">Hire me</a>
        <div className="i-icons">
          <a href="https://github.com/Nurbek04051328" target='blank'>
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nurbek-ismoilov-806184214/" target='blank'>
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/_nurbek_0506/" target='blank'>
            <img src={Instagram} alt="" />
          </a>
          
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{left: '-36%'}}
          whileInView= {{left: '-24%'}}
          transition={transition}
          src={glassesimoji} alt="" 
        />
        <motion.div 
          initial={{left: '74%', top: '-4%'}}
          whileInView= {{left: '68%'}}
          transition={transition}
          style={{top: '-4%', left: '60%'}}
          className='floating-div'
          id='intr'
        >
          <FloatingDiv image={Crown} txt1='Fullstack' txt2='Developer'/>
        </motion.div>
        <motion.div 
          initial={{left: '9rem', top: '18rem'}}
          whileInView= {{left: '0rem'}}
          transition={transition}
          style={{top: '18rem', left: '0rem'}}
          className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1='Best of the' txt2='best'/>
        </motion.div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: "#C1F5FF", top: '17rem', width:'11rem', left: '-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro