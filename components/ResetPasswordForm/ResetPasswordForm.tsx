import { Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { checkPassword } from 'helpers/validations'

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Error states
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'password') {
      setPassword(value)
      setPasswordError(value ? '' : 'Password is required')
    } else {
      setConfirmPassword(value)
      setConfirmPasswordError(value ? '' : 'Confirm password is required')
    }
  }

  // handle submit function for form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if password and confirm password match
    const isPasswordMatched = checkPassword(password, confirmPassword)

    // Checks if email is empty
    if (!password || !confirmPassword) {
      if (!password) {
        setPasswordError('Password is required')
      }

      if (!confirmPassword) {
        setConfirmPasswordError('Confirm password is required')
      }

      // Stops the execution of the function
      return
    }

    // Checks if password and confirm password match
    if (!isPasswordMatched) {
      setConfirmPasswordError('Passwords do not match')
      return
    }

    // Logs form data
    console.log('passowrd is ', password)
    console.log('confirm password is ', confirmPassword)

    // Reset form fields
    setPassword('')
    setConfirmPassword('')

    // Reset error states
    setPasswordError('')
    setConfirmPasswordError('')
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

            <Typography variant='h5' className='text-green   mt-[10px] p-0'>
              {' '}
              <span className='font-[800]'>New Password</span>
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
          <Typography variant='body2' className='text-white normal-case  mt-[10px] p-0'>
            {' '}
            Enter your new password
          </Typography>
        </div>
        <div className='mt-[24px] md:mt-[36px]'>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-wrap gap-y-[8px] md:gap-y-[24px]'>
              <div className='w-full'>
                <InputField
                  label='password'
                  type='password'
                  inputColor='white'
                  name='password'
                  value={password}
                  errorText={passwordError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full'>
                <InputField
                  label='confirm password'
                  type='password'
                  inputColor='white'
                  name='confirmpassword'
                  value={confirmPassword}
                  errorText={confirmPasswordError}
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

export default ResetPasswordForm
