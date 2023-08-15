import { Link, useLocation, useNavigate } from 'react-router-dom'

import Button from "../UI/Button";

export const NavMenuFindWork = () => {
  return (
    <div>
      <header className="container mx-auto">
        <nav className="flex justify-evenly items-center leading-4">
          <h1 className="font-bodoni font-extrabold text-blue500 text-3xl">
            ContractMe
          </h1>
          

          <ul className="flex justify-evenly basis-1/2 items-center p-2 text-lg font-medium">
            <Link
              className="active:text-blue500 visited:text-blue500 hover:text-blue500"
              to={'hire-artisans'}
            >
              <li className="hire-artisans ">Hire Artisans</li>
            </Link>


            <Link className="active:text-blue500 visited:text-blue500 hover:text-blue500" to={"Find Work"}>
                <li className="hire-artisans "> Find Work</li>
              </Link>

              <li className="about-us">About Us</li>
              
          </ul>
          
          <div>
            <Button className='bg-blue500 text-white text-base p-4 font-semibold'> My Account</Button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavMenuFindWork
