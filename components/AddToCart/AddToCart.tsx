import React, { use, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { Typography } from '@mui/material'
import CartCard from '../CartCard/CartCard'
import OrderCard from '../OrderCard/OrderCard'
import { orderItemsData } from 'Constants/constants'
import withInjectedStores from 'hocs/inject'
import withCart from 'containers/cart/withCart'
import { withApollo } from 'lib/apollo/withApollo'

interface AddToCartProps {
  [key: string]: any
}

const AddToCart = ({ ...restProps }: AddToCartProps) => {
  useEffect(() => {
    console.log('restProps in navbar is', restProps)
  }, [restProps?.cart, restProps?.uiStore?.isCartOpen])

  return (
    <div>
      <NavBar />

      <div className='w-full mt-[24px] md:mt-[100px] flex justify-center'>
        <div className='w-[90vw] md:[95vw] flex flex-col gap-y-[24px]'>
          <div className='flex flex-col gap-y-[8px] md:gap-y-[20px]'>
            <Typography
              sx={{
                fontSize: '36px !important',
                fontFamily: 'Open Sans',
                fontWeight: '700 !important',
                lineHeight: '24px',
                textTransform: 'capitalize',
                color: '#7DDEC1',
                '@media (max-width: 767px)': {
                  fontSize: '24px !important',
                  lineHeight: '40px',
                },
              }}
            >
              Your Bag
            </Typography>

            <Typography
              sx={{
                fontSize: '16px !important',
                fontFamily: 'Open Sans',
                fontWeight: 'bold !important',
                lineHeight: '24px',
                color: '#000',
              }}
            >
              Total ({restProps?.cart?.items?.length} item){' '}
              {restProps?.cart?.items.reduce(
                (total: number, item: any) => total + item?.subtotal?.amount,
                0,
              )}
              $
            </Typography>
          </div>

          <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between gap-y-[24px]'>
            <div className='w-full lg:w-[48%]'>
              <CartCard cartFunctions={restProps} />
            </div>

            <div className='w-full lg:w-[48%]'>
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default AddToCart
export default withApollo()(withCart(withInjectedStores('uiStore')(AddToCart)))
