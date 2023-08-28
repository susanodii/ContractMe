import React from 'react'
import faqArrow from '../../assets/dropDown_arrow.png'

const FAQ = () => {
 
  const faqs =[
    {
      question: 'How do I contact ContractMe?',
      image :faqArrow
    },
    
  {
    question : 'What is a proposal?',
    image :faqArrow
  },

  {
    question : 'What are invites?',
    image :faqArrow
  },

  {

    question: 'How do i create an account as an SME owner?',
     image :faqArrow

  },

  {
    question : 'What does account verification mean?',
    image :faqArrow
  },

  {
    question : 'What is a proposal?',
     image :faqArrow
  },
  {
    question : 'What are the percentages for every gig?',
    image :faqArrow
  },
  {
    question : 'How do i stop a gig after payment have been made?',
     image :faqArrow
  },
  ] 
  
  
  
  return (
    // sm:mt-32 p-4 md:ml-4 md:mr-4 md:mt-8 lg:ml-56 lg:mr-96
    <section className='sm:mt-20 text-xl md:mr-4   lg:pl-56 lg:pr-96 '>
      <h4 className='text-center  '> Needs Clerification ?</h4>
<p className='text-center text-2xl  text-dark font-extrabold mb-8'>Frequently Asked Questions</p>
     
      <div className='flex flex-col gap-6 pb-4 '>
{faqs.map((questions) =>(
  <div className=' border-b flex justify-between  items-center  mb-8 p-4  
  font-eczar font-normal'>
{questions.question}

<img  className='cursor-pointer' src={questions.image} alt='dropDown_icon'/>
  </div>
))}
        
      </div>
    </section>
  )
}

export default FAQ
