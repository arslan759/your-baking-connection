import React from 'react'
import { useEffect, useRef } from 'react'
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { ClientReviewCardProps } from 'types'
import QuotesReview from '../../assets/icons/quotesReview'

// const ClientReviewCard = () => {
const ClientReviewCard = ({ color, name, review, image }: ClientReviewCardProps) => {
  const quotesDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (quotesDivRef.current) {
      const quotesDivWidth = quotesDivRef.current.offsetWidth
      const profileDiv = document.getElementById('profile-div')
      if (profileDiv) {
        profileDiv.style.setProperty('--padding-right', `${quotesDivWidth}px`)
      }
    }
  }, [])

  const card = (
    <React.Fragment>
      <CardContent>
        {/* <div className='flex'> */}
        <div
          className='flex w-full'
          // style={{
          //   border: '1px solid black',
          // }}
        >
          {/* <div className='relative flex my-14 w-[390px] h-[206px] md:w-[560px] md:h-[300px]'> */}
          {/* <div
            ref={quotesDivRef}
            className='inline-flex items-center'
            style={{
              border: '1px solid yellow',
            }}
          >
            <QuotesReview color={color} />
          </div> */}
          <div
            ref={quotesDivRef}
            // className='inline-flex items-center'
            className='absolute top-[20px] left-[20px]'
            // style={{
            //   border: '1px solid yellow',
            // }}
          >
            <QuotesReview color={color} />
          </div>
          <div
            id='profile-div'
            // className='flex flex-col w-[87%] md:w-[91.5%] items-center justify-center shrink-0 relative'
            className='flex flex-col w-full md:w-full items-center justify-center shrink-0 relative'
            // style={{ border: '1px solid green', paddingRight: 'var(--padding-right)' }}
            // style={{ border: '1px solid green' }}
          >
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color={color}
                // className='mx-auto mt-[38px] mb-[12px] md:mt-[47px] md:mb-[14px]'
                className='mx-auto mt-[42px] mb-[12px] md:mt-[55px] md:mb-[14px]'
              >
                {name}
              </Typography>
            </div>
            <div
              className='flex flex-row items-center justify-center gap-[12px] md:gap-[10px]'
              // style={{ border: '1px solid blue' }}
            >
              <a href='https://www.instagram.com' target='_blank'>
                <img
                  src='/Images/instagramReview.svg'
                  alt='mail-icon'
                  className='w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
                />
              </a>
              <a href='https://www.facebook.com' target='_blank'>
                <img
                  src='/Images/facebookReview.svg'
                  alt='mail-icon'
                  className='w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
                />
              </a>
              <a href='https://www.twitter.com' target='_blank'>
                <img
                  src='/Images/twitterReview.svg'
                  alt='mail-icon'
                  className='w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-[16px] mb-[24px] ml-[43px] mr-[29px] md:mt-[28px] md:mb-[44px] md:mx-[59px]'>
          <Typography variant='body1' component='div' align='center'>
            {review}
          </Typography>
        </div>
      </CardContent>
    </React.Fragment>
  )

  return (
    // <div
    //   className='w-full h-full'
    //   style={{
    //     border: '1px solid red',
    //   }}
    // >
    <div
      className='relative w-[407px] h-[256px] md:w-[585px] md:h-[369px]'
      // style={{
      //   border: '1px solid orange',
      // }}
    >
      <Avatar
        alt={name}
        src={image}
        sx={{
          position: 'absolute',
          // top: '19%',
          // top: '0%',
          //   top: { xs: '19%', md: '19%' },
          //   bottom: { xs: '180px', md: '269px' },
          right: '38%',
          //   right: { xs: '38%', md: '38%' },
          //   left: { xs: '174.5px', md: '255.5px' },
          zIndex: 99,
          width: { xs: '76px', md: '100px' },
          height: { xs: '76px', md: '100px' },
          // translate: { xs: '0 -60%', md: '0 -70%' },
        }}
      />
      {/* position relative on outer and absolute for cupcake */}
      <Card
        variant='outlined'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: { xs: '390px', md: '560px' },
          height: { xs: '206px', md: '300px' },
          background: 'var(--white, #FFF)',
          boxShadow: ' 0px 1px 30px 0px rgba(0, 0, 0, 0.15)',
        }}
      >
        {card}
      </Card>
      {/* <div className='absolute top-1/2 left-0.5'> */}
      {/* <div className='absolute top-1/2 left-[0.20%]'> */}
      <div className='absolute top-1/2 left-0'>
        {color === '#FFD9E4' ? (
          <img
            src='/Images/leftCupcakeReview.svg'
            alt='cake-icon'
            className='w-[33px] md:w-[53.333px] h-[37px] md:h-[60px]'
          />
        ) : (
          <img
            src='/Images/rightCupcakeReview.svg'
            alt='cake-icon'
            className='w-[33px] md:w-[53.333px] h-[37px] md:h-[60px]'
          />
        )}
      </div>
    </div>
    // </div>
  )
}

export default ClientReviewCard
