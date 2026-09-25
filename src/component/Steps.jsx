import { useState } from 'react'
import '../App.css'
import StepMessage from './StepMessage'
import Button from './Button'



const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function Step() {

  const [step, setStep] = useState(1)
  const[ isOpen, setIsOpen] = useState(true)

      function handlePrevious() {
        if ( step > 1) setStep((s) => s - 1)
      }

      function handleNext() {
        if ( step < 3 ) setStep((s) => s + 1)
      }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
    
    {isOpen && (
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>


        <StepMessage step={step}>
          

          {messages[step - 1]}
          <div className="buttons">
            <Button
            bgColor="#e7e7e7"
            textColor="#333"
            onClick={() => alert(`learn how to ${messages[step - 1]}` )}>
              Learn How
            </Button>
          </div>
        </StepMessage>


        {/* <p className='message'>
        Step {step}: {messages[step - 1]} 
      </p> */}

      <div className="buttons">
        <Button bgColor = '#795DF2' textColor = '#fff'
        onClick={handlePrevious}>
          <span>👈</span>
          Previous
        </Button>
        <Button bgColor = '#795DF2' textColor = '#fff'
        onClick={handleNext}>
          <span>👉</span>
          <span>🤓</span>
          Next
          </Button>
      </div>



      </div>

      
    )}
    
    </>
  )
}

export default Step
