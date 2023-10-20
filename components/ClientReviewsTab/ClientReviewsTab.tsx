// @ts-ignore
import { ReviewCardsData } from 'Constants/constants'
import Review from '../Review'
import useReviews from 'hooks/Reviews/useReviews'
import Statistics from '../Statistics'
import { useEffect, useState } from 'react'

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

  const [reviews, loadingItems, refetchItems, totalCount] = useReviews({
    first: itemsPerPage,
    offset,
    sortBy: 'updatedAt',
    sortOrder: 'desc',
  })

  useEffect(() => {
    let page = Math.ceil(totalCount / itemsPerPage)
    console.log('reviews', reviews)
    setPageCount(page)
  }, [totalCount])
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
