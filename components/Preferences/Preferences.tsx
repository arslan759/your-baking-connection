import React from 'react'
import NavBar from '../NavBar/NavBar'
import PreferencesCard from '../PreferencesCard/PreferencesCard'
import withAuth from 'hocs/withAuth'
import { withApollo } from 'lib/apollo/withApollo'

const Preferences = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <PreferencesCard />
      </div>
    </div>
  )
}

export default withApollo()(withAuth(Preferences))
