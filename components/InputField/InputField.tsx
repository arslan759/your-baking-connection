import { IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import { InputProps } from 'types'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'

const InputField = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  required,
  error,
  errorText,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  if (type === 'password') {
    return (
      <div className='flex flex-col capitalize mt-[8px]'>
        <label htmlFor={name} className='text-white'>
          <Typography
            className={`${required ? "after:content-['*'] after:ml-[5px] after:text-[red]" : ''}`}
            variant='body1'
          >
            {name}
          </Typography>
        </label>
        <TextField
          className='mt-[5px]'
          sx={{
            '& .MuiOutlinedInput-root': {
              color: 'white',
              height: '50px',
              padding: '10px',
              borderRadius: '5px',

              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position='end'
                sx={{
                  color: 'white',
                }}
              >
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon sx={{ color: '#fff' }} />
                  ) : (
                    <VisibilityOutlinedIcon sx={{ color: '#fff' }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          name='password'
          type={showPassword ? 'text' : 'password'}
          error={error}
          onChange={handleChange}
          id='outlined-error-helper-text'
          defaultValue={value}
          helperText={errorText}
        />
      </div>
    )
  }

  return (
    <div className='flex flex-col capitalize mt-[8px]'>
      <label htmlFor={name} className='text-white'>
        <Typography
          className={`${required ? "after:content-['*'] after:ml-[5px] after:text-[red]" : ''}`}
          variant='body1'
        >
          {name}
        </Typography>
      </label>
      <TextField
        className='mt-[5px]'
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white',
            height: '50px',
            padding: '10px',
            borderRadius: '5px',

            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        }}
        name='email'
        error={error}
        id='outlined-error-helper-text'
        defaultValue={value}
        onChange={handleChange}
        helperText={errorText}
      />
    </div>
  )
}

export default InputField
