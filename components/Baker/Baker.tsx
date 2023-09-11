import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar'
import BakerSwiper from '../BakerSwiper/BakerSwiper'
import BakerLocation from '../BakerLocation/BakerLocation'
import BakerMainContent from '../BakerMainContent/BakerMainContent'
import BakerWeOffer from '../BakerWeOffer/BakerWeOffer'
import BakerProducts from '../BakerProducts/BakerProducts'
import useCatalogItems from 'hooks/Products/useCatalogItems'
import { withApollo } from 'lib/apollo/withApollo'
import useBaker from 'hooks/baker/useBaker'

interface BakerProps {
  slug: string
}

const Baker = ({ slug }: BakerProps) => {
  const [baker, loading, refetch] = useBaker(slug)

  const [bakerName, setBakerName] = useState<string>()
  const [featuredImage, setFeaturedImage] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [categories, setCategories] = useState<string[] | null | undefined>([])

  useEffect(() => {
    if (loading) return

    console.log('loading value is now false', baker)
    setBakerName(baker?.name)
    setFeaturedImage(baker?.featuredShopImages)
    setDescription(baker?.description)
    setCategories(baker?.categories)
  }, [loading])

  useEffect(() => {
    console.log('feature image is ', bakerName, featuredImage)
  }, [bakerName, featuredImage])

  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:flex-row'>
        <div>
          <div className='mt-[48px] lg:mt-[100px] w-[100vw] lg:w-[50vw]'>
            <BakerSwiper featuredImages={featuredImage} />
          </div>

          {/* Gallery Location Info for Desktop View */}
          <div className='hidden lg:block mt-[-30px]'>
            <BakerLocation />
          </div>
        </div>
        <div className='relative w-[100%] lg:w-[50%] px-[20px] lg:px-[40px]'>
          <BakerMainContent bakerName={bakerName} description={description} />

          {/* We Offer section for Desktop View */}
          <div className='mt-[60px] hidden lg:block'>
            <BakerWeOffer categories={categories} />
          </div>
        </div>
        {/* Gallery Location Info for Mobile View */}
        <div className='block lg:hidden overflow-hidden'>
          <BakerLocation />

          {/* We Offer Section for Mobile View */}
          <div className='-mt-[80px]'>
            <BakerWeOffer categories={categories} />
          </div>
        </div>
      </div>

      <div className='mt-[48px]'>
        <BakerProducts slug={slug} />
      </div>
    </div>
  )
}

export default withApollo()(Baker)
