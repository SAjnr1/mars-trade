import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/trade-logo.png'
{/*import { Link } from 'react-scroll';*/}
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Home, Wrench, ShoppingBag, Info, Star, Palette, Contact, Image, LogOutIcon } from 'lucide-react';
import { supabase } from "../../supabaseClient";

const Navbar = () => {
  const navigate = useNavigate();
  
    const logout = async () => {
      await supabase.auth.signOut();
      navigate("/admin/login", { replace: true });
    };

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
        <Link to='/admin/homepage' className='home-link'>
          <img src={logo} alt="" className='logo' />
        </Link>
        <ul className='desktop-nav-links'>
          <li><NavLink to='/admin/homepage' end className='homepage-link'>Home</NavLink></li>
          <li><NavLink to='/admin/gallery' className='services-link'>Gallery</NavLink></li>
          <li><NavLink to='/admin/shop' className='program-link'>Shop</NavLink></li>
          <li><button type="button" onClick={logout}  className="logout-btn">Log Out</button></li>
        </ul>
      </nav>

      {/* Bottom tab bar: only rendered visually on mobile via CSS media query */}
      <ul className='bottom-nav'>
        <li>
          <NavLink to='/admin/home' end className='home-link'>
            <Home strokeWidth={2} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/gallery' className='services-link'>
            <Image strokeWidth={2} />
            <span>Gallery</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/shop' className='program-link'>
            <ShoppingBag strokeWidth={2} />
            <span>Shop</span>
          </NavLink>
        </li>
        <li className='lgt' type="button" onClick={logout}>
            <LogOutIcon strokeWidth={2} />
            <span>Log Out</span>
    
        </li>
        
      </ul>
    </>
  )
}

export default Navbar