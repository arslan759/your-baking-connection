import React, { useEffect } from 'react'
import { GalleryProductsData } from 'Constants/constants'
import CustomPagination from '../CustomPagination/CustomPagination'
import ProductCard from '../ProductCard/ProductCard'

import useCatalogItems from 'hooks/Products/useCatalogItems'

import { withApollo } from 'lib/apollo/withApollo'

const BakerAvailableProducts = () => {
  const [catalogItems, loadingItems, refetchItems] = useCatalogItems({
    shopIds: ['cmVhY3Rpb24vc2hvcDpkU3VYTGIzRHg3TXNvV29nSg=='],
  })

  useEffect(() => {
    console.log('catalog items ', catalogItems)
  }, [catalogItems])

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] flex flex-wrap justify-start gap-x-[2%] gap-y-[8px] md:gap-y-[24px]'>
        {catalogItems?.map((item: any) => {
          const { product } = item?.node
          const { pricing } = product.variants[0]

          return (
            <ProductCard
              key={item.id}
              image={product?.media[0]?.URLs?.thumbnail}
              title={product?.title}
              description={product?.description}
              category={item?.category}
              oldPrice={pricing[0].compareAtPrice?.amount}
              newPrice={pricing[0].price}
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

export default withApollo()(BakerAvailableProducts)
