'use Client'

import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const ShopContext = createContext()

export const ShopProvider = ({ shop, children }) => {
  const shopId = localStorage.getItem('shopId')

  const shopDetails = {
    _id: shopId,
  }

  return <ShopContext.Provider value={shopDetails}>{children}</ShopContext.Provider>
}

ShopProvider.propTypes = {
  children: PropTypes.node,
  shop: PropTypes.object,
}
