import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import HowItWorks from '../HowItWorks/HowItWorks'
import OurGallery from '../OurGallery/OurGallery'
import OurMission from '../OurMission/OurMission'
import ClientsSay from '../ClientsSay/ClientsSay'
import SwiperJS from '../SwiperJS'
import FAQs from '../FAQs/FAQs'
import StayInTouchForm from '../StayInTouch'

const HomePage = () => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute top-0 z-10'>
          <div className='w-[99vw] relative'>
            <Navbar />
          </div>
        </div>
        <SwiperJS />
      </div>

      {/* How It Works Section */}
      <div className={`w-full ${styles.HowItWorksSection}`}>
        <HowItWorks />
      </div>

      {/* Our Gallery Section */}
      <OurGallery />

      {/* Our Mission Section */}
      <OurMission />

      {/* Clients Say Section */}
      <ClientsSay />

      {/* FAQ's Section */}
      <FAQs />

      {/* Lets Stay in Touch Section */}
      <StayInTouchForm />
    </div>
  )
}

export default HomePage
