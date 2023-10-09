// @ts-ignore
import { ReviewCardsData } from 'Constants/constants'
import Review from '../Review'
import Statistics from '../Statistics'

const ClientReviewsTab = () => {
  return (
    <div className='flex flex-col lg:flex-col items-center'>
      <Statistics />
      {ReviewCardsData.map((review, index) => {
        const { name, content, image } = review
        return (
          <div key={index}>
            <Review />
          </div>
        )
      })}
    </div>
  )
}

export default ClientReviewsTab
