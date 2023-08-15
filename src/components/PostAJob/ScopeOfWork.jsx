import Line_2 from '../../assets/Line_2.png'
import React from 'react'
import Text2_2 from '../../assets/Text2_2.png'
import Text_3 from '../../assets/Text_3.png'
import text_4 from '../../assets/text_4.png'
import text_one from '../../assets/text_one.png'

const ScopeOfWork = () => {
  return (
    <div className='mt-16 pl-8 pr-8'>
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
          <div className="self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 bg-blue500 ">
            <img src={Text2_2} alt="two" className="" />
          </div>
          <h2 className="text-xl font-inter">Skills required</h2>
        </div>
        <div className="mr-8 mt-4 ">
          <img src={Line_2} alt="arrow" />
        </div>
        <div className="">
          <div className="self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 ">
            <img src={Text_3} alt="one" className="three" />
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
          Next, estimate the scope of your work
          </h2>
          <h6 className='pl-12'> Consider the size of your project and how long it will take. </h6> 
        </div>

        {/* search skills box */}
        <div className='  w-2/5 pl-2 pr-2 '>
        {/* input part */}
         <form>
         <input  type='radio' name='scope' />
         <label className=''> 
            <span className='text-l ml-4 font-inter font-semibold'>Large </span> <br/>
        
 <span className='text-l ml-8 font-inter '> Longer term or complex initiatives for interstate.</span>
            </label><br/>

{/* meduim */}

<input  type='radio' name='scope'/>
         <label> 
            <span className='text-l ml-4 font-inter font-semibold'>Meduim </span> <br/>
        
 <span className='text-l ml-8 font-inter '> Medium
Longer term initiatives for local deliveries</span>
            </label><br/>

{/* small */}

<input  type='radio' name='scope'/>
         <label className=''> 
            <span className='text-l ml-4 font-inter font-semibold'>Small </span> <br/>
        
 <span className='text-l ml-8 font-inter '> Small
Short term or simple initiatives for single deliveries.</span>
            </label>

         </form>


         <div className='flex flex-wray justify-end gap-5 mt-8'>
       <button className='p-5 text-xl text-blue500' > Previous Step </button>
        
        <button className='bg-blue500 p-3 text-white text-xl  border rounded-2xl'> Next Step</button>
       </div>

          
</div>
</section>
    </div>
  )
}

export default ScopeOfWork