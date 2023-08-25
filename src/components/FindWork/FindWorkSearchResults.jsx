import ArtisanSearchFilters from "../HireArtisans/ArtisanSearchFilters";
import {BsBookmark} from 'react-icons/bs';
import {BsGeoAlt} from 'react-icons/bs'
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import truck from '../../assets/truck.png'

const WorkSearchResults = [

{
image : truck,


job : 'LIMA Delicacies',
jobDiscription : ' Experienced Logistics Driver',
jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',

  
},


{
image : truck,

job : 'LIMA Delicacies',
jobDiscription : ' Experienced Logistics Driver',
jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',

 
  
},

{
  image : truck,
  
  job : 'LIMA Delicacies',
  jobDiscription : ' Experienced Logistics Driver',
  jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',
  
    
  },

  {
    image : truck,
    
    job : 'LIMA Delicacies',
    jobDiscription : ' Experienced Logistics Driver',
    jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',
    
      
    },

    {
image : truck,

job : 'LIMA Delicacies',
jobDiscription : ' Experienced Logistics Driver',
jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',

 
  
},

{
  image : truck,
  
  job : 'LIMA Delicacies',
  jobDiscription : ' Experienced Logistics Driver',
  jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',
  
   
    
  },

  {
    image : truck,
    
    job : 'LIMA Delicacies',
    jobDiscription : ' Experienced Logistics Driver',
    jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',
    
     
      
    },

    {
image : truck,

job : 'LIMA Delicacies',
jobDiscription : ' Experienced Logistics Driver',
jobDiscriptionDetail : 'Ipsum purus massa nunc vestibulum vel id amet turpis...',

 
  
},
  
]

const FindWorkSearchResults = () => {
  return (
   <section className='flex   gap-8 ml-8 mt-12 w-10/12'>
<div className=" sm:hidden md:flex flex-wrap">  
<ArtisanSearchFilters/>
  
</div>


<section id="cheere" className=" flex flex-col  w-full " >
<div className="sm:block md:hidden">
        <MenuIcon/>
       </div>
<div className="flex items-start justify-between  text-black gap-10   md: pr-28 items-center">
       
       
        <p id='hi' className="text-2xl font-medium w-2/4"> 200+ Results</p>
        <div className="flex items-center justify-start gap-[0.5rem] text-base text-black-200">
          <span className=" text-base font-inter">Sort</span>

          <div className="rounded-lg box-border py-2 px-4 text-black border-[1px] border-lightGrey">
            <select
              className="bg-white border-none mr-4 text-lg font-medium"
              name="sortBy"
              id="sortBy"
            >
              <option value=""> Top-rated</option>
            </select>
          </div>
        </div>
      </div>
    
    
    {/* card section */}

    <div className='mt-4 flex flex-wrap gap-6'>

    
   {WorkSearchResults.map((artisan) => (
      <div id='eby' className='flex flex-col gap-2  border border-lightGrey rounded-2xl py-8 px-2  w-96'> 
      
      <div className='flex flex-col ml-2 mr-2'>
        <div className = 'flex flex-wrap' >
  <div  id ='susu'className='flex flex-wrap justify-between	w-full  mb-4'>

<div className='flex gap-2'>

<img src={artisan.image} alt='truck'/>
<div className='flex flex-col gap-2'> 
  <h4 className='  text-lg font-eczar'> {artisan.job}</h4>
  <div className="flex flex-wrap gap-2 justify-center items-center font-inter font-normal"> 
    <BsGeoAlt/>
    <p> Lago, Nigeria</p>
  </div>
</div>
</div>

<BsBookmark/>
  </div>

          
        </div>
        
        <div className='mb-4 font-bold font-eczar text-xl'>
        <p className= ''> {artisan.jobDiscription}</p>
        </div>

        <div className="mb-4 font-inter text-xl">

          <p> {artisan.jobDiscriptionDetail}</p>
        </div>

        <div className="flex flex-wrap justify-between">
<p className='font-inter text-lg '> 2 hours ago</p>
<p className='font-inter text-2xl text-blue500'> Apply</p>
        </div>
      </div>
      </div>
    ))
    
   }
   
    
    
    
    </div>
    
    </section>

   </section>
  
  )
}
export default FindWorkSearchResults
