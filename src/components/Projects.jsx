import React,{useEffect, useState} from 'react'
import data from './Pro.json'
import './Projects.css'
import Navbar from './Navbar'


function Projects() {
    
    const arr = Object.entries(data)
    
   
  return (
      <div className='projects'>
        <div className='nav'>
            <Navbar/>
        </div>
          
          <div className='projects_cnt'>
        
       { arr.map((ele) =>
            <div className='pro_card'>
                <img src={ele[1].img} alt="project screen shot" />
                <h4>{ele[1].name}</h4>
                <p>{ele[1].description}</p><br/>
                <a href={ele[1].url}>Demo</a>
                
                </div>
        )}
    </div>
      </div>
    
    
  )
}

export default Projects