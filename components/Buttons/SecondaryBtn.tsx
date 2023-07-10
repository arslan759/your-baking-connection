import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { SecondaryBtnProps } from 'types'
import styles from './styles.module.css'

const SecondaryBtn = ({ handleClick, text, color }: SecondaryBtnProps) => {
  // console.log('SecondaryBtn color is', color)

  useEffect(() => {
    console.log('SecondaryBtn color is', color)
  }, [color])

  return (
    <Button
      className={`bg-transparent rounded-[5px] p-[10px] flex items-center justify-center w-full h-full`}
      disableElevation
      onClick={handleClick}
    >
      <Typography
        className={`${styles.underline}`}
        sx={{ color: color, textTransform: 'capitalize' }}
        variant='body2'
      >
        {text}
      </Typography>
    </Button>
  )
}

export default SecondaryBtn
