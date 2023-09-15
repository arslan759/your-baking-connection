import React from 'react'
import NavBar from '../NavBar/NavBar'
import withAuth from 'hocs/withAuth'
import { withApollo } from 'lib/apollo/withApollo'

const PaymentDetails = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        PaymentDetails
      </div>
    </div>
  )
}

export default withApollo()(withAuth(PaymentDetails))
