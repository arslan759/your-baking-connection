import { MouseEventHandler } from 'react'

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

export interface InputProps {
  type: string
  name: string
  error?: boolean
  errorText?: string
  label: string
  required: boolean
  placeholder?: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
