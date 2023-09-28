import React from 'react'
import { ProductDetailTabsPanelProps } from 'types'
import ProductDetailDescription from '../ProductDetailDescription/ProductDetailDescription'
import ClientReviewsTab from '../ClientReviewsTab'

const ProductDetailTabsPanel = ({ activeTab }: ProductDetailTabsPanelProps) => {
  return (
    <div>
      {activeTab == 0 && <ProductDetailDescription />}
      {activeTab == 1 && (
        <div className='w-full'>
          <ClientReviewsTab />
        </div>
      )}
      {activeTab == 2 && <div>Faqs</div>}
    </div>
  )
}

export default ProductDetailTabsPanel
