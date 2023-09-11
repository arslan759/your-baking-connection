import React, { useState } from 'react'
import { Badge, Modal, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AddToCartModalProps } from 'types'
import { orderItemsData } from 'Constants/constants'
import CartCard from '../CartCard'

const AddToCartModal = ({ color }: AddToCartModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Badge badgeContent={0} color='secondary' onClick={handleModal}>
        <ShoppingCartIcon
          sx={{
            color: color,
            cursor: 'pointer',
          }}
        />
      </Badge>

      <Modal open={isModalOpen} onClose={handleModal}>
        <div className='bg-white outline-none absolute right-0 h-[100vh] overflow-y-scroll w-[90vw] md:w-[600px] p-[16px] md:p-[32px] flex flex-col gap-y-[24px]'>
          <div className='relative'>
            <img
              src='/Images/x.svg'
              alt='close'
              className='absolute right-0 top-0 cursor-pointer h-[24px] w-[24px]'
              onClick={handleModal}
            />
          </div>
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
              Total ({orderItemsData.length} item){' '}
              {orderItemsData.reduce(
                (acc, item) => acc + parseInt(item.price) * parseInt(item.quantity),
                0,
              )}
              $
            </Typography>
          </div>

          <div className='w-full'>
            <CartCard />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddToCartModal
