import ForgotPasswordForm from '../ForgotPasswordForm'
import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'

export default function Signin() {
  return (
    <div className={`${styles.forgetpassword} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <Navbar itemsColor='white' />
      <ForgotPasswordForm />
    </div>
  )
}
