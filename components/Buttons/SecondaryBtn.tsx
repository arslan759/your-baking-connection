import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { SecondaryBtnProps } from 'types'
import styles from './styles.module.css'

const SecondaryBtn = ({ handleClick, text, color }: SecondaryBtnProps) => {
  // console.log('SecondaryBtn color is', color)

  useEffect(() => {}, [color])

  return (
    <Button
      className={`bg-transparent hover:bg-transparent cursor-default rounded-[5px] p-[10px] flex items-center justify-center w-full h-full`}
      disableElevation
      disableFocusRipple
      disableRipple
    >
      <Typography
        onClick={handleClick}
        className='hover:scale-125 ease-in-out transition-all duration-300'
        sx={{
          color: color,
          cursor: 'pointer',
          textTransform: 'capitalize',
          position: 'relative',
          '::after': {
            content: '""',
            position: 'absolute',
            bottom: '3px',
            left: '0',
            width: '100%',
            height: '1px',
            backgroundColor: color,
          },
        }}
        variant='body2'
      >
        {text}
      </Typography>
    </Button>
  )
}

export default SecondaryBtn
