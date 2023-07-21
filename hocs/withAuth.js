// hocs/withAuthRedirect.js

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useViewer from '../hooks/viewer/useViewer'
import { withApollo } from 'lib/apollo/withApollo'

const withAuth = (WrappedComponent) => {
  const AuthRedirect = (props) => {
    const { viewer, loadingUser, refetchUser } = useViewer()
    const router = useRouter()
    const pathName = usePathname()

    // Use the useViewer GraphQL query to get the viewer object

    useEffect(() => {
      console.log('loading state', loadingUser)
      console.log('viewer is ', viewer)
    }, [loadingUser, viewer])

    if (loadingUser) {
      return (
        <>
          <p>Loading...</p>
        </>
      )
    }

    return <WrappedComponent {...props} />
  }

  return AuthRedirect
}

export default withAuth
