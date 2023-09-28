// @ts-ignore
import { ReviewCardsData } from 'Constants/constants'
import Review from '../Review'

const ClientReviewsTab = () => {
  return (
    <div className='flex flex-col lg:flex-col items-center'>
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
