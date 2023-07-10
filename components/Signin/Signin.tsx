import {
  Button,
  Box,
  Typography,
  TextField,
  InputAdornment,
  styled,
  FormControl,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import getAccountsHandler from 'lib/accountsServer'
import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import SigninForm from '../SigninForm'

interface ISignInForm {
  email: string
  password: string
}

interface IFormStatus {
  message: string
  type: string
}

interface IFormStatusProps {
  [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Signed up successfully.',
    type: 'success',
  },
  duplicate: {
    message: 'Email-id already exist. Please use different email-id.',
    type: 'error',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

export default function Signin() {
  const router = useRouter()
  const { passwordClient } = getAccountsHandler()

  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })
  // const classes = useStyles()
  const StyleTextField = styled(TextField)({
    input: {
      '&::placeholder': {
        color: '#fff',
        opacity: 1,
      },
    },
    margin: '12px 30px 20px 20px',
  })

  const loginUser = async (data: ISignInForm, resetForm: Function) => {
    try {
      console.log(data)

      // GRAPHQL Login

      // await passwordClient.login({
      //   user: {
      //     email
      //   },
      //   password: hashPassword(password)
      // });

      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success)
        resetForm({})
      }
    } catch (error: any) {
      const response = error.response
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div className={`${styles.signIn} md:h-[100vh]`}>
      <Navbar itemsColor='white' />
      <SigninForm />
    </div>
  )
}
