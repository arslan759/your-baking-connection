import { Rating, LinearProgress, Typography, Button, Modal } from '@mui/material'
import Image from 'next/image'
import { PrimaryBtn } from '../Buttons'
import { useState } from 'react'
import styles from './styles.module.css'
import InputField from '../InputField'
import useCreateReview from '../../hooks/Reviews/useCreateReview'
import { usePathname, useRouter } from 'next/navigation'

const AddReviewCard = ({ open, onClose }: any) => {
  const [rating, setRating] = useState(0)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [addReview]: any = useCreateReview()
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)
  if (!pathname) {
    return <div>Loading...</div> // or handle the null case in an appropriate way
  }
  const path = pathname.split(`/`)
  const slug = path[2]
  const urlParams = path[4]

  const handleCreateReview = async (e: any) => {
    e.stopPropagation()
    // console.log('clicked')
    try {
      const input = {
        productId: urlParams,
        shopId: slug,
        rating: parseInt(rating.toString()),
        title: title,
        description: description,
        reviewType: 'product',
      }
      // console.log('productId', productId)
      const id = await addReview({
        variables: {
          input,
        },
      })
      console.log('Success')
      //   handleSuccessOpen();
    } catch (err) {
      console.log(err)
      //   handleErrorOpen();
    }
    // setIsFavorite(!isFavorite)
    console.log('favourite clicked')
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div className={styles.paper}>
        <div className={styles.root}>
          <div>
            <Image
              width={30}
              height={30}
              alt='close icon'
              className='cursor-pointer float-right'
              onClick={onClose}
              src='/Images/x.svg'
            />
          </div>
          <h1
            style={{
              margin: '5%',
              // marginTop: '16px',
              marginBottom: '16px',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: '600',
              height: '33px',
              // marginBottom: '4px',
            }}
          >
            Add Review
          </h1>
          <div>
            <Rating
              sx={{
                gap: '3px',
              }}
              name='read-only'
              value={rating}
              onChange={(e: any) => {
                setRating(e.target.value)
              }}
            />
          </div>
          <div className='w-full'>
            <InputField
              label='title'
              type='text'
              inputColor='#090909'
              // rows={7}
              name='shopDescription'
              value={title}
              // errorText={shopDescriptionError}
              required={false}
              changeHandler={(e: any) => {
                setTitle(e.target.value)
              }}
            />
          </div>
          <div className='w-full'>
            <InputField
              label='description'
              type='textarea'
              inputColor='#090909'
              rows={7}
              name='shopDescription'
              value={description}
              // errorText={shopDescriptionError}
              required={false}
              changeHandler={(e: any) => {
                setDescription(e.target.value)
              }}
            />
          </div>
          <div>
            <div className='my-[10px]' style={{ display: 'flex', justifyContent: 'end' }}>
              <PrimaryBtn
                text='Submit Review'
                // disabled={true}
                // disabled={
                //   !amount ||
                //   loadingAddDividend ||
                //   selected.length < 1 ||
                //   selectedToDisplay.length < 1
                // }
                // className={
                //   !amount ||
                //   loadingAddDividend ||
                //   selected.length < 1 ||
                //   selectedToDisplay.length < 1
                //     ? styles.btnDisabled
                //     : styles.btnCreate
                // }
                handleClick={handleCreateReview}
                // className={styles.btnCreate}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AddReviewCard
