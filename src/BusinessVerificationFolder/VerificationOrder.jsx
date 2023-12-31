// import ARROW from '../../src/assets/ARROW.png'

import Line_2 from "../../src/assets/Line_2.png";
import Text_1 from "../../src/assets/Text_1.png";
import Text_2 from "../../src/assets/Text_2.png";
import Text_3 from "../../src/assets/Text_3.png";

const VerificationOrder = () => {
 
  
  
 
  return (
    <div className=" ml-12 pt-8">
      <div className=" sm:hidden md:flex flex-wrap flex  items-start   ">
        <div className="mr-4 flex  flex-col " >
         
          <div className='self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 '>
            <img src={Text_1}   alt='one' className=""/>
          </div>
          <h2 className='text-2xl'> Business Information</h2>
        </div>
        <div className="mr-8 mt-4">
          
          
          <img src={Line_2} alt='arrow'/>
        </div>
        <div className="mr-4 flex flex-col">
          
        <div className='self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 '>
            <img src={Text_2}   alt='two' className=""/>
          </div>
          <h2 className='text-2xl'>Business Documents</h2>
        </div>
        <div className="mr-8 mt-4 ">
        
        <img src={Line_2} alt='arrow'/>
        </div>
        <div className="">
        
        <div className='self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 '>
            <img src={Text_3}   alt='one' className="three"/>
          </div>
          <h2 className='text-2xl'>Preview Information</h2>
        </div>
      </div>
    </div>
  )
}

export default VerificationOrder
