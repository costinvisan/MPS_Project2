
import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../Navbar.css';

export default function Services() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  return (
        <> 

<div className='services' >
  <p>   RESOURCES </p>
  <div class="dropdown">
  <button class="dropbtn">Resources</button>
  <div class="dropdown-content">
  <a href="#">sala 1</a>
  <a href="#">sala 2</a>
  <a href="#">sala 3</a>
  <a href="#">Link 3</a>
  <a href="#">Link 3</a>
  <a href="#">Link 3</a>
  </div>
</div>
</div>

         
            
            

            
            
            
            
            
            
            
            
            
            
            
           { /* <div>
                <h2>Please choose a resource from the list below:</h2>
                <ul>
                    <li className='resources-item'>
                      <Link
                      to="/sala1"
                      className='resources-links'
                      onClick={closeMobileMenu}>
                      sala1</Link></li>
                    <li ><Link to="/sala2"
                        className='resources-links'
                        onClick={closeMobileMenu}>
                        sala2</Link></li>
                    <li><Link to="/sala3"
                      className='resources-links'
                      onClick={closeMobileMenu}>
                      sala3</Link></li>
                    <li><Link to="/sala4"
                      className='resources-links'
                      onClick={closeMobileMenu}>
                      sala4</Link></li>
                    <li><Link to="/sala5"
                    className='resources-links'
                    onClick={closeMobileMenu}
                    >sala5</Link></li>
                </ul>
            </div>  */}
           
    </>
  );

}
