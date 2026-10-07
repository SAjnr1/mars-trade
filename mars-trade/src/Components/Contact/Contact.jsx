import React from 'react'
import './Contact.css'
import Snapchat from '../../assets/snapchat.png'
import Tiktok from '../../assets/tiktok.png'
import Instagram from '../../assets/instagram.png'
import WhatsApp from '../../assets/whatsapp.png'
import Gmail from '../../assets/gmail.png'
import Threads from '../../assets/threads.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'



const Contact = () => {

  return (
    
    <div className='contact'>
      <Navbar/>
      
      <div className="heading">
        <h1>Let's <span>Talk</span></h1>
      </div>

      <div className="caption">
        <p>Have a question, want to place an order, or have an idea for a custom piece? I'm always happy to hear from you.</p>
      </div>

      <div className="contact-card">

        <a href="https://wa.me/+233244244332" target="_blank" rel="noopener noreferrer" >
        <div className="whatsapp" title='WhatsApp Profile Link'  data-aos="fade-up">
          <img src={WhatsApp} className='contact-img'/>
          <p className='name' id='whatsapp'>WhatsApp</p>
        </div>
        </a>

        <a href="mailto:solomonagbeko123@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="gmail" title='Gmail Profile Link' data-aos="fade-up">
          <img src={Gmail} className='contact-img'/>
          <p className='name' id='gmail'>Gmail</p>
        </div>
        </a>
        
        <a href="https://www.snapchat.com/add/only4_mars?share_id=hov0N3l0qSA&locale=en-US" target="_blank" rel="noopener noreferrer">
        <div className="snap" title='Snapchat Profile Link' data-aos="fade-up">
          <img src={Snapchat} className='contact-img'/>
          <p className='name' id='snap'>Snapchat</p>
        </div>
        </a>
        

        <a href="https://www.tiktok.com/@callme.solo.onyx?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" >
        <div className="tiktok" title='Tiktok Profile Link' data-aos="fade-up">
          <img src={Tiktok} className='contact-img'/>
          <p className='name' id='tiktok'>Tiktok</p>
        </div>
        </a>

        <a href="https://www.instagram.com/callme.sajnr/?hl=en" target="_blank" rel="noopener noreferrer">
        <div className="threads" title='Threads Profile Link' data-aos="fade-up">
          <img src={Threads} className='contact-img'/>
          <p className='name' id='instagram'>Threads</p>
        </div>
        </a>

        <a href="https://www.instagram.com/callme.sajnr/?hl=en" target="_blank" rel="noopener noreferrer">
        <div className="instagram" title='Instagram Profile Link' data-aos="fade-up">
          <img src={Instagram} className='contact-img'/>
          <p className='name' id='instagram'>Instagram</p>
        </div>
        </a>
      

        


      </div>

      <Footer/>
    </div>
   
  )
}

export default Contact