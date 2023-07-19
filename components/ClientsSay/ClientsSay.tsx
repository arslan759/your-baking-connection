import React from 'react'
import Sectionheading from '../SectionHeading/Sectionheading'
import SectionSubHeading from '../SectionSubHeading/SectionSubHeading'
import ClientReviewCard from '../ClientReviews/ClientReviewCard'
import ReviewsCarousel from '../ReviewsCarousel/ReviewsCarousel'

const ClientsSay = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <Sectionheading title={'Clients say'} />

        <SectionSubHeading
          subHeading={`"Discover what our valued customers have to say about their delightful experiences “with your baking connection”. Read their heartfelt testimonials and let their words of satisfaction and joy inspire your own indulgence in our heavenly baked treats. Join the chorus of happy customers and experience the magic of our bakery today!"`}
        />
      </div>

      <div
        className='w-[90vw] flex justify-center mt-[129px]'
        // style={{
        //   border: '1px solid red',
        // }}
      >
        <ReviewsCarousel />
      </div>
    </section>
  )
}

export default ClientsSay
