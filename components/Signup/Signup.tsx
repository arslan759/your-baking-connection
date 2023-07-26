import Navbar from '../NavBar/NavBar'
import SignupForm from '../SignupForm'
import styles from './styles.module.css'

export default function Signup() {
  return (
    <div className={`${styles.signup}`}>
      <Navbar itemsColor='white' />
      <SignupForm />
    </div>
  )
}
