import React from 'react'
import { GalleryProductsData } from 'Constants/constants'
import CustomPagination from '../CustomPagination/CustomPagination'
import ProductCard from '../ProductCard/ProductCard'

const BakerAvailableProducts = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] flex flex-wrap justify-start gap-x-[2%] gap-y-[8px] md:gap-y-[24px]'>
        {GalleryProductsData.slice(0, 6).map((item) => {
          return (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            />
          )
        })}
      </div>

      <div className='w-[90vw] flex justify-center mt-[24px] md:mt-[48px]'>
        <CustomPagination />
      </div>
    </div>
  )
}

export default BakerAvailableProducts
