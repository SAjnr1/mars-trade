import React from 'react'
import './Custom.css'
import Logistics from '../../assets/logistic.png'
import Quotation from '../../assets/quotation.png'
import Creative from '../../assets/creative-writing.png'
import useWhatsAppOrder from './useWhatsAppOrder'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'


const Custom = () => {
    useWhatsAppOrder()
  return (
    <div className='custom'>
     <Navbar/>
      <div className="custom-head">
        <h1>Get Your <span>Custom</span> Piece</h1>
      </div>

      <div className="custom-caption">
        <p>Have something special in mind? Tell me what you're imagining, and I'll turn your idea into a handmade crochet piece made just for you.</p>
      </div>

      <div className="custom-card-set">

        <div className="custom-card" id='one'>
          <img src={Creative} alt="" className='custom-img'/>
         <div className="custom-text">
           <div className="custom-card-heading">
            <h3>1. Describe It </h3>
           </div>

           <div className="custom-card-caption">
             <p>Share what you'd like to have </p>
           </div>
         </div>
        </div>

         <div className="custom-card" id='two'>
          <img src={Quotation} alt="" className='custom-img'/>
         <div className="custom-card-heading">
           <h3>2. Get A Quote</h3>
         </div>

         <div className="custom-card-caption">
          <p>I reply with a price and a timeline </p>
         </div>
        </div>

         <div className="custom-card" id='three'>
          <img src={Logistics} alt="" className='custom-img' />
         <div className="custom-card-heading">
           <h3>3. Receive It </h3>
         </div>

         <div className="custom-card-caption">
          <p>Made to order and shipped to you </p>
         </div>
        </div>

        
      </div>

      <div className="custom-form" data-aos="fade-up">

        <div className="custom-form-heading">
          <h3>State Your Preference</h3>
        </div>

     
          <div className="pref">
          <label htmlFor=""> What do you want?</label>
          <textarea name="" id="pref" placeholder='A small bag with a flower-like broche'/>
           </div>
  

        <div className="preff">
           <div className="preff-col">
            <div className="col">
            <label htmlFor="">Color</label>
            <textarea name="" id="col" placeholder='Red, green'/>
          </div>

          

          <div className="budget">
            <label htmlFor="">Budget</label>
            <div className="bgt">
              <span className="bgt-prefix">GH¢</span>
              <input step="0.01" min="0" type="number" name="" id="budget" placeholder='0.00'/>
            </div>
          </div>
          </div>

          <div className="date">
            <label htmlFor="">Deadline</label>
            <input id='date' type="date" />
          </div>
        </div>

        <div className="custom-btttn">
          <p>Send On Whatsapp</p>
        </div>




      </div>
      <Footer/>


    </div>
  )
}

export default Custom
