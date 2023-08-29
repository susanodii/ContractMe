import { Formik } from 'formik'
import { UserContext } from '../context/user-context'
import VerificationOrder from './VerificationOrder'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const VerificationOne = () => {
  const { updateLoggedIn } = useContext(UserContext)
  let navigate = useNavigate()

  //   const handleSubmit = function(e){
  // e.preventDefault()

  // updateLoggedIn(true)
  // navigate("/VerificationTwo");

  // }

  return (
    <div className=" w-full pl-16 pr-16 mt-20 font- eczar">
      <div className="">
        <div className=" ">
          <h5 className="text-2xl mb-4 "> Hello Debbie,</h5>

          <h2 className="text-black   text-3xl  font-extrabold mb-4">
            {' '}
            Welcome to ContractMe
          </h2>
          <h6 className="text-2xl  ">
            {' '}
            Tell us about your business and you will be on your way to hire
            talents
          </h6>

          <div className=" w-full shadow-md mt-10 mb-4 h-full sm:p-4">
            <VerificationOrder />

            <div className="mt-16">
              <Formik
                initialValues={{ name: '', tel: '', adderess: '', website: '' }}
                validate={(values) => {
                  const errors = {}
                  if (!values.name) {
                    errors.name = 'Required'
                  }

                  if (!values.adderess) {
                    errors.adderess = 'Required'
                  }

                  if (!values.website) {
                    errors.website = 'Required'
                  }

                  if (!values.tel) {
                    errors.tel = 'Required'
                  } else if (
                    !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
                      values.tel
                    )
                  ) {
                    errors.tel = 'Invalid Number'
                  }
                  return errors
                }}
                onSubmit={(values, handleSubmit) => {
                  //  setTimeout(() => {
                  //    alert(JSON.stringify(values, null, 2));
                  //    setSubmitting(false);
                  //  }, 400);

                  updateLoggedIn(true)
                  navigate('/VerificationTwo')
                  console.log(values)
                  console.log(handleSubmit)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form
                    className=" text-xl mt-8 p-0 md:pl-12 "
                    onSubmit={handleSubmit}
                  >
                    <p className="text-black font-extrabold mb-4 ">
                      How many people are in your company ?
                    </p>
                    <input
                      type="radio"
                      className=""
                      name="radioButton"
                      defaultValue={1}
                    />
                    <label htmlFor="1" className="ml-4">
                      It's Just me{' '}
                    </label>
                    <br />
                    <input
                      type="radio"
                      className=""
                      name="radioButton"
                      defaultValue={20}
                    />
                    <label htmlFor="2" className="ml-4">
                      1 - 20 employees
                    </label>
                    <br />
                    <input
                      type="radio"
                      className=""
                      name="radioButton"
                      defaultValue={100}
                    />
                    <label htmlFor="3" className="ml-4">
                      50 - 100 employees
                    </label>{' '}
                    <br />
                    <input
                      type="radio"
                      className=""
                      name="radioButton"
                      defaultValue={1000}
                    />
                    <label htmlFor="4" className="ml-4">
                      100 - 1000 employees{' '}
                    </label>{' '}
                    <br />
                    <input
                      type="radio"
                      className=""
                      name="radioButton"
                      defaultValue={1500}
                    />
                    <label htmlFor="5" className="ml-4">
                      Above 1000 employees{' '}
                    </label>{' '}
                    <br />
                    <div className="mt-8   w-full  " id="verify-input1">
                      <div className="flex flex-wrap gap-14  ">
                        <div className="flex flex-wrap flex-col md:w-2/5  ">
                          <input
                            type="text"
                            placeholder="Company Name"
                            name="name"
                            className="p-4  w-full mr-12  border-2 border-offWhite rounded-md  outline-blue500   "
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <div className="w-full mt-4 ">
                            {errors.name && touched.name && (
                              <span className="text-red w-full  ">
                                {' '}
                                {errors.name}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="  flex flex-wrap flex-col md:w-2/5  ">
                          <input
                            type="text"
                            placeholder="Company Adderess"
                            name="adderess"
                            className="p-4  w-full border-2 border-offWhite  rounded-md outline-blue500 "
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.adderess}
                          />

                          <div className="w-full mt-4">
                            {errors.adderess && touched.adderess && (
                              <span className="text-red  mt-4 ">
                                {errors.adderess}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>



                    {/* second input */}
                    <div className="mt-8  w-full" id="verify-input2">
                      <div className="flex flex-wrap gap-14 ">

                        <div className= ' flex flex-wrap flex-col md:w-2/5'>
                        <input
                          type="text"
                          name="website"
                          placeholder="Company Website"
                          className="p-4  w-full mr-12 border-2 border-offWhite rounded-md outline-blue500  "
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.website}
                        />
                        <div className='w-full mt-4'>
                          {errors.website && touched.website && (
                            <span className="text-red   w-2/5 mt-4">
                              {errors.website}
                            </span>
                          )}
                        </div>
                        </div>
                        

{/* second */}
                        <div className='  flex flex-wrap flex-col md:w-2/5'>
                          
                          <input
                        type="text"
                        name="tel"
                        placeholder="Company Phone Number"
                        className="p-4  w-full border-2 border-offWhite  rounded-md outline-blue500  "
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel}
                      />

                      <div className='w-full mt-4'>
                        {errors.tel && touched.tel && (
                          <span className="text-red  w-full mt-4">
                            {errors.tel}
                          </span>
                        )}
                      </div>
                        
                        </div>
                      </div>

                     
                    </div>
                    <div className=" w-10/12 flex flex-wrap justify-end mt-16 pb-4">
                      <button
                        type="submit"
                        className="text-white bg-blue500 border-2 rounded-md text-xl font-semibold p-4"
                      >
                        {' '}
                        Continue{' '}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationOne
