import React from 'react'
import { ProductDetailTabsPanelProps } from 'types'
import ProductDetailDescription from '../ProductDetailDescription/ProductDetailDescription'

const ProductDetailTabsPanel = ({ activeTab }: ProductDetailTabsPanelProps) => {
  return (
    <div>
      {activeTab == 0 && <ProductDetailDescription />}
      {activeTab == 1 && <div>Reviews</div>}
      {activeTab == 2 && <div>Faqs</div>}
    </div>
  )
}

export default ProductDetailTabsPanel
