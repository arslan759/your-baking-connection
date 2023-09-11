import React, { useState } from 'react'
import { BakerTabsPanelProps } from 'types'
import BakerNoAvailableProducts from '../BakerNoAvailableProducts/BakerNoAvailableProducts'
import BakerAvailableProducts from '../BakerAvailableProducts/BakerAvailableProducts'
import ClientReviewSwiper from '../ClientReviewSwiper/ClientReviewSwiper'

const BakerTabsPanel = ({ activeTab, slug }: BakerTabsPanelProps) => {
  const [products, setProducts] = useState(1)

  console.log('active tab is', activeTab)

  return (
    <div>
      {activeTab == 0 &&
        (products === 0 ? <BakerNoAvailableProducts /> : <BakerAvailableProducts slug={slug} />)}
      {activeTab == 1 && <div>Gallery of work</div>}
      {activeTab == 2 && <div>terms and conditions</div>}
      {activeTab == 3 && <div>allergen info</div>}
      {activeTab == 4 && (
        <div className='w-full flex justify-center'>
          <div className='review-swiper w-[90%]'>
            <ClientReviewSwiper />
          </div>
        </div>
      )}
    </div>
  )
}

export default BakerTabsPanel
