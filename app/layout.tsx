'use client'
import './globals.css'

import { PropsWithChildren } from 'react'
import { lightTheme } from './theme/themes'
import ContextProvider from './context-provider'

import { ThemeProvider, CssBaseline } from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang='en'>
      <head>
        <title>Your Baking Connection</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <ThemeProvider theme={lightTheme}>
        <ContextProvider>
          <body>
            <CssBaseline />
            {/* {showHeader && <Header />} */}
            {<Header />}
            {children}
            {<Footer />}
          </body>
        </ContextProvider>
      </ThemeProvider>
    </html>
  )
}
