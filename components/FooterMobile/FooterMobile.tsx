import React from 'react'
import FooterLinks from '../FooterLinks/FooterLinks'
import { Typography } from '@mui/material'
import Image from 'next/image'
import styles from './styles.module.css'

const FooterMobile = () => {
  return (
    <div className={` flex flex-col md:flex-row items-center md:items-start`}>
      <div className='px-0 mt-[36px] md:px-8 w-[100%] md:w-[30%] flex flex-col items-center md:items-start'>
        <div className={`${styles.background} flex justify-center`}>
          <div className='relative w-[117px] mt-[36px] mb-[9px] md:w-[165px] h-[108px] md:h-[152px]'>
            <Image
              // layout='fill'
              fill={true}
              style={{ objectFit: 'contain' }}
              src='/Images/footerLogo.svg'
              alt='footer-logo'
            />
          </div>
        </div>
        <div className='bg-primary -mt-[2px] flex flex-col items-center'>
          <Typography
            variant='body1'
            className='w-[80%] md:w-full mt-[14px] text-center md:text-start'
          >
            The bakers of Your Baking Connection are passionate business owners who operate
            home-based bakeries in compliance with their individual state laws. All{' '}
          </Typography>
          <div className='mt-[36px] w-[auto] md:w-[100%] flex flex-col md:flex-row gap-[10px] items-center md:items-start flex-nowrap md:flex-wrap'>
            <FooterLinks
              header='Quick Links'
              title1='About Your Baking Connection'
              link1='/about-your-baking-connection/'
              title2='About Your Baking Connection'
              link2='/about-the-bakers/'
              title3='FAQs'
              link3='/faqs/'
            />
            <FooterLinks
              header='Resources'
              title1='Are You a Baker?'
              link1='/are-you-a-baker/'
              title2='Baker Resources'
              link2='/baker-resources/'
              title3='Baker Terms & Conditions'
              link3='/baker-terms-and-conditions/'
            />
            <FooterLinks
              header='Useful Information'
              link1='/privacy-policy/'
              link2='/baker-resources/'
              link3='/search/'
              title3='Terms & Conditions'
              title2='Privacy Policy'
              title1='Search'
            />
            <FooterLinks
              header='Contact Us'
              title1='support@yourbakingconnection.com'
              title2='172 S Broadway, Denver, Colorado '
              title3='+1-234-567-89'
            />
            <FooterLinks
              header='Follow Us'
              // link1='support@yourbakingconnection.com'
              // link2='172 S Broadway,Denver, Colorado '
              // link3='+1-234-567-89'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMobile
