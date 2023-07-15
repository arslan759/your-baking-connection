import React, { useEffect, useState } from 'react'
import Sectionheading from '../SectionHeading/Sectionheading'
import SectionSubHeading from '../SectionSubHeading/SectionSubHeading'
import { galleryImages } from 'Constants/constants'

const OurGallery = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Call the handleResize function once on page load
    handleResize()

    console.log(windowSize.width)

    // Add the event listener to update window size on resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <Sectionheading title='Our Gallery' />
        <SectionSubHeading subHeading='See our inspiration gallery' />
      </div>
      {windowSize.width < 768 ? (
        <div className='mt-[40px] md:mt-[60px] max-h-[430px] flex flex-col flex-wrap w-[100vw] md:w-full'>
          {galleryImages.slice(0, 3).map((image, index) => {
            return (
              <img
                key={index}
                src={image.url}
                alt='gallery-image'
                className={`w-[50%] md:w-[23%] ${
                  index === 2 ? 'h-[430px]' : 'h-[215px]'
                } object-cover object-center`}
              />
            )
          })}
        </div>
      ) : (
        <div className='mt-[40px] md:mt-[60px] max-h-[638px] flex flex-col flex-wrap items-center gap-[20px] w-[100vw] md:w-[95vw]'>
          {galleryImages.map((image, index) => {
            return (
              <img
                key={index}
                src={image.url}
                alt='gallery-image'
                className={`w-[50%] md:w-[23%] ${
                  index === 2 || index === 5 ? 'h-[633px]' : 'h-[306px]'
                } object-cover object-center rounded-[12px]`}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default OurGallery
