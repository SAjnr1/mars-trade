import React from 'react'
import './Homepage.css'
import Hero from '../../assets/crochet.png'
import Shop from '../../assets/shopping-cart.png'
import Custom from '../../assets/shopping-bag.png'
import Info from '../../assets/information.png'
import Gallery from '../../assets/picture.png'
import Contact from '../../assets/contact-us.png'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'


const Homepage = () => {
  
  return (
    <div className='home'>
      <Navbar/>
     <div className="hero" >
        <div className="title" data-aos="fade-right">
        <h1><span>Handmade</span> with Love, <span>Stitched</span> for You.</h1>
        <p>Bags, plushies and cozy wearables, crocheted one stitch at a time.</p> 
        {/*<h1><span>Solomon's</span> Resturant, <span>Eat </span> Eat, and EAT MORE.</h1>
        <p>Your one stop shop to get a lot of food to eat </p> */}
       
     </div>
     <img className='image' src={Hero} alt=""  data-aos="fade-left" />
     </div>

     <div className="bttn" data-aos="fade-down">
      
        <Link to='/shop' className="card-link">
        <div className="btn" >
        <p>Shop Now</p>
        </div>
        </Link>
      

      <Link to='/custom_order' className="card-link">
     <div className="btn" > 
        <p >Custom Order Now</p>  
     </div>
     </Link>


     </div>

     <div className="card-set" data-aos="fade-up">

      <div className="card" id='gallery'>
         <img src={Gallery} alt="" className='card-image'/>
         <div className="card-heading">
            <h2>A Little Look at My Work</h2>
         </div>
         <div className="card-body">
            <h4>Explore some of the pieces I've created.</h4>
            <Link to='/gallery' className="card-link">
            <p >View Now <ArrowRight/></p>
            </Link>
         </div>
      </div>

      <div className="card" id='shop'>
         <img src={Shop} alt="" className='card-image'/>
         <div className="card-heading">
            <h2>Find Your Next Favorite Piece</h2>
         </div>
         <div className="card-body">
            <h4>Browse handmade crochet pieces crafted with care.</h4>
            <Link to='/shop' className="card-link">
            <p >Explore The Shop <ArrowRight/></p>
            </Link>
         </div>
      </div>


      <div className="card" id='custom'>
         <img src={Custom} alt="" className='card-image'/>
         <div className="card-heading">
            <h2>Have Something in Mind?</h2>
         </div>
         <div className="card-body">
            <h4>Tell me what you'd like, and I'll create a crochet piece made especially for you.</h4>
            <Link to='/custom_order' className="card-link">
            <p >Request a Custom Piece <ArrowRight/></p>
            </Link>
         </div>
      </div>


      {/* <div className="card" id='info'>
         <img src={Info} alt="" className='card-image'/>
         <div className="card-heading">
            <h2>A Little About Me”</h2>
         </div>
         <div className="card-body">
            <h4>Get to know the person behind the stitches and the story behind the craft.</h4>
            <Link to='/about_me' className="card-link">
            <p >Explore More <ArrowRight/></p>
            </Link>
         </div>
      </div> */}


      <div className="card" id='contact'>
         <img src={Contact} alt="" className='card-image'/>
         <div className="card-heading">
            <h2>Let's Talk</h2>
         </div>
         <div className="card-body">
            <h4>Have a question or an idea for a custom piece? I'd love to hear from you.</h4>
            <Link to='/contact' className='card-link'>
            <p >Contact Me <ArrowRight/></p>
            </Link>
         </div>
      </div>
         
     </div>


     <div className="collection" data-aos="fade-up">
      <div className="col-head">
         <h2>My Collection</h2>
      </div>
      <div className="col-img">
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
     </div>




     <Footer/>
    </div>
  )
}

export default Homepage
