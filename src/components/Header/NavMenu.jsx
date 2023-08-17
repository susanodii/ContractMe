import * as React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import { UserContext } from "../../context/user-context";

const NavMenu = () => {
  const { isLoggedIn } = React.useContext(UserContext);
  const location = useLocation();
  const isSignUp = location.pathname.match(/\/(\w+\-)*sign-up/);
 
  let navigate = useNavigate();
  const signUpClickHandler = () => {
    let destinationPath = "/sign-up";
    navigate(destinationPath);
  };

  
  
  return (
    <>
      {isSignUp ? (
        <>  </>
      ) : (
        <header className="container mx-auto">
          <nav className="flex justify-evenly items-center">
            <h2 className="font-bodoni font-extrabold text-blue500 text-3xl">
              <Link to={'/'}>
              
              ContractMe
              </Link>
            </h2>
            <ul className="flex justify-evenly basis-1/2 items-center p-2 text-lg font-medium">
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
              <div className="space-x-6">
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
