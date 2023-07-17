import { Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import { ForgetPasswordFormProps } from 'types'

const ForgotPasswordForm = ({ openOtp }: ForgetPasswordFormProps) => {
  const [email, setEmail] = useState('')

  // Error states
  const [emailErr, setEmailErr] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'email') {
      setEmail(value)
      setEmailErr(value ? '' : 'Email is required')
    }
  }

  // handle submit function for form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if email is valid
    const isEmailValid = validateEmail(email)

    // Checks if email is empty
    if (!email) {
      if (!email) {
        setEmailErr('Email is required')
      }
      return
    }

    // Checks if email is valid
    if (!isEmailValid) {
      setEmailErr('Email is not valid')
      return
    }

    // Logs form data
    console.log('email is ', email)

    // Reset form fields
    setEmail('')

    // Reset error states
    setEmailErr('')

    // Open otp modal
    openOtp()
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] mt-[170px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[auto] md:w-[491px] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography variant='body2' className='text-white uppercase tracking-[1px] p-0'>
              {' '}
              joining is quick and easy
            </Typography>

            <Typography variant='h5' className='text-green font-open_sans_bold mt-[10px] p-0'>
              {' '}
              <span className='font-[800]'>Forgot Password</span>
            </Typography>
          </div>
          <Image
            src='/Images/x-square.svg'
            alt='x-square'
            width={24}
            height={24}
            className='absolute top-[20px] right-[20px] cursor-pointer'
          />
        </div>
        <div>
          <Typography variant='body2' className='text-white normal-case  mt-[24px] p-0'>
            {' '}
            Please enter your email address and we will send you a code for password reset.
          </Typography>
        </div>
        <div className='mt-[24px] md:mt-[36px]'>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-wrap gap-y-[8px] md:gap-y-[24px]'>
              <div className='w-full'>
                <InputField
                  label='email'
                  type='text'
                  inputColor='white'
                  name='email'
                  value={email}
                  // error={isError}
                  errorText={emailErr}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='mt-[36px] md:mt-[24px]'>
              <PrimaryBtn text='Send' type='submit' />
            </div>
          </form>
        </div>
        <div className='w-full flex justify-center mt-[16px]'>
          <Typography variant='body1' className='text-white text-[12px] normal-case mt-[10px] p-0'>
            Copyright © 2023 Your Baking Connection
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm
