import { Typography } from '@mui/material'
import FooterLinks from '../FooterLinks/FooterLinks'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <>
      {/* <svg className={styles.svg}>
        <clipPath id='my-clip-path' clipPathUnits='objectBoundingBox'>
          <path d='M0.019,0.084 C0.021,0.045,0.007,0.062,0,0.076 V1 H1 V0.003 H0.34 C0.326,0.003,0.301,-0.012,0.271,0.029 C0.234,0.081,0.251,0.143,0.247,0.202 C0.245,0.25,0.241,0.201,0.239,0.17 C0.239,0.136,0.237,0.077,0.232,0.108 C0.23,0.18,0.228,0.17,0.221,0.099 C0.214,0.027,0.191,0.056,0.198,0.131 C0.205,0.205,0.177,0.265,0.181,0.164 C0.186,0.063,0.172,0.064,0.154,0.056 C0.14,0.029,0.143,0.056,0.143,0.131 C0.12,0.178,0.143,0.052,0.124,0.024 C0.078,0.005,0.124,0.155,0.099,0.239 C0.074,0.322,0.091,0.112,0.078,0.044 C0.065,-0.025,0.07,0.135,0.048,0.092 C0.026,0.049,0.03,0.076,0.033,0.148 C0.02,0.211,0.017,0.133,0.019,0.084'></path>
        </clipPath>
      </svg> */}

      {/* <div class='clipped'></div> */}
      {/* <div className={styles.clipped}> */}
      <div>
        <div className='bg-primary flex flex-col md:flex-row items-center md:items-start'>
          <div className='px-0 mt-[36px] md:px-8 w-[100%] md:w-[30%] flex flex-col items-center md:items-start'>
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
          <div className='mt-[36px] w-[auto] md:w-[100%] flex flex-col md:flex-row gap-[10px] items-center md:items-start flex-nowrap md:flex-wrap'>
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
    </>
  )
}
