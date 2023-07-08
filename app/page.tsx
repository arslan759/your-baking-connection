'use client'

import { withApollo } from 'lib/apollo/withApollo'

import Link from 'next/link'
import useViewer from 'hooks/viewer/useViewer'
import { useEffect } from 'react'

const Home = () => {
  const [account, loading, refetch] = useViewer()
  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    console.log('account', account)
  }, [account])

  return (
    <>
      <div className='h-screen'>
        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
          <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        </div>
        <div>{/* <Homee /> */}</div>
      </div>
    </>
  )
}

export default withApollo()(Home)
