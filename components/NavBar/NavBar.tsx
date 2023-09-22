import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Menu, MenuItem, styled, Grid, Toolbar, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { PrimaryBtn, SecondaryBtn } from '../Buttons'
import styles from './styles.module.css'
import ToggleNavBar from '../ToggleNavBar/ToggleNavBar'
import { NavBarProps } from 'types'
import { withApollo } from 'lib/apollo/withApollo'
import withCart from 'containers/cart/withCart'
import inject from 'hocs/inject'
import AccountDropdown from '../AccountDropdown/AccountDropdown'
import useViewer from 'hooks/viewer/useViewer'
import AddToCartModal from '../AddToCartModal'
import NotificationModal from '../NotificationModal/NotificationModal'

const Navbar = ({
  itemsColor = 'black',
  activeItemColor = '#7DDEC1',
  ...restProps
}: NavBarProps) => {
  const [viewer, loading] = useViewer()

  console.log('viewer in navbar is', viewer)

  const pathName = usePathname()
  const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    height: '88px',
  })
  const SearchBox = styled(Box)({
    display: 'flex',
    gap: 5,
  })
  const MenuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT BAKERS', path: '/about-bakers' },
    { name: 'MEMBERSHIP', path: '/membership' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'SEARCH', path: '/search' },
  ]

  useEffect(() => {
    console.log('restProps in navbar is', restProps?.cart)
  }, [restProps?.cart])

  return (
    <AppBar
      sx={{
        background: 'transparent',
      }}
      position={'static'}
      elevation={0}
    >
      <StyledToolbar>
        <Box
          sx={{
            gap: { md: '16px', lg: '36px' },
            alignItems: 'center',
          }}
          className={styles.navbar}
        >
          {MenuItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                cursor: 'pointer',
              }}
              variant='body2'
              className='hover:scale-110 ease-in-out transition-all duration-300'
            >
              <Link
                style={
                  pathName === `${item.path}`
                    ? {
                        color: `${activeItemColor}`,
                        fontWeight: '700',
                        textDecoration: 'none',
                        borderRadius: '25px',
                        padding: '10px',
                        width: '2px',
                      }
                    : { color: `${itemsColor}`, textDecoration: 'none' }
                }
                href={item.path}
              >
                {item.name}
              </Link>
            </Typography>
          ))}
        </Box>

        <div className={styles.navbarMenu}>
          <ToggleNavBar navbarIconColor={itemsColor} />
        </div>

        <SearchBox sx={{ display: 'flex', alignItems: 'center' }}>
          {
            // loading ? (
            //   <p style={{ color: 'black' }}>loading...</p>
            // ) : (
            <Grid>
              {!viewer || Object.keys(viewer).length === 0 ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                  }}
                  // className={styles.navbar}
                >
                  <div className='w-[50px] md:w-[146px] h-[30px] md:h-[50px]'>
                    <a href='/signup'>
                      <PrimaryBtn handleClick={() => {}} text='register' />
                    </a>
                  </div>
                  <div className='w-[50px] md:w-[146px] h-[30px] md:h-[50px]'>
                    <a href='/signin'>
                      <SecondaryBtn handleClick={() => {}} text='sign in' color={`${itemsColor}`} />
                    </a>
                  </div>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    // flexDirection: 'row !important',
                    alignItems: 'center',
                    gap: '24px',
                    pr: '10px',
                    '@media (max-width: 767px)': {
                      gap: '18px',
                    },
                  }}
                >
                  <AccountDropdown account={viewer} />
                  <NotificationModal color={itemsColor} cartItems={[]} />
                  <AddToCartModal color={itemsColor} cartItems={restProps?.cart?.items} />
                </Box>
              )}
            </Grid>
            // )
          }
        </SearchBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default withApollo()(withCart(inject('uiStore')(Navbar)))
// export default withApollo()(Navbar)
