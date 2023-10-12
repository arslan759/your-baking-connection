import React from 'react'
import NavBar from '../NavBar/NavBar'
import YourProfileCard from '../YourProfileCard/YourProfileCard'
import { withApollo } from 'lib/apollo/withApollo'

const UserProfile = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <YourProfileCard />
      </div>
    </div>
  )
}

export default withApollo()(UserProfile)
