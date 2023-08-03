import { useState } from 'react'
import Navbar from '../NavBar/NavBar'
import SignupForm from '../SignupForm/SignupForm'
import AddShopDetailsForm from '../AddShopDetailsForm/AddShopDetailsForm'
import SignupStepper from '../SignupStepper/SignupStepper'
import styles from './styles.module.css'
import SignupSuccess from '../SignupSuccess/SignupSuccess'

export default function Signup() {
  const [activeStep, setActiveStep] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const StepperContent = () => {
    switch (activeStep) {
      case 0:
        return <SignupForm />
      case 1:
        return <AddShopDetailsForm />
      case 2:
        return <div className='text-white'>step 3</div>
      default:
        return <SignupForm />
    }
  }

  if (isSuccess) return <SignupSuccess setIsSuccess={setIsSuccess} />

  return (
    <div className={`${styles.signup}`}>
      <Navbar itemsColor='white' />
      <button onClick={() => setIsSuccess(true)}>success</button>
      <div className='w-[100vw] flex flex-col md:flex-row max-md:items-center justify-center mt-[-10px] md:mt-[30px] pb-[10px]'>
        <div className='w-[80%] flex md:hidden items-center justify-center my-[54px]'>
          <SignupStepper
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            handleReset={handleReset}
          />
        </div>

        <div
          style={{
            borderRadius: '5px',
            background: 'rgba(0, 0, 0, 0.60)',
            backdropFilter: 'blur(12.5px)',
          }}
          className='flex gap-x-[72px] w-[80vw] h-[auto] p-[20px] md:pl-[72px] md:pr-[43px] md:pb-[44px] relative'
        >
          <div className='w-[40%] hidden md:flex h-[100%] items-center justify-center'>
            <SignupStepper
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              handleReset={handleReset}
            />
          </div>
          <div className='w-[100%] md:w-[60%]'>
            {/* <SignupForm /> */}
            {StepperContent()}
          </div>
        </div>
      </div>
    </div>
  )
}
