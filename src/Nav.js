import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false);

    const transitionNavBar = () =>{
        if (window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
    },[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
        <img className='nav__logo' src='img/transp.png' alt=''/>
        <img className='nav__avatar' src='img/blueIcon.png' alt=''/>
        </div>
    </div>
  )
}

export default Nav