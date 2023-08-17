import { useState } from 'react'
import Navbar from '../NavBar/NavBar'
import SignupForm from '../SignupForm/SignupForm'
import AddShopDetailsForm from '../AddShopDetailsForm/AddShopDetailsForm'
import SignupStepper from '../SignupStepper/SignupStepper'
import styles from './styles.module.css'
import SignupSuccess from '../SignupSuccess/SignupSuccess'

export default function Signup() {
  // const [activeStep, setActiveStep] = useState(0)
  // const [isSuccess, setIsSuccess] = useState(false)

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // }

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
  // }

  // const handleReset = () => {
  //   setActiveStep(0)
  // }

  // const StepperContent = () => {
  //   switch (activeStep) {
  //     case 0:
  //       return <SignupForm />
  //     case 1:
  //       return <AddShopDetailsForm />
  //     case 2:
  //       return <div className='text-white'>step 3</div>
  //     default:
  //       return <SignupForm />
  //   }
  // }

  // if (isSuccess) return <SignupSuccess setIsSuccess={setIsSuccess} />

  return (
    <div className={`${styles.signup}`}>
      <Navbar itemsColor='white' />
      {/* <button onClick={() => setIsSuccess(true)}>success</button> */}
      <SignupForm />
    </div>
  )
}
