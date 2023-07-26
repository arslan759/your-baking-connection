import React from 'react'
import { TabsPanelProps } from 'types'
import MyProfile from '../MyProfile/MyProfile'

const TabsPanel = ({ activeTab }: TabsPanelProps) => {
  return (
    <div>
      {activeTab == 0 && <MyProfile />}
      {activeTab == 1 && <div>Payment Details</div>}
      {activeTab == 2 && <div>Purchase History</div>}
      {activeTab == 3 && <div>Settings</div>}
      {activeTab == 4 && <div>Help</div>}
      {activeTab == 5 && <div>Logout</div>}
    </div>
  )
}

export default TabsPanel
