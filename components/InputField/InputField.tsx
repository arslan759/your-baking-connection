import { InputAdornment, TextField, Typography } from '@mui/material'
import { InputFieldProps } from 'types'
import { useEffect, useState } from 'react'

const InputField = ({
  type,
  name,
  label = '',
  inputColor,
  placeholder,
  value,
  handleKeyPress,
  error,
  startIcon,
  rows,
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
        <label htmlFor={name}>
          <Typography
            sx={{
              color: inputColor,
              fontSize: '12px !important',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
              '::after': required
                ? {
                    content: "'*'",
                    marginLeft: '5px',
                    color: 'red',
                  }
                : {},
            }}
          >
            {label}
          </Typography>
        </label>
      ) : (
        ''
      )}

      <TextField
        sx={{
          '& .MuiOutlinedInput-root': {
            color: inputColor,
            height: type === 'textarea' ? 'auto' : '35px',
            padding: '5px',
            borderRadius: '5px',
            fontSize: '12px',
            marginTop: label ? '5px' : '0px',
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
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position='start'>{startIcon}</InputAdornment>
          ) : null,
        }}
        onKeyPress={handleKeyPress ? handleKeyPress : () => {}}
        multiline={type === 'textarea' ? true : false}
        rows={type === 'textarea' ? rows : 1}
        error={errorState}
        id='outlined-error-helper-text'
        value={value}
        onChange={handleChange}
        helperText={errorState ? errorText : ''}
      />
    </div>
  )
}

export default InputField
