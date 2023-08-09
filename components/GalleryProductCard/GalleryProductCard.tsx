import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { GalleryProductCardProps } from 'types'
import GalleryProductCardMenu from '../GalleryProductCardMenu/GalleryProductCardMenu'

const GalleryProductCard = ({
  image,
  title,
  description,
  category,
  oldPrice,
  newPrice,
}: GalleryProductCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: '32%',
        border: '0.5px solid #888',
        borderRadius: '5px',

        '@media (max-width:767px)': {
          width: '49%',
        },
        height: 'auto',
      }}
    >
      <div className='relative'>
        <CardMedia
          sx={{
            bordeRadius: '5px 5px 0px 0px',
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50% / cover no-repeat`,
            height: '365px',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            '@media (max-width:767px)': {
              height: '195px',
            },
          }}
          component='img'
          image={image}
          alt={title}
        />
        <img src='/Images/favourite.svg' alt='heart' className='absolute top-4 right-4' />
        <GalleryProductCardMenu />
      </div>
      <CardContent
        sx={{
          '&.MuiCardContent-root': {
            paddingTop: '12px',
            paddingBottom: '0px',
            paddingLeft: '18px',
            paddingRight: '10px',
            '@media (max-width:767px)': {
              paddingTop: '8px',
              paddingLeft: '12px',
              paddingRight: '8px',
            },
          },
        }}
      >
        <Typography
          sx={{
            color: '#888',
            fontSize: '12px !important',
            fontWeight: '400',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            textTransform: 'capitalize',
          }}
        >
          {category}
        </Typography>
        <Typography
          sx={{
            color: '#090909',
            marginTop: '12px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            textTransform: 'uppercase',
            '@media (max-width:767px)': {
              marginTop: '8px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: '#090909',
            marginTop: '12px',
            fontSize: '12px !important',
            fontWeight: '400',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            '@media (max-width:767px)': {
              marginTop: '8px',
            },
          }}
        >
          {description}
        </Typography>
        <div className='flex gap-x-[14px] items-center'>
          <Typography
            sx={{
              color: '#888',
              fontSize: '12px !important',
              fontWeight: '400',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
              textDecoration: 'line-through',
            }}
          >
            {parseInt(oldPrice)}$
          </Typography>
          <Typography
            sx={{
              color: '#090909',
              fontSize: '18px !important',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
            }}
          >
            {parseInt(newPrice)}$
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default GalleryProductCard
