// @ts-ignore
import { ReviewCardsData } from 'Constants/constants'
import Review from '../Review'
import useReviews from 'hooks/Reviews/useReviews'
import Statistics from '../Statistics'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner'

const ClientReviewsTab = () => {
  //items per page to display
  const [itemsPerPage, setItemsPerPage] = useState<number>(6)

  //total number of pages for the paginator
  const [pageCount, setPageCount] = useState<number>(0)

  //we are using this state to display the current page, which differs from the offset value
  const [page, setCurrentPage] = useState(1)

  //for the offset filter
  const [offset, setOffset] = useState(0)

  const handlePageClick = (pageNum: number) => {
    setOffset((pageNum - 1) * itemsPerPage)
    setCurrentPage(pageNum)
  }

  const [reviews, loadingReviews, refetchReviews, totalCount] = useReviews({
    shopId: 'dSuXLb3Dx7MsoWogJ',
    productId: 'GSQxCyYp6Y8Guupzg',
    first: itemsPerPage,
    offset,
    sortBy: 'updatedAt',
    sortOrder: 'desc',
  })

  useEffect(() => {
    console.log('reviews are ', reviews)
  }, [reviews])

  useEffect(() => {
    let page = Math.ceil(totalCount / itemsPerPage)
    console.log('reviews', reviews)
    setPageCount(page)
  }, [totalCount])

  return (
    <>
      {loadingReviews ? (
        <Spinner />
      ) : (
        <div className='w-full flex flex-col lg:flex-col items-center'>
          <Statistics refetchReviews={refetchReviews} />
          {reviews?.map((review: any, index: any) => {
            const { name, content, image } = review
            return (
              <div className='w-full' key={index}>
                <Review reviewData={review} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default ClientReviewsTab
