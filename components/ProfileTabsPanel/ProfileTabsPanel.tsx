import React from 'react'
import { ProfileTabsPanelProps } from 'types'
import MyProfile from '../MyProfile/MyProfile'

const ProfileTabsPanel = ({ activeTab }: ProfileTabsPanelProps) => {
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

export default ProfileTabsPanel
