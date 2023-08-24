import * as React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext, } from "../../context/user-context";
import { useState } from 'react'

const NavMenu = () => {
  const { isLoggedIn } = React.useContext(UserContext);
  const location = useLocation();
  const isSignUp = location.pathname.match(/\/(\w+\-)*sign-up/);
 
  let navigate = useNavigate();
  const signUpClickHandler = () => {
    let destinationPath = "/sign-up";
    navigate(destinationPath);
  };

  
  const [ active, setActive] = useState(false)

  const showMenu = () =>{
    setActive(!active)
  }
  
  return (
    <>
      {isSignUp ? (
        <>  </>
      ) : (
        <header className="container mx-auto w-full  border-2 border-blue-500">
          <nav className=" h-full sm: h-full flex fixed  justify-start items-center border-2  w-full border-rose-600 md:static justify-evenly h-full">
            <h2 className="font-bodoni font-extrabold text-blue500 text-3xl sm:absolute md:static left-0 top-2">
              <Link to={'/'}>
              
              ContractMe
              </Link>
            </h2>
            
             <div className={ !active ? 'scale-100 sm:block absolute top-2 right-10 scale-120  md:hidden' : 'hidden'}>
            <MenuIcon  onClick= {showMenu} className="scale-200"/>
              </div > 
              
            <ul className={!active ? 'hidden' : 'sm:flex flex-col justify-evenly items-center p-2 text-lg font-medium border-2 border-rose-600  w-full  gap-12 top-40 md:flex-row  basis-1/2 justify-center items-center'  }>
           
              

              <div className=  'sm:block md:hidden'  >
                
            <CloseIcon onClick= {showMenu} className=""/>
              </div>
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

            {isLoggedIn ? (
              <Button className="bg-blue500 text-white font-semibold text-lg">
              My account
              </Button>
            ) : (
              <div className="static flex flex-row  sm:flex gap-8 absolute left-0 top-14 gap-2 md:static  ">
                <Button className="text-blue500 border border-solid border-blue500 font-semibold text-lg ">
                  Log in
                </Button>
                <Button
                  onClick={signUpClickHandler}
                  className="bg-blue500 text-white font-semibold text-lg"
                >
                  Sign up
                </Button>

                
              </div>
            )}
          </nav>
        </header>
      )}{" "}
    </>
  );
};
export default NavMenu;
