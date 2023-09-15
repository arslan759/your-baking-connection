import React from 'react'
import NavBar from '../NavBar/NavBar'
import withAuth from 'hocs/withAuth'
import { withApollo } from 'lib/apollo/withApollo'

const Help = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        Help
      </div>
    </div>
  )
}

export default withApollo()(withAuth(Help))
