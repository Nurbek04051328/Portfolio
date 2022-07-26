import React from 'react';
import './works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";


export const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
      <div className="awesome">
        <span className='w-span1' style={{color: darkMode? 'white': ''}}>Works for All these</span>
        <span className='w-span2'>Brands & Clients</span>
        <span className='w-text'>
        I see my future development in the field of IT, I follow innovations in this direction. I am
        interested in a new technologies and looking for new opportunities in front-end. I quickly
        find a common language with people, easily joining a new team and welcome a new
        projects. I love and know how to work in a team, solve complex problems together. Prudent
        and attentive to the smallest detail. Before starting work on a project, I think ahead how it
        should be in the end, introducing myself as a consumer of this product.
        </span>
        <a href='tel:998997997965' className="button s-button">Hire me</a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45}}
          whileInView={{ rotate: 0}}
          viewport={{ margin: "-40px"}}
          transition={{ duration: 3.5, type: 'spring'}}
          className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}
