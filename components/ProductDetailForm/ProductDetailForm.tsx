import React, { useEffect, useState } from 'react'
import DropdownField from '../DropdownField/DropdownField'
import { Typography } from '@mui/material'
import ServeItem from './ServeItem'
import { PrimaryBtn, SecondaryBtn } from '../Buttons'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DropdownFieldAttributes from '../DropdownFieldAttributes'

interface ProductDetailFormProps {
  attributes: any[]
  updatePrice: (price: number) => void
  newPrice: number
}

interface Option {
  optionLabel: string
  price: number | string
}

interface Attribute {
  attribute: string
  option: Option
}

const ProductDetailForm = ({ attributes, newPrice, updatePrice }: ProductDetailFormProps) => {
  const [productAttributes, setProductAttributes] = useState<Attribute[]>([])
  const [quantity, setQuantity] = useState(1)
  const [serves, setServes] = useState<string | null>('1')
  const [isFavorite, setIsFavorite] = useState(false)

  // error states
  const [colorError, setColorError] = useState('')
  const [flavorError, setFlavorError] = useState('')

  const handleDropdownChange = async (attribute: string, optionLabel: string, price: string) => {
    console.log('attribute is ', attribute)
    console.log('name is ', optionLabel)
    console.log('value is ', price)

    const updatedAttributes = [...productAttributes]

    console.log('updatedAttributes', updatedAttributes)

    const attributeToUpdate = await updatedAttributes.filter(
      (item) => item.attribute === attribute,
    )[0]

    console.log('attributeToUpdate is ', attributeToUpdate)

    attributeToUpdate!.option = {
      optionLabel,
      price,
    }

    let totalPrice: number[] = []

    await updatedAttributes.map((item) => {
      totalPrice.push(Number(item.option.price))
    })

    console.log('totalPrice is ', totalPrice)

    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue

    const newTotalPrice = await totalPrice.reduce(reducer)

    console.log('newTotalPrice is ', newTotalPrice)

    updatePrice(newPrice + newTotalPrice)

    setProductAttributes(updatedAttributes)
  }

  //   onClick function for serves
  const handleServesChange = (serves: string) => {
    setServes(serves)
  }

  // function for add and subtract quantity
  const handleAddQuantity = () => {
    console.log('add quantity clicked')

    setQuantity((prev) => prev + 1)

    console.log('quantity is now', quantity)
  }

  const handleSubtractQuantity = () => {
    console.log('subtract quantity clicked for', name)

    console.log('quantity is', quantity)

    if (quantity === 1) return
    setQuantity((prev) => prev - 1)

    console.log('quantity is now', quantity)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form logs
    console.log('serves is ', serves)
    console.log('quantity is ', quantity)
    console.log('isFavorite is ', isFavorite)
    console.log('productAttributes is ', productAttributes)

    // reset form
    const updatedAttributes = filterDetails(attributes)

    console.log('updatedDetails', updatedAttributes)

    setProductAttributes(updatedAttributes)
    setServes('1')
    setQuantity(1)
    setIsFavorite(false)

    console.log('form submitted')
  }

  const filterDetails = (attribute: any) => {
    return attribute?.map((item: any, index: number) => {
      return {
        attribute: item?.attribute,
        option: {
          optionLabel: '',
          price: '',
        },
      }
    })
  }

  const formReset = () => {
    setColorError('')
    setFlavorError('')
    setServes('1')
    updatePrice(newPrice)
    setQuantity(1)
    setIsFavorite(false)
    const updatedAttributes = filterDetails(attributes)

    console.log('updatedDetails', updatedAttributes)

    setProductAttributes(updatedAttributes)
  }

  useEffect(() => {
    const updatedAttributes = filterDetails(attributes)

    console.log('updatedDetails', updatedAttributes)

    setProductAttributes(updatedAttributes)
  }, [attributes])

  useEffect(() => {
    console.log('productAttributes', productAttributes)
  }, [productAttributes])

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col md:flex-row gap-x-[32px] gap-y-[12px]'>
        <div>
          <Typography
            sx={{
              color: '#888',
              fontSize: '12px !important',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
              '::after': {
                content: "'*'",
                marginLeft: '5px',
                color: 'red',
              },
            }}
          >
            Serves
          </Typography>
          <div className='flex gap-[8px] mt-[5px] items-center w-[50%] md:w-[20%]'>
            {['1', '2', '3', '4+'].map((item, index) => (
              <ServeItem
                key={index}
                item={item}
                isSelected={serves == item}
                onSelect={handleServesChange}
              />
            ))}
          </div>
        </div>

        {/* <div className='max-[400px]:w-[100%] w-[60%] md:w-[25%]'>
          <InputField
            label='color'
            type='text'
            inputColor='#888'
            name='color'
            placeholder='Enter color'
            value={color}
            // error={isError}
            errorText={colorError}
            required
            onChange={handleChange}
          />
        </div> */}
      </div>

      <div className='w-full flex flex-wrap mt-[18px] gap-[18px]'>
        {attributes.map((item, index) => {
          console.log('attribute is', item)

          console.log('attribute option value is ', productAttributes[index]?.option)
          return (
            <div key={index} className='max-[400px]:w-[100%] w-[60%] md:w-[25%]'>
              <DropdownFieldAttributes
                label={item?.attribute}
                required
                name={item?.attribute}
                value={productAttributes[index]?.option}
                placeholder={`Select ${item?.attribute}`}
                options={item?.options}
                inputColor='#888'
                onChange={handleDropdownChange}
              />
            </div>
          )
        })}
      </div>

      <div className='w-fit mt-[18px]'>
        <SecondaryBtn color='#000' text='Reset' handleClick={formReset} />
      </div>

      <div className='w-full mt-[18px] flex flex-wrap gap-[16px]'>
        <div className=' bg-[#000] w-fit flex items-center text-white rounded-[4px] px-[10px] py-[8px] gap-[8px] overflow-hidden'>
          <div
            className='flex items-center justify-center w-[20px] h-[20px] px-[4px] py-[4px] cursor-pointer'
            onClick={handleSubtractQuantity}
          >
            -
          </div>
          <div className='flex items-center text-[18px]'>{quantity}</div>
          <div
            className='flex items-center justify-center w-[20px] h-[20px] px-[4px] py-[4px] cursor-pointer'
            onClick={handleAddQuantity}
          >
            +
          </div>
        </div>

        <div className='w-[100px] md:w-[146px]'>
          <PrimaryBtn text='Add to Cart' type='submit' />
        </div>

        <div
          onClick={() => setIsFavorite(!isFavorite)}
          className='bg-[#7DDEC1] flex items-center justify-center rounded-full h-[40px] w-[40px] cursor-pointer'
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </form>
  )
}

export default ProductDetailForm
