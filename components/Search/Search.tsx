import Navbar from '../NavBar/NavBar'
import { Typography } from '@mui/material'
import { PrimaryBtn } from '../Buttons'
import DropdownField from '../DropdownField/DropdownField'
import { useState } from 'react'
import { ProductTypes, SearchBakerData, cities, states } from 'Constants/constants'
import InputField from '../InputField/InputField'
import SearchBakerItem from '../SearchBakerItem/SearchBakerItem'
import styles from './styles.module.css'

const Search = () => {
  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')
  const [search, setSearch] = useState('')
  const [productType, setProductType] = useState('')

  // Error states
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [searchErr, setSearchErr] = useState('')
  const [productTypeErr, setProductTypeErr] = useState('')

  // onChange handler
  const handleChange = (name: string, value: string) => {
    if (name === 'search') {
      setSearch(value)
      // setSearchErr(value ? '' : 'Search is required')
    }
  }

  // dropdown handlers
  const handleStateChange = (state: string) => {
    setState(state)
    setStateError(state ? '' : 'State is required')
  }

  const handleCityChange = (state: string) => {
    setCity(state)
    setCityError(state ? '' : 'City is required')
  }

  const handleProductTypeChange = (type: string) => {
    setProductType(type)
    // setProductTypeErr(type ? '' : 'State is required')
  }

  // seeMore handler
  const handleSeeMore = () => {
    console.log('see more clicked')
  }

  // handleSubmit function for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Logs the form data
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('search is ', search)
    console.log('product type is ', productType)

    console.log('form submitted')
  }

  return (
    <>
      <Navbar />
      <div
        className={`${styles.background} w-full flex flex-col items-center mt-[48px] md:mt-[100px]`}
      >
        <div className='w-[90vw] md:w-[70vw] flex flex-col items-center'>
          <div className='w-full'>
            <Typography
              sx={{
                fontSize: '48px !important',
                fontWeight: '700 !important',
                fontFamily: 'Josefin Sans',
                lineHeight: 'normal',
                textAlign: 'center',
                color: '#7DDEC1',
                textTransform: 'capitalize',
                fontFeatureSettings: "'clig' off, 'liga' off",
                '@media (max-width: 767px)': {
                  fontSize: '24px !important',
                },
              }}
            >
              Find your Baker
            </Typography>
          </div>
          <div className='w-[70%]'>
            <Typography
              sx={{
                marginTop: '24px',
                fontSize: '18px !important',
                fontFamily: 'Open Sans',
                fontWeight: '500 !important',
                lineHeight: 'normal',
                letterSpacing: '1px',
                textAlign: 'center',
                alignSelf: 'stretch',
                color: '#090909',
                textTransform: 'capitalize',
                fontFeatureSettings: `'clig' off, 'liga' off`,
                '@media (max-width: 767px)': {
                  fontSize: '12px !important',
                },
              }}
            >
              {`Discover amazing,   bakers in your community!`}
            </Typography>
          </div>
        </div>

        <div className='mt-[30px] md:mt-[50px]'>
          <form onSubmit={handleSubmit} className='w-[90vw] md:w-[90vw] flex flex-col items-center'>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-[16px]'>
              <div className='w-full md:w-[25%]'>
                <DropdownField
                  // label='state'
                  required={false}
                  placeholder='state'
                  name='state'
                  errorText={stateError}
                  value={state}
                  options={states}
                  inputColor='#6C6C6C'
                  onChange={handleStateChange}
                />
              </div>

              <div className='w-full md:w-[25%]'>
                <DropdownField
                  // label='city'
                  placeholder='city'
                  required={false}
                  name='city'
                  errorText={cityError}
                  value={city}
                  options={cities}
                  inputColor='#6C6C6C'
                  onChange={handleCityChange}
                />
              </div>

              <div className='w-full md:w-[25%]'>
                <InputField
                  // label='city'
                  placeholder='search'
                  type='text'
                  required={false}
                  startIcon={<img src='/Images/search-input-icon.svg' alt='search' />}
                  name='search'
                  errorText={cityError}
                  value={search}
                  inputColor='#6C6C6C'
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[25%]'>
                <DropdownField
                  // label='city'
                  placeholder='product type'
                  required={false}
                  name='productType'
                  errorText={productTypeErr}
                  value={productType}
                  options={ProductTypes}
                  inputColor='#6C6C6C'
                  onChange={handleProductTypeChange}
                />
              </div>

              <div className='w-full h-[35px] md:w-[25%]'>
                <PrimaryBtn type='submit' text='Search' />
              </div>
            </div>
          </form>
        </div>

        <div className='w-[90vw] flex mt-[30px] md:mt-[50px]'>
          <div className='w-full flex flex-col items-center  mt-[24px] md:mt-[50px]'>
            <div className='w-full flex flex-col items-center gap-x-[4%] gap-y-[48px]'>
              {SearchBakerData.slice(0, 6).map((item, index) => {
                const { title, description, image, rating, city, state } = item
                return (
                  <div key={index} className='w-full md:w-[70%] flex flex-col items-center'>
                    <SearchBakerItem
                      image={image}
                      title={title}
                      description={description}
                      rating={rating.toString()}
                      city={city}
                      state={state}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='w-[100px] md:w-[160px] h-[45px] flex justify-center mt-[50px]'>
          <PrimaryBtn type='button' text='see more' handleClick={handleSeeMore} />
        </div>
      </div>
    </>
  )
}

export default Search
