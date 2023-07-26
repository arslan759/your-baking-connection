import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography } from '@mui/material'
import { DropdownProps } from 'types'
import { useEffect, useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const DropdownField = ({
  options,
  required,
  name,
  label,
  error,
  errorText,
  inputColor,
  value,
  onChange,
}: DropdownProps) => {
  const [errorState, setErrorState] = useState(errorText ? true : false)

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)

    if (event.target.value === '') setErrorState(true)
    else setErrorState(false)
  }

  useEffect(() => {
    setErrorState(errorText ? true : false)
  }, [errorText, errorState])

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
      <FormControl
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
        error={errorState}
      >
        <Select
          className='mt-[5px]'
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={value}
          onChange={handleChange}
          // input={<OutlinedInput label='Name' />}
          MenuProps={MenuProps}
          sx={{}}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {errorState ? <FormHelperText>{errorText}</FormHelperText> : ''}
      </FormControl>
    </div>
  )
}

export default DropdownField
