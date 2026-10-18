import React from 'react'
import './footer.css'
import Snapchat from '../../assets/snapchat1.png'
import Tiktok from '../../assets/tiktok1.png'
import Instagram from '../../assets/instagram1.png'
import WhatsApp from '../../assets/whatsapp1.png'
import Gmail from '../../assets/gmail1.png'
import Threads from '../../assets/threads1.png'
import Phone from '../../assets/phone.png'
import { Link } from 'react-router-dom'
import { CopyrightIcon } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className='footer'>

       <div className="footer-contact-details">


          <a href="mailto:mayarocklynn@gmail.com" target="_blank" rel="noopener noreferrer" title='Gmail Profile'>
            <img src={Gmail} alt="" id="footer-contact" />
          </a>

          <a href="tel:+233203087067" target="_blank" rel="noopener noreferrer" title='Phone Contact'>
            <img src={Phone} alt="" id="footer-contact" />
          </a>

          <a href="https://wa.me/+233203087067" target="_blank" rel="noopener noreferrer" title='WhatsApp Profile'>
            <img src={WhatsApp} alt="" id="footer-contact" />
          </a>      

          <a href="https://www.instagram.com/venus94846/?hl=en" target="_blank" rel="noopener noreferrer" title='Instagram Profile'>
            <img src={Instagram} alt="" id="footer-contact" />
          </a>

          <a href="https://www.threads.com/@venus94846" target="_blank" rel="noopener noreferrer" title='Threads Profile'>
            <img src={Threads} alt="" id="footer-contact" />
          </a>

          <a href="https://www.tiktok.com/@callme.solo.onyx?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" title='Tiktok Profile'>
            <img src={Tiktok} alt="" id="footer-contact" />
          </a>

          <a href="https://www.snapchat.com/add/only4_mars?share_id=hov0N3l0qSA&locale=en-US" target="_blank" rel="noopener noreferrer" title='Snapchat Profile'>
            <img src={Snapchat} alt="" id="footer-contact" />
          </a>
     

        </div>

        <div className="copyrights">
          <div className="rights"><p><Link className='llink' to='/admin/login'><CopyrightIcon className='link' strokeWidth={2}/></Link> 2026 MARS Stitches</p><p>  All rights reserved</p></div>
        <ul>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
        </ul>
        </div>



    </div>
    </>
  )
}

export default Footer