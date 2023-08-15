import '../GeneralStyle.css'

const VeficationForm = () => {
  return (
    <div >
<form>
<div className="m-4 text-center" id="verify-input1">
<input type="text" placeholder="Company Name" className="p-4  w-2/5 mr-12  border-2 border-offWhite rounded-md  outline-blue500"  />
<input type="text" placeholder="Company Adderess" className="p-4  w-2/5 border-2 border-offWhite  rounded-md outline-blue500"   />
    </div>
    
    <div className="m-4 text-center" id="verify-input2">
<input type="text" placeholder="Company Website" className="p-4  w-2/5 mr-12 border-2 border-offWhite rounded-md outline-blue500"  />
<input type="text" placeholder="Company Phone Number" className="p-4  w-2/5 border-2 border-offWhite  rounded-md outline-blue500"   />
    </div>
    <div className='continue'>

        <button type='submit' className='p-4 w-36 text-white bg-blue500 border-2 rounded-md text-2xl'> Continue </button>
    </div>
    
</form>
        
    </div>
  )
}

export default VeficationForm