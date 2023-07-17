import Navbar from '../NavBar/NavBar'
import { InputAdornment, TextField, Typography } from '@mui/material'

import { PrimaryBtn } from '../Buttons'
import InputField from '../InputField/InputField'
import MapPinFindBaker from '../../assets/icons/mapPinFindBaker'
import DividerLineFindBaker from '../../assets/icons/DividerLineFindBaker'
import SearchFindBaker from '../../assets/icons/searchFindBaker'
import SelecterFindBaker from '../../assets/icons/selecterFindBaker'

const Search = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center text-center w-[242px] h-[80px] md:w-[525px] md:h-[97px] mt-[48px] mb:mt-[100px]'>
          <Typography variant='h4' sx={{ color: '#7DDEC1' }}>
            Find Your Baker
          </Typography>

          <Typography variant='body2'>
            Discover amazing, talented bakers in your community!
          </Typography>
        </div>
        <div className='flex justify-center items-center w-[242px] h-[250px] md:w-[525px] md:h-[360px] m-1'>
          <img
            src='/Images/cupcake-findBaker.png'
            alt='cupcake'
            className='w-[204.808px] h-[250px] md:w-[295px] md:h-[360px]'
          />
        </div>
        <form>
          <div className='flex flex-col justify-center items-center w-[267px] h-[192px] md:w-[525px] md:h-[261px] mb-[48px] md:mb-[100px]'>
            <TextField
              sx={{
                mb: '24px',
                '& .MuiOutlinedInput-root': {
                  color: '#6C6C6C',
                  width: '267px',
                  height: '35px',
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: '12px',

                  '& fieldset': {
                    borderColor: '#6C6C6C',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6C6C6C',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6C6C6C',
                  },
                },
              }}
              placeholder='Enter your address here'
              name='address'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MapPinFindBaker />
                  </InputAdornment>
                ),
              }}
            />
            <div className='flex justify-center items-center'>
              <div className='w-[97px] h-[0.5px] bg-[#000000]' />
              <Typography variant='body1' className={`text-[12px] z-10 text-[#000000] mx-[10px]`}>
                OR
              </Typography>
              <div className='w-[97px] h-[0.5px] bg-[#000]' />
            </div>
            <TextField
              sx={{
                my: '24px',
                '& .MuiOutlinedInput-root': {
                  color: '#6C6C6C',
                  width: '267px',
                  height: '35px',
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: '12px',

                  '& fieldset': {
                    borderColor: '#6C6C6C',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6C6C6C',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6C6C6C',
                  },
                },
              }}
              placeholder='Search by bakery name'
              name='bakey-name'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchFindBaker />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#6C6C6C',
                  width: '267px',
                  height: '35px',
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: '12px',

                  '& fieldset': {
                    borderColor: '#6C6C6C',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6C6C6C',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6C6C6C',
                  },
                },
              }}
              placeholder='Product Type'
              name='bakey-name'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <SelecterFindBaker />
                  </InputAdornment>
                ),
              }}
            />
            <div className='rounded-[5px] overflow-hidden w-[267px] h-[45px] mt-[24px]'>
              <PrimaryBtn type='submit' text='Search' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Search
