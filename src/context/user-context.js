import { createContext, useState } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const updateLoggedIn = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    localStorage.setItem("loggedIn", loggedIn)
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, updateLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
