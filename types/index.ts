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
  link1?: string
  link2?: string
  link3?: string
}

export interface PrimaryBtnProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface NavBarProps {
  itemsColor?: string
  activeItemColor?: string
  navbarIconColor?: string
}

export interface ToggleNavBarProps {
  navbarIconColor?: string
}

export interface SecondaryBtnProps {
  text: string
  color: string
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export interface InputFieldProps {
  type: string
  name: string
  inputColor?: string
  error?: boolean
  errorText?: string
  label?: string
  multiline?: boolean
  rows?: number
  required: boolean
  placeholder?: string
  value: string
  onChange: (name: string, value: string) => void
}

export interface PasswordFieldProps {
  name: string
  error?: boolean
  errorText?: string
  inputColor?: string
  label: string
  required: boolean
  placeholder?: string
  value: string
  onChange: (name: string, value: string) => void
}

export interface DropdownProps {
  name: string
  label: string
  required: boolean
  error?: boolean
  options: string[]
  errorText?: string
  inputColor?: string
  value: any
  onChange: (text: string) => void
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
}

export interface SignUpFormProps {
  openOtp: () => void
}

export interface SignUpFormProps {
  openOtp: () => void
}

export interface OTPFormProps {
  closeOtp: () => void
  type: string
  email: string
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

export interface TabsPanelProps {
  activeTab: number
}

export interface ProfileNavigationMobileProps {
  activeTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}
