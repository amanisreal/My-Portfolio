import React from 'react'
import "./nav.css"
import {BsInstagram} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {GrCatalogOption} from "react-icons/gr"

function Nav() {

  //var insta = handleInsta();

  return (
    <div className='container'>
    <section>
      <div className='NavBar'>
   
   <div className='left'>
   <GrCatalogOption className='Icon'/>
   </div>
   <div className='middle'>
       <ul className='list'>
           
           <li className='element'><a href="#aboutmecontainer">About</a></li>
           <li className='element'><a href="#skillscontainer">Skills</a></li>
           <li className='element'><a href="#contactcontainer">Contact</a></li>
           <li className='element'><a href="#projectscontainer">Projects</a></li>
       </ul>
   </div>

   <div className='right'>
   <a href="https://www.instagram.com/aman_borkar_/"><BsInstagram className='Icon' /></a>
   
   </div>
   
   </div>
    </section>
    </div>
  )
}

export default Nav;