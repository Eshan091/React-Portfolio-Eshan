import React, { useState } from 'react';
import './nav.css';
import {GoHomeFill} from 'react-icons/go';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
// import {AiOutlineUser} from 'react-icons/ai';
const Nav = () => {
  const [active,setActive]=useState('#');
  return (
  <nav>
    <a href="#header"  onClick={()=>setActive('#')}className={active==='#'?'active':''}><GoHomeFill/></a>
    <a href="#about" onClick={()=>setActive('about')}className={active==='about'?'active':''}> <AiOutlineUser/></a>
    <a href="#experince" onClick={()=>setActive('experince')}className={active==='experince'?'active':''}><BiBook/></a>
    <a href="#portfolio" onClick={()=>setActive('portfolio')}className={active==='portfolio'?'active':''}><RiServiceLine/></a>
    <a href="#contact" onClick={()=>setActive('contact')}className={active==='contact'?'active':''}><BsFillTelephoneFill/></a>
  </nav>
  )
}

export default Nav
