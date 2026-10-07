import React from 'react'
import './Shop.css'
import Navbar from '../Navbar/Navbar'
import ShopProducts from './ShopProducts'
import Footer from '../Footer/footer'

const Shop = () => {
  return (
    <div className="shop">
      <Navbar/>

      <div className="shop-head">
        <h1><span>Shop</span> The Collection</h1>
      </div>

      <div className="shop-caption">
        <p>Browse the pieces and find something you’ll love wearing.</p>
      </div>


      <div className="shop-item">
        <p id="bag">Bag</p>
        <p id="cloth">Clothing</p>
         <p id="accessories">Accessories</p>
        <p id="gift">Gifts</p>
         <p id="home">Home & Decor</p>
        <p id="plushies">Plushies</p>
      </div>

      <ShopProducts />

     
    <Footer/>

    </div>
  )
}

export default Shop