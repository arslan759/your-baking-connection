import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import DropdownField from '../DropdownField/DropdownField'

const SignupForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checked, setChecked] = useState(false)

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    console.log('name is ', name)
    console.log('value is ', value)

    if (name === 'firstname') {
      setFirstName(value)
      console.log('firstname is ', value)
    } else if (name === 'lastname') {
      setLastName(value)
      console.log('lastname is ', value)
    } else if (name === 'email') {
      setEmail(value)
      console.log('email is ', value)
    } else if (name === 'phone') {
      setPhone(value)
      console.log('phone is ', value)
    } else if (name === 'password') {
      setPassword(value)
      console.log('password is ', value)
    } else {
      setConfirmPassword(value)
      console.log('confirm password is ', value)
    }
  }

  const handleStateChange = (argument: any) => {
    console.log('argument is ', argument)
    setState(argument)
  }

  const handleCityChange = (argument: any) => {
    console.log('argument is ', argument)
    setCity(argument)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email)

    console.log('firstname is ', firstName)
    console.log('lastname is ', lastName)
    console.log('email is ', email)
    console.log('phone is ', phone)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('password is ', password)
    console.log('confirm password is ', confirmPassword)
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] mt-[-10px] md:mt-[30px] pb-[10px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[auto] md:w-[50vw] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography
              variant='body2'
              className='text-white text-[12px] md:text-[14px] uppercase tracking-[1px] p-0'
            >
              {' '}
              joining is quick and easy
            </Typography>

            <Typography variant='h5' className='text-green capitalise mt-[10px] p-0'>
              {' '}
              Sign up
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
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
              <div className='w-full md:w-[45%]'>
                <InputField
                  label='first name'
                  type='text'
                  inputColor='white'
                  name='firstname'
                  value={firstName}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='last name'
                  type='text'
                  inputColor='white'
                  name='lastname'
                  value={lastName}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='email'
                  type='text'
                  inputColor='white'
                  name='lastname'
                  value={lastName}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='phone'
                  type='text'
                  inputColor='white'
                  name='phone'
                  value={phone}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                {/* <InputField
                  label='state'
                  type='text'
                  inputColor='white'
                  name='state'
                  value={state}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                /> */}
                <DropdownField
                  label='state'
                  required
                  value={state}
                  handleChange={handleStateChange}
                  name='state'
                  inputColor='white'
                />
              </div>

              <div className='w-full md:w-[45%]'>
                {/* <InputField
                  label='city'
                  type='text'
                  inputColor='white'
                  name='city'
                  value={city}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                /> */}
                <DropdownField
                  label='city'
                  value={city}
                  handleChange={handleCityChange}
                  required
                  name='city'
                  inputColor='white'
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='password'
                  type='password'
                  inputColor='white'
                  name='password'
                  value={password}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='confirm password'
                  type='password'
                  inputColor='white'
                  name='confirmpassword'
                  value={confirmPassword}
                  // error={true}
                  // errorText='Email is required'
                  required
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div className='mt-[20px]'>
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
                  I agree to all the Term of conditions & Privacy Policy
                </Typography>
              </div>
            </div>

            <div className='mt-[24px] md:mt-[23px]'>
              <PrimaryBtn text='Register' type='submit' />
            </div>

            <div className='w-full flex justify-center mt-[8px] md:mt-[12px]'>
              <Typography variant='body1' className='text-[12px] text-[white]'>
                Already have an account? &nbsp;
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

            <div className='flex justify-center items-center  mt-[8px] md:mt-[20px]'>
              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
              <Typography variant='body1' className={`text-[12px] z-10 text-[white] mx-[10px]`}>
                OR
              </Typography>

              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
            </div>

            <div className='w-full flex justify-center mt-[8px] md:mt-[20px]'>
              <button
                style={{
                  width: '100%',
                  height: '45px',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                  color: '#fff',
                  border: '0.5px solid #7DDEC1',
                }}
              >
                Sign up with <img src='/Images/google.svg' alt='google-icon' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
