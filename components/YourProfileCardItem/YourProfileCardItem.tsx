import React from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import { YourProfileCardItemProps } from 'types'

const YourProfileCardItem = ({ image, title, description }: YourProfileCardItemProps) => {
  const handleCardItemClick = (text: string) => {
    console.log(text, 'clicked')
  }

  return (
    <div className={`${styles.cardItem}`} onClick={() => handleCardItemClick(title)}>
      <img src={image} alt='card-img' className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
      <div>
        <Typography
          sx={{
            fontSize: '24px !important',
            fontWeight: '600 !important',
            lineHeight: '32px',
            fontFamily: 'Josefin Sans',
            // textTransform: 'capitalize',
            color: '#090909',
            fontFeatureSettings: "'clig' off, 'liga' off",
            '@media (max-width: 767px)': {
              fontSize: '16px !important',
              lineHeight: '24px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '18px !important',
            fontWeight: '500 !important',
            lineHeight: '22px',
            fontFamily: 'Josefin Sans',
            // textTransform: 'capitalize',
            color: '#888',
            fontFeatureSettings: "'clig' off, 'liga' off",
            '@media (max-width: 767px)': {
              fontSize: '12px !important',
              lineHeight: '16px',
            },
          }}
        >
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default YourProfileCardItem
