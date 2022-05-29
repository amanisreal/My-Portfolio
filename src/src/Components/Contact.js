import React from 'react'
import {BsInstagram} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {GrCatalogOption} from "react-icons/gr"
import {HiOutlineMail} from "react-icons/hi"
import {BsGithub} from "react-icons/bs"
import {RiLinkedinLine} from "react-icons/ri"
import "./contact.css"

function Contact() {
  return (
    <div id="contactcontainer" className='contactcontainer'>
    <h2 className='contactme'>Contact me</h2>
    <div className='contacticons'>
    <div className='programmerssocial'>
       <br/><br/>
        <a href="https://github.com/amanisreal"><BsGithub className='Icon' size={40}/></a>
        <a href="https://www.linkedin.com/in/aman-borkar-5330a6210/"><RiLinkedinLine className='Icon' size={40}/></a>
    </div>

    <div className='socialmedia'>
    
       <br/><br/>
   
       <a href="https://www.facebook.com/profile.php?id=100056719939731"><FiFacebook className='Icon' size={40}/></a>
       <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbvCCLnQdnftbSZPQmtQjVfJPWDCFSBJcsDQqLTKrGRTFMCxcdrXkRwzghVBJfMWdQVrxD"><HiOutlineMail  className='Icon' size={40}/></a>
       </div>
    </div></div>
  )
}

export default Contact