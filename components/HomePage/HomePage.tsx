import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import StayInTouchForm from '../StayInTouch'
import ClientReviewCard from '../ClientReviews/ClientReviewCard'

const HomePage = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <Navbar />
        home
      </div>
      <div className=''>
        {/* Alternating colors of #FFD9E4 and #B3EBDA or use primary and secondary if defined as given */}
        {/* <ClientReviewCard color='#FFD9E4' /> */}
        <ClientReviewCard color='#B3EBDA' />
      </div>
      <StayInTouchForm />
    </>
  )
}

export default HomePage
