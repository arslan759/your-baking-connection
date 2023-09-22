import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface CartTableProps {
  items: any[]
}

const CartTable = ({ items }: CartTableProps) => {
  // function createData(img: string, name: string, price: number, quantity: number) {
  //   return { img, name, price, quantity }
  // }

  const handleAddQuantity = (name: string, quantity: number) => {
    console.log('add clicked for', name)

    quantity = quantity + 1

    console.log('quantity is now', quantity)
  }

  const handleSubtractQuantity = (name: string, quantity: number) => {
    console.log('subtract clicked for', name)

    quantity = quantity - 1

    console.log('quantity is now', quantity)
  }

  // const rows = [
  //   createData('/Images/cart-dummy-img.png', 'Chocolate Cupcake', 2.99, 1),
  //   createData('/Images/cart-dummy-img.png', 'Rose Royale', 2.99, 1),
  //   createData('/Images/cart-dummy-img.png', 'Chocolate Cupcake', 2.99, 1),
  //   createData('/Images/cart-dummy-img.png', 'Rose Royale', 2.99, 1),
  //   createData('/Images/cart-dummy-img.png', 'Chocolate Cupcake', 2.99, 1),
  // ]

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead
          sx={{
            '& .MuiTableCell-root': {
              fontFamily: 'Open Sans',
              color: '#090909',
              fontSize: '16px !important',
              fontWeight: '600 !important',
              '@media (max-width: 767px)': {
                fontSize: '14px !important',
              },
            },
          }}
        >
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>

        <TableBody
          sx={{
            '& .MuiTableCell-root': {
              fontFamily: 'Open Sans',
              color: '#000',
              fontSize: '16px !important',
              fontWeight: '600 !important',
              borderBottom: 'none',
              '@media (max-width: 767px)': {
                fontSize: '14px !important',
              },
            },
          }}
        >
          {items?.map((item, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                  '@media (max-width: 767px)': {
                    flexDirection: 'column',
                  },
                }}
                component='th'
                scope='row'
              >
                <img
                  src={
                    item?.imageURLs?.thumbnail
                      ? item.imageURLs.thumbnail
                      : '/Images/cart-dummy-img.png'
                  }
                  alt={item.title}
                  className='w-[56px] md:w-[72px] h-[56px] md:h-[72px] rounded-[4px]'
                />{' '}
                {item.title}
              </TableCell>
              <TableCell
                sx={{
                  color: '#888 !important',
                  fontWeight: '500 !important',
                }}
              >
                {item?.price?.amount}$
              </TableCell>
              <TableCell>
                <div className='flex'>
                  <div
                    className='bg-[#F3F3F3] px-[12px] md:px-[16px] py-[5px] md:py-[6px] cursor-pointer'
                    onClick={() => handleSubtractQuantity(item?.title, item?.quantity)}
                  >
                    -
                  </div>
                  <div
                    className='px-[11px] md:px-[15px] py-[5px] md:py-[6px]'
                    style={{
                      border: '0.758px solid #CBCBCB',
                    }}
                  >
                    {item?.quantity}
                  </div>
                  <div
                    className='bg-[#F3F3F3] px-[12px] md:px-[16px] py-[5px] md:py-[6px] cursor-pointer'
                    onClick={() => handleAddQuantity(item?.title, item?.quantity)}
                  >
                    +
                  </div>
                </div>
              </TableCell>
              <TableCell>{item?.subtotal?.amount}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartTable
