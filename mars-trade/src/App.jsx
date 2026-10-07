import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Homepage from './Components/Homepage/Homepage'
import Gallery from './Components/Gallery/Gallery'
import Shop from './Components/Shop/Shop'
import Custom from './Components/Custom/Custom'
import About from './Components/About/About'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import AdminMedia from './pages/Media/AdminMedia'
import AdminHome from './pages/Homepage/Homepage'
import ProtectedRoute from './ProtectedRoute'

import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import AdminShop from './pages/AdminShop/AdminShop'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about_me' element={<About/>}/>
      <Route path='/custom_order' element={<Custom/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/admin/login' element={<AdminLogin/>}/>
      <Route path='/admin/gallery' element={<AdminMedia/>}/>
      <Route path='/admin/shop' element={<AdminShop/>}/>
      <Route path='/admin/home' element={<AdminHome/>}/>


      <Route element={<ProtectedRoute/>}>
        
      </Route>
    </Routes>
    </>
  )
}

export default App
