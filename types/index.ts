import { MouseEventHandler } from 'react'

export interface ClientReviewCardProps {
  color: string
  name: string
  review: string
  image: string
  index: number
}

export interface FooterLinksProps {
  header?: string
  title1?: string
  link1?: string
  title2?: string
  link2?: string
  title3?: string
  link3?: string
}

export interface AddBakerProductImagesProps {
  productMedia: ProductMediaInterface[]
  setProductMedia: any
  handleUpdateProductMedia: any
}

export interface ProductMediaURLsInterface {
  large: string
  original: string
  small: string
  thumbnail: string
  medium: string
}
export interface ProductMediaInterface {
  productId: string
  priority: number
  URLs: ProductMediaURLsInterface
}

export interface AddCustomOrderImagesProps {
  productMedia: ProductMediaURLsInterface[]
  setProductMedia: any
  handleUpdateProductMedia: (image: string) => void
}

// export interface PrimaryBtnProps {
//   text: string
//   type?: 'button' | 'submit' | 'reset'
//   disabled?: boolean
//   loading?: boolean
//   handleClick?: MouseEventHandler<HTMLButtonElement>
// }

export interface PrimaryBtnProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>
  backgroundColor?: string
  onHoverBackgroundColor?: string
  textColor?: string
  onHoverTextColor?: string
}

export interface NavBarProps {
  itemsColor?: string
  activeItemColor?: string
  navbarIconColor?: string

  [key: string]: any
}

export interface ToggleNavBarProps {
  navbarIconColor?: string
}

export interface SecondaryBtnProps {
  text: string
  color: string
  handleClick: MouseEventHandler<HTMLDivElement>
}
export interface InputFieldProps {
  type: string
  name: string
  inputColor?: string
  error?: boolean
  errorText?: string
  label?: string
  startIcon?: React.ReactNode
  rows?: number
  required: boolean
  placeholder?: string
  value: string
  changeHandler?: any
  onChange?: (name: string, value: string) => void
  handleKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface UploadInputFieldProps {
  name: string
  inputColor?: string
  error?: boolean
  errorText?: string
  label?: string
  required: boolean
  placeholder?: string
  value?: File | null
  children?: React.ReactNode
}

export interface PasswordFieldProps {
  name: string
  error?: boolean
  errorText?: string
  inputColor?: string
  label: string
  required?: boolean
  placeholder?: string
  value: string
  onChange: (name: string, value: string) => void
}

export interface DropdownProps {
  name: string
  label?: string
  placeholder?: string
  required: boolean
  error?: boolean
  options: string[]
  errorText?: string
  inputColor?: string
  value: any
  onChange: (text: string) => void
}

export interface DropdownAttributeProps {
  name: string
  label?: string
  placeholder?: string
  required: boolean
  error?: boolean
  options: any[]
  errorText?: string
  inputColor?: string
  value: any
  onChange: (attribute: string, optionLabel: string, price: string) => void
}

export interface MultiSelectDropdownFieldProps {
  name: string
  label?: string
  placeholder?: string
  required: boolean
  error?: boolean
  options: any
  errorText?: string
  inputColor?: string
  value: any
  setWhatWeOfferToDisplay?: any
  setValue: (arg0: any) => void
}

export interface ForgetPasswordFormProps {
  openOtp: () => void
  email: string
  setEmail: (email: string) => void
  userId: string
  setUserId: (userId: string) => void
}

export interface SignUpFormProps {
  openOtp: () => void
  setTokens: (accessToken: string, refreshToken: string) => void
}

export interface SignUpFormProps {
  openOtp: () => void
}

interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface OTPFormProps {
  closeOtp?: () => void
  type: string
  email?: string
  tokens: Tokens
}

export interface SectionheadingProps {
  title: string
}

export interface SectionSubHeadingProps {
  subHeading: string
}

export interface SidebarProps {
  activeTab: number
  setActiveTab: (number: number) => void
}

export interface ProfileTabsPanelProps {
  activeTab: number
}

export interface ProfileNavigationMobileProps {
  activeTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

export interface SignupStepperProps {
  activeStep: number
  handleBack?: () => void
  handleNext?: () => void
  handleReset?: () => void
}

export interface SignupSuccessProps {
  setIsSuccess: (value: boolean) => void
}

export interface BakerWeOfferItemProps {
  title: string
  image: string
}

export interface BakerNavigationProps {
  activeTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  totalProducts: number
}

export interface BakerTabsPanelProps {
  activeTab: number
  slug: string
  fetchTotalProducts: (total: number) => void
}

export interface ProductCardProps {
  isFavoriteFlag?: boolean
  productId: string
  shopId: string
  image: string
  title: string
  description: string
  category: string
  oldPrice: string
  newPrice: string
  slug: string
  width?: string
  mdWidth?: string
}

export interface YourProfileCardItemProps {
  image: string
  title: string
  description: string
  isClickable: boolean
}

export interface CustomSwitchProps {
  value: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface CartCardDetailsItemProps {
  icon: string
  title: string
  description: string
  value: string
}

export interface ProductDetailTabsPanelProps {
  activeTab: number
  productDescription: string
}

export interface ProductDetailTabsProps {
  activeTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

export interface GalleryItemProps {
  image: string
  title: string
}

export interface SearchBakerItemProps {
  image: string
  title: string
  description: string
  rating: string
  state: string
  city: string
  slug: string
}

export interface PaginatorProps {
  count?: number
  boundaryCount?: number
  siblingCount?: number
  page?: number
  onChange?: (value: number) => void
}

export interface ProductDetailMainContentProps {
  isFavorite: boolean
  title: string
  stock: number
  oldPrice: number
  newPrice: number
  reviews: number
  description: string
  shopId: any
  rating: number
  productAttributes: any[]
  productId: string
  productVariantId: string
  isBaker?: boolean
}

export interface ProductSwiperProps {
  images: any[]
}

export interface AccountDropdownProps {
  account: any
}

export interface AddToCartModalProps {
  color: string
  cartItems: any[]

  cartFunctions: any
}

export interface ProductDetailTabsSectionProps {
  productDescription: string
}

export interface ProductDetailDescriptionTypes {
  productDescription: string
}
