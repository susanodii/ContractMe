import { Link, } from "react-router-dom";
import React from 'react'

const NavDesktop = () => {
  return (
    

<ul className= 'md:flex  justify-evenly p-2 text-lg font-medium   w-full  gap-12 top-40  basis-1/2 justify-center items-center'  >
           
              

          
           <Link className="active:text-blue500 visited:text-blue500 hover:text-blue500" to={"hire-artisans"}>
             <li className="hire-artisans ">Hire Artisans</li>
           </Link>
          
           <Link className="active:text-blue500 visited:text-blue500 hover:text-blue500" to={"FindWorkPage"}>
           <li className="Find-work">Find Work</li>
           </Link>
           
           <Link className="active:text-blue500 visited:text-blue500 hover:text-blue500" to={"AboutUsPage"}>
           
           <li className="about-us">About Us</li>

           </Link>
           
           
         </ul>
    
  )
}

export default NavDesktop