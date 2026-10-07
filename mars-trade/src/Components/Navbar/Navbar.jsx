import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/trade-logo.png'
{/*import { Link } from 'react-scroll';*/}
import { Link, NavLink } from 'react-router-dom';
import { Home, Wrench, ShoppingBag, Info, Star, Palette, Contact, Image } from 'lucide-react';

const Navbar = () => {

  {/*} const [sticky, setSticky] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
   }, []); */}

  return (
    <>
      {/* Top nav: full links on desktop, just logo on mobile (bottom bar handles nav there) */}
     {/* <nav className={`container ${sticky ? 'dark-nav' : ''}`}> */}

     <nav>
        <Link to='/' className='home-link'>
          <img src={logo} alt="" className='logo' />
        </Link>
        <ul className='desktop-nav-links'>
          <li><NavLink to='/' end className='homepage-link'>Home</NavLink></li>
          <li><NavLink to='/gallery' className='services-link'>Gallery</NavLink></li>
          <li><NavLink to='/shop' className='program-link'>Shop</NavLink></li>
          <li><NavLink to='/custom_order' className='about-link'>Custom Order</NavLink></li>
          <li><NavLink to='/contact' className='testimonial-link'>Contact</NavLink></li>
        </ul>
      </nav>

      {/* Bottom tab bar: only rendered visually on mobile via CSS media query */}
      <ul className='bottom-nav'>
        <li>
          <NavLink to='/' end className='home-link'>
            <Home strokeWidth={2} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/gallery' className='services-link'>
            <Image strokeWidth={2} />
            <span>Gallery</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/shop' className='program-link'>
            <ShoppingBag strokeWidth={2} />
            <span>Shop</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/custom_order' className='about-link'>
            <Palette strokeWidth={2} />
            <span>Custom Order</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='testimonial-link'>
            <Contact strokeWidth={2} />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Navbar