import React from 'react'
import './Homepage.css'
import Hero from '../../assets/crochet.png'
import Shop from '../../assets/shop.png'
import Custom from '../../assets/shopping-bag.png'
import Info from '../../assets/information.png'
import Gallery from '../../assets/gallery.png'
import Contact from '../../assets/contact-us.png'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const Homepage = () => {
  
  return (
    <div className='home1'>
      <Navbar/>
     <div className="hero1" >
        <div className="title1" data-aos="fade-right">
        <h1><span>Welcome</span> back </h1>
        <p>What would you like to do today?</p> 
        {/*<h1><span>Solomon's</span> Resturant, <span>Eat </span> Eat, and EAT MORE.</h1>
        <p>Your one stop shop to get a lot of food to eat </p> */}
       
     </div>
     <img className='image1' src={Hero} alt=""  data-aos="fade-left" />
     </div>

    {/* <div className="bttn1" data-aos="fade-down">
      
        <Link to='/shop' className="card-link1">
        <div className="btn1" >
        <p>Shop Now</p>
        </div>
        </Link>
      

      <Link to='/custom_order' className="card-link1">
     <div className="btn1" > 
        <p >Custom Order Now</p>  
     </div>
     </Link>


     </div> */}

     <div className="card-set1" data-aos="fade-up">

      <div className="card1" id='gallery1'>
         <img src={Gallery} alt="" className='card-image1'/>
         <div className="card-heading1">
            <h2>Post in the Gallery</h2>
         </div>
         <div className="card-body1">
            <h4>Post pictures to the gallery</h4>
            <Link to='/admin/gallery' className="card-link1">
            <p >Post Now <ArrowRight/></p>
            </Link>
         </div>
      </div>

      <div className="card1" id='shop1'>
         <img src={Shop} alt="" className='card-image1'/>
         <div className="card-heading1">
            <h2>Post Products To the Store</h2>
         </div>
         <div className="card-body1">
            <h4>Post products to the store</h4>
            <Link to='/admin/shop' className="card-link1">
            <p >Post Now <ArrowRight/></p>
            </Link>
         </div>
      </div>


      {/*<div className="card1" id='custom1'>
         <img src={Custom} alt="" className='card-image1'/>
         <div className="card-heading1">
            <h2>Have Something in Mind?</h2>
         </div>
         <div className="card-body1">
            <h4>Tell me what you'd like, and I'll create a crochet piece made especially for you.</h4>
            <Link to='/custom_order' className="card-link1">
            <p >Request a Custom Piece <ArrowRight/></p>
            </Link>
         </div>
      </div>


       <div className="card1" id='info1'>
         <img src={Info} alt="" className='card-image1'/>
         <div className="card-heading1">
            <h2>A Little About Me”</h2>
         </div>
         <div className="card-body1">
            <h4>Get to know the person behind the stitches and the story behind the craft.</h4>
            <Link to='/about_me' className="card-link1">
            <p >Explore More <ArrowRight/></p>
            </Link>
         </div>
      </div> 


      <div className="card1" id='contact1'>
         <img src={Contact} alt="" className='card-image1'/>
         <div className="card-heading1">
            <h2>Let's Talk</h2>
         </div>
         <div className="card-body1">
            <h4>Have a question or an idea for a custom piece? I'd love to hear from you.</h4>
            <Link to='/contact' className='card-link1'>
            <p >Contact Me <ArrowRight/></p>
            </Link>
         </div>
      </div> */}
         
     </div>


   {/*  <div className="collection1" data-aos="fade-up">
      <div className="col-head1">
         <h2>My Collection</h2>
      </div>
      <div className="col-img1">
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" /> 
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
       <img src={Hero} alt="" />  
      </div>
     </div>   */}




    </div>
  )
}

export default Homepage
