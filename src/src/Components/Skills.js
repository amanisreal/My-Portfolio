import React from 'react'
import "./skills.css"

function Skills() {
  return (
    <div id="skillscontainer" className='skillscontainer'>
        <div className='skillsheading'>
            My Skills
        </div>
        <div className='skills'>
        <div className='skillsgif' >
        <iframe src="https://giphy.com/embed/Xbn8ZbO95YeOJQtJz7" width="384" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/monday-computer-molehill-Xbn8ZbO95YeOJQtJz7">via GIPHY</a></p>
       </div>
            <div className='leftsideskills'>
                <ul className='skillsul'>
                    <li className='skillsli'>HTML5</li>
                    <li className='skillsli'>CSS3</li>
                    <li className='skillsli'>Javascript</li>
                    
                </ul>
            </div>

            <div className='middlekills'>
                <ul className='skillsul'>
                    <li className='skillsli'>ReactJs</li>
                    <li className='skillsli'>NodeJs</li>
                    <li className='skillsli'>ExpressJs</li>
                    
                </ul>
            </div>

            <div className='rightkills'>
                <ul className='skillsul'>
                    <li className='skillsli'>SQL</li>
                    <li className='skillsli'>MongoDB</li>
                    <li className='skillsli'>Mongoose</li>
                    
                </ul>
            </div>

            
        </div>
    </div>
  )
}

export default Skills