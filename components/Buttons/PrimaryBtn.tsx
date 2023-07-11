import { Button, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const PrimaryBtn = ({ handleClick, type = 'button', text }: PrimaryBtnProps) => {
  return (
    <Button
      className={`bg-green hover:bg-[#39d4a5] rounded-[5px] p-[10px] flex items-center justify-center w-full h-full group`}
      disableElevation
      type={type}
      sx={{ textTransform: 'capitalize' }}
      onClick={handleClick}
    >
      <Typography className='text-black group-hover:text-white'>{text}</Typography>
    </Button>
  )
}

export default PrimaryBtn
