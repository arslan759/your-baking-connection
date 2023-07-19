// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { ReviewCardsData } from 'Constants/constants'
import ClientReviewCard from '../ClientReviews/ClientReviewCard'

const ReviewsCarousel = () => {
  return (
    <Swiper
      slidesPerView={2}
      rewind={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='flex justify-center w-[100%]'
    >
      {ReviewCardsData.map((review, index) => {
        const { name, image, content } = review
        return (
          <SwiperSlide key={index} className='w-[45%]'>
            <ClientReviewCard
              color={index % 2 === 0 ? '#FFD9E4' : '#7DDEC1'}
              name={name}
              review={content}
              image={image}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ReviewsCarousel
