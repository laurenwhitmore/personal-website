import React from 'react';
import './navBar.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar;