import React from 'react'
import Sectionheading from '../SectionHeading/Sectionheading'
import SectionSubHeading from '../SectionSubHeading/SectionSubHeading'

const OurGallery = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <Sectionheading title='Our Gallery' />

        <SectionSubHeading subHeading='See our inspiration gallery' />
      </div>
    </section>
  )
}

export default OurGallery
