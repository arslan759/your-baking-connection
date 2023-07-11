import { IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { PasswordFieldProps } from 'types'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { useState } from 'react'

const PasswordField = ({
  name,
  label,
  inputColor,
  placeholder,
  value,
  handleChange,
  required,
  error,
  errorText,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div className='flex flex-col capitalize mt-[8px]'>
      <label
        htmlFor={name}
        style={{
          color: inputColor,
        }}
      >
        <Typography
          className={`${required ? "after:content-['*'] after:ml-[5px] after:text-[red]" : ''}`}
          variant='body1'
        >
          {label}
        </Typography>
      </label>
      <TextField
        className='mt-[5px]'
        sx={{
          '& .MuiOutlinedInput-root': {
            color: inputColor,
            height: '35px',
            padding: '5px',
            borderRadius: '5px',

            '& fieldset': {
              borderColor: inputColor,
            },
            '&:hover fieldset': {
              borderColor: inputColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: inputColor,
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

export default PasswordField
