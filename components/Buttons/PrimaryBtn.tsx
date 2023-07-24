import { Button, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const PrimaryBtn = ({ handleClick, type = 'button', text }: PrimaryBtnProps) => {
  return (
    <Button
      className={`flex items-center justify-center w-full h-full group`}
      disableElevation
      type={type}
      sx={{
        textTransform: 'capitalize',
        backgroundColor: '#7DDEC1',
        borderRadius: '5px',
        padding: '10px',
        '&:hover': {
          backgroundColor: '#39d4a5',
        },
      }}
      onClick={handleClick}
    >
      {<Typography className='text-black group-hover:text-white'>{text}</Typography>}
    </Button>
  )
}

export default PrimaryBtn
