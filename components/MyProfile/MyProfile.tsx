import { Typography } from '@mui/material'

import React, { useRef, useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import DropdownField from '../DropdownField/DropdownField'
import { cities, states } from 'Constants/constants'

const MyProfile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')
  const [address, setAddress] = useState('')
  const [picture, setPicture] = useState('')

  // Error states
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [addressError, setAddressError] = useState('')
  const [pictureError, setPictureError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'firstname') {
      setFirstName(value)
      // setFirstNameError(value ? '' : 'Firstname is required')
    } else if (name === 'lastname') {
      setLastName(value)
      // setLastNameError(value ? '' : 'Lastname is required')
    } else if (name === 'email') {
      setEmail(value)
      setEmailError('')
    } else if (name === 'phone') {
      setPhone(value)
      // setPhoneError(value ? '' : 'Phone is required')
    } else if (name === 'address') {
      setAddress(value)
      // setAddressError(value ? '' : 'Address is required')
    }
  }

  // handleStateChange function for state dropdown
  const handleStateChange = (state: string) => {
    setState(state)
    // setStateError(state ? '' : 'State is required')
  }

  // handleCityChange function for city dropdown
  const handleCityChange = (state: string) => {
    setCity(state)
    // setCityError(state ? '' : 'City is required')
  }

  // handleClick function for file upload

  const handleClick = () => {
    // Trigger the click event of the file input
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // handlePictureChange function for picture upload
  const handlePictureChange = (e: any) => {
    const file = e.target.files[0]

    console.log('files are ', e.target.files)
    console.log('picture is ', file?.name)

    if (file.size > 1024 * 1024 * 5) {
      setPictureError('Picture size should be less than 5mb')
      return
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      setPictureError('Invalid file type')
      return
    }

    setPictureError('')
    setPicture(file.name)
  }

  // handleSubmit function for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if email is valid
    const isEmailValid = validateEmail(email)

    if (!isEmailValid) {
      setEmailError('Email is not valid')
      return
    }

    // Logs the form data
    console.log('form submitted')
    console.log('firstname is ', firstName)
    console.log('lastname is ', lastName)
    console.log('email is ', email)
    console.log('phone is ', phone)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('address is ', address)

    // Resets the form fields
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setState('')
    setCity('')
    setAddress('')

    // Resets the error states
    setFirstNameError('')
    setLastNameError('')
    setEmailError('')
    setPhoneError('')
    setStateError('')
    setCityError('')
    setAddressError('')
  }

  return (
    <div className='w-full flex flex-col justify-center items-center h-[100%] mt-[100px] md:mt-[62px] pb-[48px] md:pb-[150px]'>
      <div
        className='w-[90vw] md:w-[686px] mt-[24px] md:mt-[42px] bg-[#fff] p-[36px] relative'
        style={{
          boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.15)',
        }}
      >
        <img
          src='/Images/x-circle.svg'
          alt='close-btn'
          className='w-[24px] h-[24px] absolute right-[36px] top-[24px] cursor-pointer'
        />

        <div className='w-full flex justify-center mt-[-100px] rounded-full overflow-hidden relative'>
          <img
            src={picture ? picture : '/Images/avatarReview.png'}
            alt=''
            className='w-[129px] h-[129px]'
          />
        </div>
        <div className='w-full flex gap-[12px] justify-center items-center mt-[8px]'>
          <Typography
            sx={{
              color: '#090909',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: 'normal',
              fontFamily: 'Orbitron',
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            John
          </Typography>
          <img
            onClick={handleClick}
            src='/Images/edit.svg'
            alt='edit-icon'
            className='w-[24px] h-[24px] cursor-pointer'
          />
        </div>
        <form onSubmit={handleSubmit} className='mt-[36px]'>
          <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
            <div className='w-full md:w-[45%]'>
              <InputField
                label='first name'
                type='text'
                inputColor='#090909'
                name='firstname'
                value={firstName}
                errorText={firstNameError}
                required={false}
                onChange={handleChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <InputField
                label='last name'
                type='text'
                inputColor='#090909'
                name='lastname'
                value={lastName}
                errorText={lastNameError}
                required={false}
                onChange={handleChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <InputField
                label='email'
                type='text'
                inputColor='#090909'
                name='email'
                value={email}
                errorText={emailError}
                required={false}
                onChange={handleChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <InputField
                label='phone'
                type='text'
                inputColor='#090909'
                name='phone'
                value={phone}
                errorText={phoneError}
                required={false}
                onChange={handleChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <DropdownField
                label='state'
                required={false}
                name='state'
                errorText={stateError}
                value={state}
                options={states}
                inputColor='#090909'
                onChange={handleStateChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <DropdownField
                label='city'
                required={false}
                name='city'
                errorText={cityError}
                value={city}
                options={cities}
                inputColor='#090909'
                onChange={handleCityChange}
              />
            </div>
            <div className='w-full md:w-[100%]'>
              <InputField
                label='current address'
                type='text'
                inputColor='#090909'
                multiline
                rows={5}
                name='address'
                value={address}
                errorText={addressError}
                required={false}
                onChange={handleChange}
              />
            </div>

            <input
              type='file'
              ref={fileInputRef}
              onChange={handlePictureChange}
              style={{ display: 'none' }} // Hide the file input
            />
          </div>

          <div className='mt-[24px] md:mt-[23px]'>
            <PrimaryBtn text='save' type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default MyProfile
