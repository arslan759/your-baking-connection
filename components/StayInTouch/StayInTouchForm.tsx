import React, { useState, ChangeEvent } from 'react'
import { Button, TextField, Typography } from '@mui/material'

import StayInTouchButton from './StayInTouchButton'
import { PrimaryBtn } from '../Buttons'
import styles from './styles.module.css'
import { stylesModuleMui } from './styles.module'
import { validateEmail } from 'helpers/validations'
import InputField from '../InputField'

const StayInTouchForm = (): JSX.Element => {
  const [email, setEmail] = useState('')
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

    // Checks if email or password is empty
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
  }

  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className='flex justify-center items-center flex-col w-full text-white'>
          <Typography variant='h5' sx={stylesModuleMui.heading}>
            Let's Stay In Touch
          </Typography>
          <Typography variant='body1' sx={stylesModuleMui.text}>
            Get the latest news, find out about new bakers in your area and exclusive promotions
            conveniently in your inbox!
          </Typography>
        </div>
        <div
          className='border w-full'
          style={{
            border: '2px solid red',
          }}
        >
          {/* <TextField
            id='outlined-basic'
            label='Enter your email address'
            variant='outlined'
            sx={stylesModuleMui.textField}
            InputLabelProps={{
              style: {
                color: 'white',
                fontSize: '12px',
              },
            }}
            value={email}
            onChange={handleChange}
          /> */}
          <form
            onSubmit={handleSubmit}
            className='flex flex-row gap-x-[16px] justify-center items-center'
            style={{
              border: '2px solid yellow',
            }}
          >
            <div className='mt-2.5 w-[193px] md:w-[551px] text-white'>
              <InputField
                // label='email'
                type='text'
                inputColor='white'
                name='email'
                value={email}
                // error={isError}
                placeholder='Enter your email'
                errorText={emailErr}
                required={false}
                onChange={handleChange}
              />
            </div>
            <div className='rounded-[12px] overflow-hidden w-[4.56rem] md:w-[10rem]'>
              <PrimaryBtn type='submit' text='Submit' />
              {/* <StayInTouchButton handleSubmit={handleSubmit} /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StayInTouchForm
