import React from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Altech from "../../img/altech.png";
import Abco from "../../img/abco.png";
import Fadolli from "../../img/fadolli.png";
import Logotype from "../../img/logotype.png";
import Healthcare from "../../img/healthcare.png";
import LovelyKids from "../../img/lovely.png";
import 'swiper/css';
import { useContext } from 'react';
import { themeContext } from '../../Context';


export const Portfolio = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper 
        spaceBetween={30} 
        slidesPerView={3}
        grabCursor={true}
        className="porfolio-slider"
      >
        <SwiperSlide  className='sliderr'>
          <img src={Altech} alt="" />
          <div className='p-slider-name'>Altech.uz</div>
          <div className='p-slider-text'>I wrote only the backend part using teamlead. I used nodejs, expressjs and handlebars.</div>
          <a href="https://altech.uz/"  target='blank' className='p-slider-link'>Link</a>
        </SwiperSlide>
        <SwiperSlide className='sliderr'>
          <img src={Fadolli} alt="" />
          <div className='p-slider-name'>Fadolli</div>
          <div className='p-slider-text'>Clothing store site. Layout and adaptive layout. I used html, css and javascript</div>
          <a href="https://nurbek04051328.github.io/Fadolli/"  target='blank' className='p-slider-link'>Link</a>
        </SwiperSlide>
        <SwiperSlide className='sliderr'>
          <img src={Healthcare} alt="" />
          <div className='p-slider-name'>Healthcare</div>
          <div className='p-slider-text'>I used html css, less, javascript, vuejs, vuex, vuetify</div>
          <a href="https://github.com/Nurbek04051328/Healthcare" target='blank' className='p-slider-link'>Link</a>
        </SwiperSlide>
        <SwiperSlide className='sliderr'>
          <img src={LovelyKids} alt="" />
          <div className='p-slider-name'>Lovely kids</div>
          <div className='p-slider-text'>Layout and adaptive layout. I used html, css and javascript</div>
          <a href="https://nurbek04051328.github.io/Lovely-kids/" target='blank' className='p-slider-link'>Link</a>
        </SwiperSlide>
        <SwiperSlide className='sliderr'>
          <img src={Abco} alt="" />
          <div className='p-slider-name'>Abco</div>
          <div className='p-slider-text'>Educational center CRM system. I used nodejs, expressjs and handlebars.</div>
          {/* <a href="#"  className='p-slider-link'>Link</a> */}
        </SwiperSlide>
        <SwiperSlide className='sliderr'>
          <img src={Logotype} alt="" />
          <div className='p-slider-name'>Logotype</div>
          <div className='p-slider-text'>Layout and adaptive layout. I used html, css and javascript</div>
          <a href="https://nurbek04051328.github.io/LogoType/" target='blank' className='p-slider-link'>Link</a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}
