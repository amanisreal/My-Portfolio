import React, {useState} from 'react'
import Projectfiles from "./projectsfile"
import "./projects.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"




function Projects() {

  const [current, setCurrent] = useState(0);
  const length = Projectfiles.length

  const nextSlide = () =>{
    setCurrent(current === Projectfiles.length -1? 0: current+1);
  }

  const prevSlide = () =>{
    setCurrent(current === 0? Projectfiles.length -1 : current -1)
  }

  if(!Array.isArray(Projectfiles) || Projectfiles.length <=0){
    return null
  }

  return (
    <div id="projectscontainer" className='projectscontainer'>
    <div className='heading'>Projects</div>
    
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        
            {Projectfiles.map((slide, index) =>{
              console.log(slide.image);
                  return(
                    <>
                   
                    <div className='project-container'>
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    <a href={slide.link}>
                   <div className='imageside'>
                   
                   {index === current && ( <div><div className='textheader'>{slide.name}</div> <br/><img className='image' key={slide.id} src={slide.image} alt={slide.name}/></div>)}
                   
                    </div>
                    <div className='textside'>
                      {index=== current && ( <p className='text' key={slide.id}>{slide.description} </p>)}
                    </div>
                    </a>
                    </div> 

                   {/*<div className='textside'>
                    <p>{slide.name}</p>
                    <span>{slide.description}</span>
                    </div> */} 
                    </div>
                    </>
                  )
            })}
        </div>
        
    
  )
}

export default Projects