import '../components/GeneralStyle.css'

import { BsFillCloudArrowUpFill } from 'react-icons/bs'
import NIN from '../img/NIN.png'
import { UserContext } from '../context/user-context'
import { VerificationOrderTwo } from './VerificationOrderTwo'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const VerificationTwo = () => {
  const { updateLoggedIn } = useContext(UserContext)
  let navigate = useNavigate()

  const handleSubmit = function (e) {
    e.preventDefault()

    updateLoggedIn(true)
    navigate('/VerificationThree')
  }

  return (
    <div className=" w-full pl-16 pr-16 mt-20  font- eczar">
      <div className="">
        <div className="">
          <h5 className="text-2xl mb-4"> Hello Debbie,</h5>

          <h2 className="text-black   text-3xl  font-extrabold mb-4">
            {' '}
            You are almost done!!!
          </h2>
          <h6 className="text-2xl  ">
            {' '}
            Tell us about your business and you will be on your way to hire
            talents
          </h6>

          <div className="  shadow-md mt-16 ">
            <VerificationOrderTwo />
            <form onSubmit={handleSubmit}>
            <div id="upload-section-container" className="mt-16 flex gap-3  justify-center ">
              <div className=" text-xl w-full flex flex-col items-center justify-center justify-center">
                <h1 className="text-2xl text-black  font-extrabold">
                  {' '}
                  Certificate Of Incorporation
                </h1>
                <div className="  border-dashed border-2  border-blue500 mt-4 text-center p-4">
                  <button
                    id="btn-verify-2upload"
                    className=" bg-blue500 mt-12 mb-12 p-2  "
                  >
                    <BsFillCloudArrowUpFill
                      fontSize="3.5rem"
                      style={{ color: ' white' }}
                    />
                  </button>
                  <h3 className="text-black  font-extrabold w-full">
                    {' '}
                    Upload Certificate of Incoporation
                  </h3>
                  <p className="mt-4 w-full">
                    {' '}
                    You can import a document by uploading it or by scanning it
                    through a scanner{' '}
                  </p>
                </div>

                <p className=" mt-2 text-xl ">
                  Proof of business ownership such as: Certificate of
                  Incorporation issued by Corporation Affairs Commission.{' '}
                </p>
              </div>

              <div className="text-xl w-full flex flex-col items-center justify-center ">
                <h1 className="text-2xl text-black  font-extrabold">
                  {' '}
                  Form Of Identification
                </h1>
                <div className="  border-dashed border-2  border-blue500 mt-4 text-center p-10">
                  <div>
                    <img src={NIN} alt="nin" />
                  </div>
                </div>
                <p className=" mt-2 text-xl w-2/3">
                  {' '}
                  Identifications such as: National ID, Drivers Licence Card &
                  International Passport.
                </p>
              </div>

              
            </div>
           

            <div className=" mt-8 pb-4 w-11/12  flex flex-wrap justify-end   content-center">
              <button
                type="submit"
                className="p-4 w-36 text-blue500 bg-white  rounded-md font-semibold text-xl  "
              >
                {' '}
                Previous{' '}
              </button>

              <button
                
                className="text-white bg-blue500 border-2 rounded-md text-xl font-semibold p-4"
              >
                {' '}
                Continue{' '}
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationTwo



// firebase
/*


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZjoSRB3AEX54TZdO3KyJdR3CpMzwui6w",
  authDomain: "contractme-c52d7.firebaseapp.com",
  projectId: "contractme-c52d7",
  storageBucket: "contractme-c52d7.appspot.com",
  messagingSenderId: "950954215948",
  appId: "1:950954215948:web:553d1d63aeac5660897c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/