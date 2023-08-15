import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import AboutUsPage from './Pages/AboutUsPage'
import Budget from './components/PostAJob/Budget.jsx'
import BusinessOwnerSignUp from './components/SignUp/BusinessOwnerSignUp'
import FindWorkPage from './Pages/FindWorkPage'
import Footer from './components/Footer/Footer'
import GeneralSignUp from './components/SignUp/GeneralSignUp'
import HireArtisans from './Pages/HireArtisanPage'
import HomePage from './Pages/HomePage'
import Input from './components/UI/Input'
import NavMenu from './components/Header/NavMenu'
import ScopeOfWork from './components/PostAJob/ScopeOfWork'
import StrongHeadline from './components/PostAJob/StrongHeadline.jsx'
import { UserContext } from './context/user-context'
import UserContextProvider from './context/user-context'
import VerificationOne from './BusinessVerificationFolder/VerificationOne'
import VerificationThree from './BusinessVerificationFolder/VerificationThree'
import VerificationTwo from './BusinessVerificationFolder/VerificationTwo'

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('loggedIn'))
    if (data) {
      console.log('User has an account')
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  return (
    <div className="pt-4">
      <UserContextProvider>
        <BrowserRouter>
          <NavMenu />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="sign-up" element={<GeneralSignUp />} />
            <Route exact path="AboutUsPage" element={<AboutUsPage />} />
              <Route path = "ScopeOfWork" element={<ScopeOfWork/>}/>
            <Route exact path="FindWorkPage" element={<FindWorkPage />} />
            <Route path="Input" element={<Input />} />
<Route path="StrongHeadline" element = {<StrongHeadline/>}/>
            <Route path="hire-artisans" element={<HireArtisans />} />
            <Route
              exact
              path="business-owner-sign-up"
              element={<BusinessOwnerSignUp />}
            />
              <Route exact path ="Budget" element={<Budget/>}/>
            

            <Route exact path='VerificationOne' element={<VerificationOne/>}/>
            <Route  path='VerificationTwo' element={<VerificationTwo/>}/>
            <Route exact path='VerificationThree' element={<VerificationThree/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}
export default App
