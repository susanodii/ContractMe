import '../components/GeneralStyle.css'

import BusinessCert from '../img/BusinessCert.png'
import NIN from '../img/NIN.png'

const UploadedForm = () => {
  return (
    <div>
      <form>
        <div
          
          className="flex w-full  m-4 text-center  "
        >
          <h4 className="p-4 w-2/5  mr-12  border-2 border-offWhite rounded-md  outline-blue500 bg-offWhite">
            {' '}
            Debby Tech Enterprise
          </h4>
          <h4 className="p-4  w-2/5 mr-12  border-2 border-offWhite rounded-md  outline-blue500 bg-offWhite">
            {' '}
            www.debbietech.com
          </h4>
        </div>

       
       <div
          id="alredyUploadedForm"
          className="flex w-full  m-4 text-center  "
        >
          <h4 className="p-4 w-2/5   mr-12  border-2 border-offWhite rounded-md  outline-blue500 bg-offWhite">
            {' '}
            Lagos Nigeria
          </h4>
          <h4 className="p-4  w-2/5 mr-12  border-2 border-offWhite rounded-md  outline-blue500 bg-offWhite">
            {' '}
            90933445566
          </h4>
        </div>


        
        <div
          id="upload-section-container"
          className="mt-12 flex gap-16 p-4"
        >
          <div className=" w-2/5 content-center border-dashed border-2  border-blue500 mt-4 text-center p-8">
            <div className="content-center w-full flex justify-center">
              <img src={BusinessCert} alt="businessCert" />
            </div>
          </div>

          <div className=" w-2/5 border-dashed border-2  border-blue500 mt-4 text-center p-8 ">
            <div className="content-center w-full flex justify-center flex-col">
              <img src={NIN} alt="nin" />
            </div>
          </div>
        </div>

        



<div className=" mt-8 pb-4 w-10/12  flex flex-wrap justify-end   content-center">
             

              <button
                
                className="text-white bg-blue500 border-2 rounded-md text-xl font-semibold p-4"
              >
                {' '}
                Submit{' '}
              </button>
            </div>
      </form>
    </div>
  )
}

export default UploadedForm
