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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quia, amet recusandae quibusdam aspernatur quaerat, harum iure culpa maxime autem exercitationem ullam aut ut, 
            facilis minus at minima. Iste, debitis rerum!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quia, amet recusandae quibusdam aspernatur quaerat, harum iure culpa maxime autem exercitationem ullam aut ut, 
            facilis minus at minima. Iste, debitis rerum!
          </p>

          

          
         </div>

        </div>

        <div className="abt-propic">
          <img src={MARS} alt="" />
        </div>

      </div>

      <div className="profile-card-set">

        <div className="profile-card">
          <Heart/>
          <h2>Made by Hand</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugiat sunt odit officiis
             numquam vitae mollitia placeat qui quaerat illum quo optio ex et inventore! Magni aut deserunt
              officia dolorem.</p>
        </div>

        <div className="profile-card">
          <SparklesIcon/>
          <h2>Made by Hand</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugiat sunt odit officiis
             numquam vitae mollitia placeat qui quaerat illum quo optio ex et inventore! Magni aut deserunt
              officia dolorem.</p>
        </div>

        <div className="profile-card">
          <GiftIcon/>
          <h2>Made by Hand</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugiat sunt odit officiis
             numquam vitae mollitia placeat qui quaerat illum quo optio ex et inventore! Magni aut deserunt
              officia dolorem.</p>
        </div>


      </div>

      <div className="profile-contact">

        <div className="profile-contact-heading">
          <h2>My Contacts</h2>
        </div>

        <div className="profile-contact-caption">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusantium ad, cumque ipsa ea odit earum pariatur quas suscipit sapiente distinctio, 
            illo nesciunt magni, sit est. Optio placeat culpa obcaecati provident!
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


    </div>
  )
}

export default About
