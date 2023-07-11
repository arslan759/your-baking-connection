import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete'
import { Typography } from '@mui/material'
import { DropdownProps } from 'types'

const options = ['Option 1', 'Option 2']

function DropdownField({ name, required, inputColor }: DropdownProps) {
  const [value, setValue] = React.useState<string | null>(options[0])
  const [inputValue, setInputValue] = React.useState('')

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
      <Autocomplete
        popupIcon={<img src='/Images/dropdown.svg' alt='arrow-down' />}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id='controllable-states-demo'
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
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
            {...params}
          />
        )}
      />
    </div>
  )
}

export default DropdownField
