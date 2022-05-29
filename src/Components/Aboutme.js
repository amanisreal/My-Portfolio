import React from 'react'
import "./aboutme.css"
import IM from "./Images/IMG-20220504-WA0034(1).png"

function Aboutme() {
  return (
    <div id="aboutmecontainer" className='aboutmecontainer'>
        <div className='side'>
            <div className='leftside'>
                <span className='hello'>Hii</span>
                <br></br>
                <br/>
                <div className='someinfo'>I'm Aman Borkar currently studing as geologist in Indian Institue of technology Roorkee, Uttarakhand.
                <br/>
                <br/>
                My dream is to be a full stack web developer.
                <br/>
                <br/>
                PS: I'm on my Knees with my seniors standing behind
                </div>
            </div>
            <div className='rightside'>
                    <div className='image'><img className='myimgwithseniors' src={IM}/>
            </div></div>
        </div>
    </div>
  )
}

export default Aboutme