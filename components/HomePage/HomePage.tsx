import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import HowItWorks from '../HowItWorks/HowItWorks'
import OurGallery from '../OurGallery/OurGallery'
import OurMission from '../OurMission/OurMission'
import ClientsSay from '../ClientsSay/ClientsSay'
import FAQs from '../FAQs/FAQs'

const HomePage = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <Navbar />
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Our Gallery Section */}
      <OurGallery />

      {/* Our Mission Section */}
      <OurMission />

      {/* Clients Say Section */}
      <ClientsSay />

      {/* FAQ's Section */}
      <FAQs />
    </div>
  )
}

export default HomePage
