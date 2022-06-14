import React from 'react'
import './Navbar.css'



function Navbar() {
  return (
    <div className='navbar'>
          <ul className='navigation'>
            <li><a href='/'>Home</a></li>
            <li><a href='projects' title="projects">Projects</a></li>
            <li><a href='https://www.linkedin.com/in/lavanya-nimushakavi/' target='_blank'>LinkedIn</a></li>
            <li><a href='https://github.com/lavnimusha' target='_blank'>GitHub</a></li>
          </ul>
        </div>
  )
}

export default Navbar