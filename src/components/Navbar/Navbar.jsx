import React from 'react';
import './navbar.css'
import ReactDOM from "react-dom";
import { Toggle } from '../UI/Toggle/Toggle';
import { Link } from 'react-scroll';


const Navbar = () => {
	

	return (
    <div className="n-wrapper" id='Navbar'>
		<div className="n-left">
			<div className="n-name">
				Nurbek
			</div>
			< Toggle />
		</div>
		<div className="n-right">
			<div className="n-list">
				<ul style={{listStyleType: "none"}}>
					<Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
						<li>Home</li>
					</Link>
					<Link spy={true} to='Services' smooth={true} >
						<li>Services</li>
					</Link>
					<Link spy={true} to='Experience' smooth={true} >
						<li>Experience</li>
					</Link>
					<Link spy={true} to='Portfolio' smooth={true} >
						<li>Portfolio</li>
					</Link>
					<Link spy={true} to='Testimorial' smooth={true} >
						<li>Testimonials</li>
					</Link>
				</ul>
			</div>
			<a href='tel:998997997865' className="button n-button">
				Contact
			</a>
		</div>
		
	</div>
  )
}

export default Navbar