import { Typography } from '@mui/material'
import React, { useState } from 'react'
import InspirationGalleryForm from '../InspirationGalleryForm/InspirationGalleryForm'
import InspirationGalleryNavigation from '../InspirationGalleryNavigation/InspirationGalleryNavigation'
import InspirationGalleryTabsPanel from '../InspirationGalleryTabsPanel/InspirationGalleryTabsPanel'

const InspirationGallery = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue)
    setActiveTab(newValue)
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] md:w-[70vw] flex flex-col items-center'>
        <div className='w-[75%]'>
          <Typography
            variant='h1'
            sx={{
              textAlign: 'center',
              color: '#7DDEC1',
              fontSize: '48px',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              '@media (max-width:767px)': {
                fontSize: '24px',
              },
            }}
          >{`Inspiration Gallery`}</Typography>
          <Typography
            variant='h1'
            sx={{
              textAlign: 'center',
              marginTop: '24px',
              color: '#090909',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
              textTransform: 'capitalize',
              '@media (max-width:767px)': {
                fontSize: '12px',
              },
            }}
          >{`browse our gallery for inspiration and ideas! save your favorite ideas to your profile!`}</Typography>
        </div>

        <div className='w-[60%] md:w-full mt-[42px]'>
          <InspirationGalleryForm />
        </div>
      </div>

      <div className='w-[90vw] mt-[48px] flex justify-center'>
        <InspirationGalleryNavigation activeTab={activeTab} handleChange={handleChange} />
      </div>

      <div className='w-full mt-[24px] md:mt-[50px]'>
        <InspirationGalleryTabsPanel activeTab={activeTab} />
      </div>
    </div>
  )
}

export default InspirationGallery
