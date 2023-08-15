import Line_2 from '../../assets/Line_2.png'
import Text2_2 from '../../assets/Text_2.png'
import Text_3 from '../../assets/Text_3.png'
import add_icon from '../../assets/add_icon.png'
import cancle_icon from '../../assets/cancle_icon.png'
import { icons } from '../../assets'
import text_4 from '../../assets/text_4.png'
import text_one from '../../assets/text_one.png'

const StrongHeadline = () => {
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
          <div className="self-center h-10 w-10 flex  flex-col items-center justify-center  rounded-full border-2 border-blue50 ">
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
            What are the main skills required for<br/> this gig?{' '}
          </h2>
        </div>

        {/* search skills box */}
        <div className='  w-2/5 pl-2 pr-2 '>
          <h4 className=" font-semibold font-eczar">
            Search the skills or add your own
          </h4>
{/* input part */}
          <div className="relative border rounded 2xl  border-lightGrey  px-10 py-3 mt-4">
            <img className="inline-block mr-4  cursor-pointer" src={icons.search} alt="" />

            <input className="focus:outline-none focus:border-none"
            type="text"/>
          </div>
          <h6>For best result, add 3-5 skills</h6>
       
       {/* skills display */}

       <div className='flex flex-wrap gap-3'>
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-blue500 bg-blue500 p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-white'>Strong driving record</h6>
<div className=''>
<img src={cancle_icon} alt='' className=' '/>
</div>

</div>
        
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-blue500 bg-blue500 p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-white'>Navigation</h6>
<div className=''>
<img src={cancle_icon} alt='' className=' '/>
</div>

</div>
<div className=' flex flex-wrap gap-2 justify-center items-center border border rounded-3xl border-blue500  bg-blue500 p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-white'>Physical fitness</h6>
<div className=''>
<img src={cancle_icon} alt='' className=' '/>
</div>

</div>

<div className='flex flex-wrap gap-2 justify-center items-center border border rounded-3xl border-blue500 bg-blue500  p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-white'>Focus</h6>
<div className=''>
<img src={cancle_icon} alt='' className=' '/>
</div>
</div>
       </div>


       {/* second line skills */}

       <div className='flex flex-wrap gap-3'>
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-blue500 bg-blue500 p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-white'>Knowledge of safety regulations </h6>
<div className=''>
<img src={cancle_icon} alt='' className=' '/>
</div>

</div>
        
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-blue500 bg-blue500 p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-white'>Knowledge of traffic laws </h6>
<div className=''>
<img src={cancle_icon} alt='' className=' '/>
</div>

</div>

{/* popular skills for drivers */}
<div className=''>
<h4 className=" font-semibold font-eczar mt-4">
            Popular skills for drivers
          </h4>

  {/* popular skilss */}
       <div className='flex flex-wrap gap-3'>
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-lightGrey bg-lightGrey p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Strong driving record </h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>

</div>
        
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-lightGrey bg-lightGrey p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Navigation</h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>

</div>
<div className=' flex flex-wrap gap-2 justify-center items-center border border rounded-3xl border-lightGrey  bg-lightGrey p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Physical fitness</h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>

</div>

<div className='flex flex-wrap gap-2 justify-center items-center border border rounded-3xl border-lightGrey bg-lightGrey  p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Focus</h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>
</div>
       </div>


       {/* second line skills */}

       <div className='flex flex-wrap gap-3'>
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-lightGrey bg-lightGrey p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Knowledge of safety regulations </h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>

</div>
        
<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-lightGrey bg-lightGrey p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Knowledge of traffic laws </h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>

</div>

<div className='flex flex-wrap gap-2 justify-center items-center border rounded-3xl border-lightGrey bg-lightGrey p-2 border-b-4 mt-4  '>
<h6 className='font-inter text-black'>Customer service </h6>
<div className=''>
<img src={add_icon} alt='' className=' '/>
</div>

</div>
</div>
  
</div>


       </div>
       <div className='flex flex-wray justify-end gap-5 mt-8'>
       <button className='p-5 text-xl text-blue500' > Previous Step </button>
        
        <button className='bg-blue500 p-3 text-white text-xl  border rounded-2xl'> Next Step</button>
       </div>
      
        </div>

        
      </section>
    </div>
  )
}

export default StrongHeadline
