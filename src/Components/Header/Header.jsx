import React from 'react'
import "./Header.css"

const Header = () => {
  return (
   <div className="main">
    <div className="container">
      <div className="logo">
         <h1>EV-olution</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='contact'>Contact</li>
        </ul>
      </nav>
    </div>
   </div>
  )
}

export default Header;
