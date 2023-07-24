import { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import { InputFieldProps } from 'types'

const InputField = ({
  type,
  name,
  label = '',
  inputColor,
  placeholder,
  value,
  error,
  onChange,
  required,
  errorText,
}: InputFieldProps) => {
  const [errorState, setErrorState] = useState(errorText ? true : false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    onChange(name, value)

    if (value === '') setErrorState(true)
    else setErrorState(false)
  }

  useEffect(() => {
    setErrorState(errorText ? true : false)
  }, [errorText, errorState])

  return (
    <div className='flex flex-col capitalize'>
      {label ? (
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
      ) : (
        ''
      )}

      <TextField
        className={`${label ? 'mt-[5px]' : 'mt-[0px]'}`}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: inputColor,
            height: '35px',
            padding: '5px',
            borderRadius: '5px',
            fontSize: '12px',

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
        placeholder={placeholder}
        type={type}
        name={name}
        error={errorState}
        id='outlined-error-helper-text'
        defaultValue={value}
        onChange={handleChange}
        helperText={errorState ? errorText : ''}
      />
    </div>
  )
}

export default InputField
