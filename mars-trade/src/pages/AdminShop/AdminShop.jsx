import React from 'react'
import './AdminShop.css'
import AdminProductList from './AdminProductList'
import Navbar from '../Navbar/Navbar'

const AdminShop = () => {
  return (
    <div className='admin-shop'>
      <Navbar/>
      
      <div className="admin-shop-heading">
        <h1>Post A Product</h1>
      </div>

      <form className="admin-shop-form">

        <h2 className="form-header">Upload Product</h2>

        <div className="product-name">
          <p className="product">Product name</p>
          <input type="text" className='product-field' placeholder='Toot bag' />
        </div>

        <div className="product-pic">
          <p className="product">Upload product picture</p>
          <input className='product-field' type="file" accept='image/*' />
        </div>

        <div className="product-currency">
          <p className="product">Product Price</p>
          <span className="product-prefix">GH¢</span>
            <input step="0.01" min="0" type="number" name=""  id="product-currency" placeholder='0.00'/>
        </div>

        <div className="product-currency">
          <p className="product">Seller's Whatsapp Number</p>
            <input type="tel" name=""  id="product-currency" placeholder='+233*********'/>
        </div>

        <div className="product-currency">
          <p className="product">Seller's Phone Number</p>
          
            <input type="tel" name=""  id="product-currency" placeholder='+233*********'/>
        </div>


        <div className="product-cat">
          <p className="product">Product Categories:</p>
          <select name="" id="product-cat"  >
            <option value=""><p className='option'>Choose a category</p></option>
            <option value=""><p className='option' id="bag">Bag</p></option>
            <option value=""><p className='option' id="clothing">Clothing</p></option>
            <option value=""><p className='option' id="accessories">Accessories</p></option>
            <option value=""><p className='option' id="gifts">Gifts</p></option>
            <option value=""><p className='option' id="home">Home & Decor</p></option>
            <option value=""><p className='option' id="plushies">Plushies</p></option>
          </select>
        </div>


        <div className="product-btn">
          <p className="product-bttn" type='button'>Upload Product</p>
        </div>
        vuiufuhvvvhvhjvjbvhh

      </form>

      <AdminProductList/>

    </div>
  )
}

export default AdminShop
