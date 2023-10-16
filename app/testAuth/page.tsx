'use client'

import AboutBakers from '@/components/AboutBakers'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function AboutBakersPage() {
  const { data: session, status } = useSession()
  return (
    <>
      <div className=''>
        <button onClick={() => signIn()}>signin</button>
        <button onClick={() => signOut()}>signout</button>
        <div>
          ClientComponent {status} {status === 'authenticated' && session.user.accessToken}
        </div>

        {/* <AboutBakers /> */}
      </div>
    </>
  )
}
