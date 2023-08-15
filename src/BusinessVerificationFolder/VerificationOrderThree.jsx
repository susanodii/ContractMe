import Line_2 from "../../src/assets/Line_2.png";
import Text1_1 from "../../src/assets/Text1_1.png";
import Text2_2 from "../../src/assets/Text2_2.png";
import Text_3 from "../../src/assets/Text_3.png";

export const VerificationOrderThree = () => {
  return (
    
    <div>
    <div className="flex flex-wrap flex  items-center justify-start  ">
      <div className="mr-4 flex  flex-col " >
       
        <div className='self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 bg-blue500'>
          <img src={Text1_1}   alt='one' className=""/>
        </div>
        <h2 className='text-2xl'> Business Information</h2>
      </div>
      <div className="mr-8 mt-4">
        
        
        <img src={Line_2} alt='arrow'/>
      </div>
      <div className="mr-4 flex flex-col">
        
      <div className='self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 bg-blue500 '>
          <img src={Text2_2}   alt='two' className=""/>
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
