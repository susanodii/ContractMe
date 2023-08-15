import React from 'react'

 const CustomerCareLine = () => {
  return (
    <section className='mt-20   pl-56 pr-96 '> 
 <h4 className='text-center text-xl '> React out anytime</h4>
 <p className='text-center text-2xl  text-dark font-extrabold mb-8'>Contact Us</p>
 <div className=' flex flex-wrap justify-around'>
<div className=''>
<h3 className='text-xl  font-semibold  font-eczar'> Customer Support</h3>
<p className='font-inter  text-blue500 cursor-pointer underline'>
Visit Help Center
</p>
</div>

{/* 2 */}

<div className=''>
<h3 className='text-xl  font-semibold  font-eczar'> Enterprise Solution</h3>
<p className='font-inter  text-blue500 cursor-pointer underline'>
+23489210456
</p>
</div>

{/* 3 */}

<div className=''>
<h3 className='text-xl  font-semibold  font-eczar'> Our Offices</h3>
<p className='font-inter  text-blue500 cursor-pointer underline'>
Check Directions
</p>
</div>
 </div>
    </section>
  )
}

export default CustomerCareLine