import { useState, useRef, useEffect } from "react";
import './PageOne.css'

import Navbar from './Navbar'




const PageOne = () => {

  return (
      <div className='container'>
          <div className="photobanner one">
          
      
       <img className="el" src='https://user-images.githubusercontent.com/40901373/172075859-6bab968e-41f6-406c-9d09-a9fbe4e945c1.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172072815-a8cd910a-936d-4eeb-aac2-2a7e811c4693.png' alt='first project'  />
       <img className="el" src='https://user-images.githubusercontent.com/40901373/172070067-c3d74775-d98c-4e8e-923c-5b987e0ac9a0.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172025434-1186c07f-4846-417d-8d5c-57c6207a0793.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075535-af251635-cc6c-4172-93c0-fe0ddd842359.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172271326-6ad3b545-8526-4d00-beef-5308437c6703.png' alt='first project'  /> 
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073685-bb1e548d-aed3-4b14-acca-893055057cb6.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172074387-574e2494-3fe3-436c-b02b-08d277cc8f21.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075630-8234d657-f781-44c6-b5b8-0a6b557f043d.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075960-3a692bb8-88db-47d7-9748-295feda1f221.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073495-babd844c-91aa-4ab4-9305-50f2e98bdc54.png' alt='first project'  />
      <img className="el" src="https://user-images.githubusercontent.com/40901373/172073251-c7f538af-f3b9-4309-b25f-9267627da035.png" alt='first project'  /> 
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075859-6bab968e-41f6-406c-9d09-a9fbe4e945c1.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172072815-a8cd910a-936d-4eeb-aac2-2a7e811c4693.png' alt='first project'  />
       <img className="el" src='https://user-images.githubusercontent.com/40901373/172070067-c3d74775-d98c-4e8e-923c-5b987e0ac9a0.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172025434-1186c07f-4846-417d-8d5c-57c6207a0793.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075535-af251635-cc6c-4172-93c0-fe0ddd842359.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172271326-6ad3b545-8526-4d00-beef-5308437c6703.png' alt='first project'  /> 
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073685-bb1e548d-aed3-4b14-acca-893055057cb6.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172074387-574e2494-3fe3-436c-b02b-08d277cc8f21.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075630-8234d657-f781-44c6-b5b8-0a6b557f043d.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075960-3a692bb8-88db-47d7-9748-295feda1f221.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073495-babd844c-91aa-4ab4-9305-50f2e98bdc54.png' alt='first project'  />
      <img className="el" src="https://user-images.githubusercontent.com/40901373/172073251-c7f538af-f3b9-4309-b25f-9267627da035.png" alt='first project'  />
    </div>
    
    <div className='photobanner two'>

       <img className="el" src='https://user-images.githubusercontent.com/40901373/172075859-6bab968e-41f6-406c-9d09-a9fbe4e945c1.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172072815-a8cd910a-936d-4eeb-aac2-2a7e811c4693.png' alt='first project'  />
       <img className="el" src='https://user-images.githubusercontent.com/40901373/172070067-c3d74775-d98c-4e8e-923c-5b987e0ac9a0.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172025434-1186c07f-4846-417d-8d5c-57c6207a0793.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075535-af251635-cc6c-4172-93c0-fe0ddd842359.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172271326-6ad3b545-8526-4d00-beef-5308437c6703.png' alt='first project'  /> 
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073685-bb1e548d-aed3-4b14-acca-893055057cb6.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172074387-574e2494-3fe3-436c-b02b-08d277cc8f21.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075630-8234d657-f781-44c6-b5b8-0a6b557f043d.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075960-3a692bb8-88db-47d7-9748-295feda1f221.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073495-babd844c-91aa-4ab4-9305-50f2e98bdc54.png' alt='first project'  />
      <img className="el" src="https://user-images.githubusercontent.com/40901373/172073251-c7f538af-f3b9-4309-b25f-9267627da035.png" alt='first project'  /> 
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075859-6bab968e-41f6-406c-9d09-a9fbe4e945c1.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172072815-a8cd910a-936d-4eeb-aac2-2a7e811c4693.png' alt='first project'  />
       <img className="el" src='https://user-images.githubusercontent.com/40901373/172070067-c3d74775-d98c-4e8e-923c-5b987e0ac9a0.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172025434-1186c07f-4846-417d-8d5c-57c6207a0793.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075535-af251635-cc6c-4172-93c0-fe0ddd842359.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172271326-6ad3b545-8526-4d00-beef-5308437c6703.png' alt='first project'  /> 
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073685-bb1e548d-aed3-4b14-acca-893055057cb6.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172074387-574e2494-3fe3-436c-b02b-08d277cc8f21.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075630-8234d657-f781-44c6-b5b8-0a6b557f043d.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172075960-3a692bb8-88db-47d7-9748-295feda1f221.png' alt='first project'  />
      <img className="el" src='https://user-images.githubusercontent.com/40901373/172073495-babd844c-91aa-4ab4-9305-50f2e98bdc54.png' alt='first project'  />
      <img className="el" src="https://user-images.githubusercontent.com/40901373/172073251-c7f538af-f3b9-4309-b25f-9267627da035.png" alt='first project'  />
    
    </div>
    <div className='overlay'>
        <h1>Hi There! I'm Lavanya</h1>
        <h3>A Frontend Developer </h3>
       <Navbar/>
       
    </div>
    </div>
    
  );
};

export default PageOne;