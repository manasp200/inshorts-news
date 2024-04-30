import React from 'react'
import './Navbar1.css'
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'

import search_icon_light from '../assets/search-b.png'

const Navbar = ({setCategory}) => {
  return (
    
     
     
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className=" badge bg-light text-dark fs-4"></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className='navbar'>
    <img src={ logo_light} alt="" className='logo' />
      
      
      <ul className="navbar-nav">
     
       
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("General")}>General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Entertainment")}>Entertainment</a>
        </li>
        

        
      </ul>
      
        <img src={toogle_light} alt="" className='toggle-icon' />
    </div>
  </div>
  </div>

        
</nav>
  )
}

export default Navbar