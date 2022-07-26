import React from 'react';
import './footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../../img/wave.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
        <span>bek050613@mail.ru</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_nurbek_0506/" target='blank'><Insta color='white' size='3rem'/></a>
          <a href="#" target='blank'><Facebook color='white' size='3rem'/></a>
          <a href="https://github.com/Nurbek04051328" target='blank'><Github color='white' size='3rem'/></a>
        </div>
      </div>
    </div>
  )
}
