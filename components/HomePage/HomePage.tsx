import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'

const HomePage = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <Navbar />
        <div
          className='flex justify-center'
          style={{
            border: '1px solid red',
          }}
        >
          <div>
            <div>
              <h1>your baking connection</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
