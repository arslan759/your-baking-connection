import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import PasswordField from '../PasswordField/PasswordField'

const SigninForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = React.useState(false)

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    console.log('name is ', name)
    console.log('value is ', value)

    if (name === 'email') {
      setEmail(value)
      console.log('email is ', value)
    } else {
      setPassword(value)
      console.log('password is ', value)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email)

    if (!isEmailValid) {
      console.log('email is not valid')
      return
    }

    console.log('email is ', email)
    console.log('password is ', password)
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] md:mt-[126px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[626px] md:h-[auto] md:w-[488px] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography variant='body2' className='text-white uppercase tracking-[1px] p-0'>
              {' '}
              WELCOME Back!
            </Typography>

            <Typography variant='h5' className='text-green  mt-[10px] p-0'>
              {' '}
              Sign in
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
        <div className='mt-[24px] md:mt-[42px]'>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-wrap gap-y-[8px] md:gap-y-[24px]'>
              <div className='w-full'>
                <InputField
                  label='email'
                  type='text'
                  inputColor='white'
                  name='email'
                  value={email}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>
              <div className='w-full'>
                <PasswordField
                  label='password'
                  name='password'
                  value={password}
                  inputColor='white'
                  // error={true}
                  // errorText='Password is required'
                  required
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div className='w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center mt-[24px]'>
              <div className=''>
                <div className='flex justify-start items-center text-[white]'>
                  <Checkbox
                    checked={checked}
                    onChange={handleChecked}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: 20,
                        height: 20,
                        color: '#fff',
                        borderRadius: '2px',
                        padding: '0px',
                      },
                    }}
                  />
                  <Typography
                    variant='body1'
                    className='text-[12px] flex justify-start items-center text-[white]'
                  >
                    Remember Password
                  </Typography>
                </div>
              </div>
              <div className='flex justify-end'>
                <a
                  href='/forgetpassword'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography variant='body1' className='text-[12px] text-green'>
                    Forget Password?
                  </Typography>
                </a>
              </div>
            </div>
            <div className='mt-[27px] md:mt-[20px]'>
              <PrimaryBtn text='Sign In' type='submit' />
            </div>

            <div className='flex justify-center items-center  mt-[20px]'>
              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
              <Typography variant='body1' className={`text-[12px] z-10 text-[white] mx-[10px]`}>
                OR
              </Typography>

              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
            </div>

            <div className='w-full flex flex-col items-center gap-[8px] md:gap-[24px] mt-[32px]'>
              <Typography variant='body1' className='text-[12px] text-[white]'>
                Don’t have an account? &nbsp;
                <a
                  href='/signup'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span className='text-green'>Sign Up</span>
                </a>
              </Typography>
              <Typography variant='body1' className='text-[12px] text-[white]'>
                Are you a baker?
                <a
                  href='/signin'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span className='text-green'>Login</span>
                </a>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninForm
