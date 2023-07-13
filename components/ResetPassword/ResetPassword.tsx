import ResetPasswordForm from '../ResetPasswordForm'
import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'

export default function ForgetPassword() {
  return (
    <div className={`${styles.forgetpassword} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <Navbar itemsColor='white' />
      <ResetPasswordForm />
    </div>
  )
}
