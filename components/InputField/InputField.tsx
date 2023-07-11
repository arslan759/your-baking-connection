import { TextField, Typography } from '@mui/material'
import { InputFieldProps } from 'types'
import { useState } from 'react'

const InputField = ({
  type,
  name,
  label,
  inputColor,
  placeholder,
  value,
  handleChange,
  required,
  error,
  errorText,
}: InputFieldProps) => {
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
          className={`text-[12px] ${
            required ? "after:content-['*'] after:ml-[5px] after:text-[red]" : ''
          }`}
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
        inputProps={{
          autoComplete: 'off',
        }}
        type={type}
        name={name}
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
