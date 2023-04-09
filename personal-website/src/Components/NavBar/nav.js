import React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav-bar'>
      <ul>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Education'>Education</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Projects'>Projects</a></li>
        <li><a href='#Hobbies'>Hobbies</a></li>
      </ul>
    </div>
  );
}

export default NavBar;