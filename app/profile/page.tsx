'use client'

import MyProfile from '@/components/MyProfile/MyProfile'
import Navbar from '@/components/NavBar/NavBar'
import ProfileNavbar from '@/components/ProfiileNavBar/ProfileNavBar'
import ProfileNavigationMobile from '@/components/ProfileNavigationMobile/ProfileNavigationMobile'
import Sidebar from '@/components/Sidebar/Sidebar'
import TabsPanel from '@/components/TabsPanel/TabsPanel'
import { useState } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(1)

  //   Define a function to handle tab change
  //   const handleTabChange = (event:, newValue:) => {
  //     setActiveTab(newValue)
  //   }

  return (
    <>
      {/* Mobile View Navigation*/}
      <div className='block min-[951px]:hidden'>
        <Navbar />
        <div>
          <ProfileNavigationMobile />
          <TabsPanel activeTab={activeTab} />
        </div>
      </div>

      {/* Desktop View Navigation */}
      <div className='hidden min-[950px]:flex'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className='w-full'>
          <div
            className='w-full flex justify-center'
            style={{
              borderBottom: '1px solid #BDBDBD',
            }}
          >
            <ProfileNavbar />
          </div>
          <div>
            <TabsPanel activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  )
}
