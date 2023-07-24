import React from 'react'
import { TabsPanelProps } from 'types'
import MyProfile from '../MyProfile/MyProfile'

const TabsPanel = ({ activeTab }: TabsPanelProps) => {
  return (
    <div>
      {activeTab == 1 && <MyProfile />}
      {activeTab == 2 && <div>Payment Details</div>}
      {activeTab == 3 && <div>Purchase History</div>}
      {activeTab == 4 && <div>Settings</div>}
      {activeTab == 5 && <div>Help</div>}
      {activeTab == 6 && <div>Logout</div>}
    </div>
  )
}

export default TabsPanel
