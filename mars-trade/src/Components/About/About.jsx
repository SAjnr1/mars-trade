import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import MARS from '../../assets/mars_pic.png'
import Snapchat from '../../assets/snapchat.png'
import Tiktok from '../../assets/tiktok.png'
import Instagram from '../../assets/instagram.png'
import WhatsApp from '../../assets/whatsapp.png'
import Gmail from '../../assets/gmail.png'
import Threads from '../../assets/threads.png'
import { GiftIcon, Heart, SparklesIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/footer'

const About = () => {
  return (
    <div className="about">
      <Navbar/>

      <div className="about-heading">
        <h1>A Little <span>About ME</span></h1>
      </div>

      <div className="about-caption">
        <p>Get to know the person behind the arts and crafts</p>
      </div>

      <div className="profile-details">

        <div className="profile">

          <div className="profile-name">
           <h1>Hi! I am <span>MARS</span></h1>
         </div>

         <div className="profile-info">
          <p>I’m the girl who runs MARS Stitches! 
            I enjoy crocheting things out of yarn that people can wear, use or give as gifts. 
            It started as a hobby and has become something I love to do and am happy to share my creations with others.
          </p>

          <p>I like to play with different colors, patterns and designs and I put love into everything I make. 
            Glad you are here whether you came to find something you like or have an idea for a custom order. 
            Just look around and see what you like!
          </p>

                    
         </div>

        </div>

        <div className="abt-propic">
          <img src={MARS} alt="" />
        </div>

      </div>

      <div className="profile-card-set">

        <div className="profile-card" data-aos="fade-up">
          <Heart className='profile-card-icon'/>
          <h2>Made with Love</h2>
          <p>
            Each one of these items is made with love, patience, and devotion. 
            I really like when I have time to make an item to which I can attach a little piece of myself: 
            select yarn, create every single stitch, make all tiny details. 
          </p>
        </div>

        <div className="profile-card" data-aos="fade-up">
          <SparklesIcon className='profile-card-icon'/>
          <h2>Creative Freedom</h2>
          <p>
            The main thing that I love about crochet is the fact that from a simple ball of yarn we get an item that looks entirely differently. 
            Each of these crocheting projects opens some new aspects and allows me to try something new: 
            explore patterns, experiment with colours
          </p>
        </div>

        <div className="profile-card" data-aos="fade-up">
          <GiftIcon className='profile-card-icon'/>
          <h2>A Gift For You</h2>
          <p>
            It is very cool that what you make with your own hands can be used to beautify somebody's life or to give a present to someone. 
            If you want to order anything to yourself or to order a unique item, feel free to visit my shop.
          </p>
        </div>


      </div>

     

        <div data-aos="fade-up">
         <h2 className="profile-sth">
           Want something special made just for you?
         </h2>
       </div>

      <div className="about-button" data-aos="fade-up">

        <Link to='/shop' className='about-btn'>
        <div className="profile-shop-btn">
          <p>Shop Now</p>
        </div>
        </Link>

        <Link to='/custom_order' className='about-btn'>
        <div className="profile-order-btn">
          <p>Custom Order</p>
        </div>
        </Link>
        

      </div>



 


      {/* 
       <div className="profile-contact">

        <div className="profile-contact-heading">
          <h2>My Contacts</h2>
        </div>

        <div className="profile-contact-caption">
          <p>Have a question, want to place an order, or have an idea for a custom piece? I'm always happy to hear from you.
          </p>
        </div>

        <div className="profile-contact-details">

          <a href="https://wa.me/+233203087067" target="_blank" rel="noopener noreferrer" title='WhatsApp Profile Link'>
            <img src={WhatsApp} alt="" id="profile-contact" />
          </a>

          <a href="https://www.snapchat.com/add/only4_mars?share_id=hov0N3l0qSA&locale=en-US" target="_blank" rel="noopener noreferrer" title='Snapchat Profile Link'>
            <img src={Snapchat} alt="" id="profile-contact" />
          </a>

          <a href="https://www.tiktok.com/@callme.solo.onyx?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" title='Tiktok Profile Link'>
            <img src={Tiktok} alt="" id="profile-contact" />
          </a>

          <a href="https://www.instagram.com/callme.sajnr/?hl=en" target="_blank" rel="noopener noreferrer" title='Instagram Profile Link'>
            <img src={Instagram} alt="" id="profile-contact" />
          </a>

          <a href="https://www.threads.com/@venus94846" target="_blank" rel="noopener noreferrer" title='Threads Profile Link'>
            <img src={Threads} alt="" id="profile-contact" />
          </a>

          <a href="mailto:mayarocklynn@gmail.com" target="_blank" rel="noopener noreferrer" title='Gmail Profile Link'>
            <img src={Gmail} alt="" id="profile-contact" />
          </a>


        </div>

      </div>

      */}

     
     <Footer/>

    </div>
  )
}

export default About
