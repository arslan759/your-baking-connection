import { Button, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const PrimaryBtn = ({ handleClick, type = 'button', text }: PrimaryBtnProps) => {
  return (
    <Button
      className={`bg-green rounded-[5px] p-[10px] flex items-center justify-center w-full h-full`}
      disableElevation
      type={type}
      sx={{ textTransform: 'capitalize' }}
      onClick={handleClick}
    >
      <Typography className='text-black'>{text}</Typography>
    </Button>
  )
}

export default PrimaryBtn
