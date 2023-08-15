import UploadedForm from './UploadedForm'
import { VerificationOrderThree } from './VerificationOrderThree'

export const VerificationThree = () => {
  return (
    
    <div className="w-full pl-24  pr-24 mt-20 font- eczar">
    <div className="">
     
     

      <div className="">
        <h5 className='text-2xl  mb-4'> Hello Debbie,</h5>

        <h2 className="text-black   text-3xl  font-extrabold mb-4">
          {' '}
          Final Step
        </h2>
        <h6 className='text-2xl  '>
          {' '}
          Tell us about your business and you will be on your way to hire
          talents
        </h6>

        <div className="  p-4 shadow-md mt-10  ">
        {/* w-4/5 */}
        <div className='p-8'>

          <VerificationOrderThree />
        </div>
         
          <div>

          <form className='text-xl p-8'>
      <p className='text-black font-extrabold mb-4'>How many people are in your company ?</p>
      <input type="radio" checked='checked' autocomplete="off" defaultValue={1}  />
      <label htmlFor="1"  className="ml-4">It's Just me </label><br />
      <input type="radio"  autocomplete="off"  name="age" disabled={true}    defaultValue={20} />
      <label htmlFor="2" className="ml-4">1 - 20 employees</label><br />  
      <input type="radio" disabled={true} defaultValue={100} />
      <label htmlFor="3" className="ml-4">50 - 100 employees</label> <br/>
      
      <input type="radio"  disabled={true}defaultValue={1000} className='bg-blue500' />
      <label htmlFor="4" className="ml-4 " >100 - 1000 employees </label> <br/>

      <input type="radio" defaultValue={1500} disabled={true} className='border-2 bg-blue500'/>
      <label htmlFor="5" className="ml-4">Above 1000 employees </label> <br/>


      
    </form>

    <div className=''>

<UploadedForm/>      
    </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VerificationThree