// @ts-ignore

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { HomePageBackgrounds } from 'Constants/constants'
import { Typography } from '@mui/material'
import { PrimaryBtn } from '../Buttons'

const GallerySwiper = () => {
  return (
    <div>
      <Swiper
        // @ts-ignore
        modules={[Pagination]}
        rewind={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='gallery-swiper'
      >
        {HomePageBackgrounds.map((background, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={background?.url}
                  alt={background?.title}
                  className='w-full h-[375px] md:h-[471px] object-cover'
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default GallerySwiper
