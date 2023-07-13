import { Typography } from '@mui/material'
import FooterLinks from '../FooterLinks/FooterLinks'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <div
      className='relative mt-[30px]'
      style={{
        border: '2px solid red',
      }}
    >
      <img
        src='/Images/footer-background.svg'
        alt='footer-bg'
        // fill
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          // position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <div className={` flex flex-col md:flex-row items-center md:items-start`}>
        <div className='px-0 h-[80%] mt-[36px] md:px-8 w-[100%] md:w-[45%] flex flex-col justify-end items-center md:items-start'>
          <div className='relative w-[117px] md:w-[165px] h-[108px] md:h-[152px]'>
            <Image
              // layout='fill'
              fill={true}
              style={{ objectFit: 'contain' }}
              src='/Images/footerLogo.svg'
              alt='footer-logo'
            />
          </div>
          <Typography
            variant='body1'
            className='w-[80%] md:w-full mt-[14px] text-center md:text-start'
          >
            The bakers of Your Baking Connection are passionate business owners who operate
            home-based bakeries in compliance with their individual state laws. All{' '}
          </Typography>
        </div>
        <div className='mt-[36px] md:mt-[72px] w-[auto] md:w-[100%] flex flex-col md:flex-row gap-[10px] items-center md:items-start flex-nowrap md:flex-wrap'>
          <FooterLinks
            header='Quick Links'
            link1='About Your Baking Connection'
            link2='About The Bakers'
            link3='FAQs'
          />
          <FooterLinks
            header='Resources'
            link3='Baker Terms & Conditions'
            link1='Are You a Baker?'
            link2='Baker Resources'
          />
          <FooterLinks
            header='Useful Information'
            link3='Terms & Conditions'
            link2='Privacy Policy'
            link1='Search'
          />
          <FooterLinks
            header='Contact Us'
            link1='support@yourbakingconnection.com'
            link2='172 S Broadway, Denver, Colorado '
            link3='+1-234-567-89'
          />
          <FooterLinks
            header='Follow Us'
            // link1='support@yourbakingconnection.com'
            // link2='172 S Broadway,Denver, Colorado '
            // link3='+1-234-567-89'
          />
        </div>
      </div>
      <div></div>
      <Typography variant='body1' className='text-center py-[16px] w-full bg-[#FFD9E4]'>
        Copyright © 2023 Your Baking Connection. All Rights Reserved
      </Typography>
    </div>
  )
}
