import Line_2 from '../../assets/Line_2.png'
import React from 'react'
import Text2_2 from '../../assets/Text2_2.png'
import blueCircleFrame from '../../assets/blueCircleFrame.png'
import text_4 from '../../assets/text_4.png'
import text_one from '../../assets/text_one.png'
import three_light from '../../assets/three_light.png'

const Budget = () => {
  return (
    <div className=" mt-16 pl-8 pr-8">
    <section className="flex flex-wrap flex  items-center justify-center ">
      <div className="mr-4 flex  flex-col ">
        <div className="self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50  bg-blue500">
          <img src={text_one} alt="one" className="" />
        </div>
        <h2 className="text-xl font-inter"> Headline</h2>
      </div>
      <div className="mr-8 mt-4">
        <img src={Line_2} alt="arrow" />
      </div>
      <div className="mr-4 flex flex-col">
        <div className="self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue500 bg-blue500 ">
          <img src={Text2_2} alt="two" className="" />
        </div>
        <h2 className="text-xl font-inter">Skills required</h2>
      </div>
      <div className="mr-8 mt-4 ">
        <img src={Line_2} alt="arrow" />
      </div>
      <div className="">
        <div className="self-center h-10 w-10 flex  flex-col items-center justify-center bg-blue500  rounded-full border-2 border-blue50 ">
          <img src={three_light} alt="one" className="three" />
        </div>
        <h2 className="text-xl font-inter">Scope</h2>
      </div>

      <div className="mr-8 mt-4 ">
        <img src={Line_2} alt="arrow" />
      </div>

      <div className="">
        <div className="self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 ">
          <img src={text_4} alt="one" className="three" />
        </div>
        <h2 className="text-xl font-inter">Budget</h2>
      </div>
    </section>


    <section className="flex flex-wrap mt-16 justify-around items-start mr-4 ml-8 w-full">
        <div className="  ">
          <h2 className="text-3xl font-eczar text-dark font-semibold pl-12">
          What is your budget?
          </h2>
          <h6 className='pl-12 font-inter'>This will help us match you to talent within your range.</h6>
        </div>

        {/* search skills box */}
        <div className='  w-2/5 pl-2 pr-2  border border-dark '>
          {/* choose project and hourly rate */}
<div className='flex flex-wrap border border-blue500 w-1/3 p-4 rounded-xl'>
  {/* hourly rates */}
  <div className='flex flex-wrap border border-dark w-full  justify-between'>
{/* blue circle frame */}
<div className='flex flex-col'>
  <div className='w-10 '>

<img src={blueCircleFrame} alt='blue circle frame' className=''/>
  </div>
<h4> Hourly rates</h4>
</div>

{/* radio input */}
<div class>
<input 
className = 'border border-dark'

type="radio"
name='hourlyRate'
 />
 
</div>

    <div>

    </div>
    
  </div>
  
  {/* project budget */}
  
  <div></div>
  
  
</div>
          
        </div>
        </section>
    </div>
  )
}


export default Budget