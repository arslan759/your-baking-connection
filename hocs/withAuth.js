// hocs/withAuthRedirect.js

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useViewer from '../hooks/viewer/useViewer'
import { withApollo } from 'lib/apollo/withApollo'
import Loader from '@/components/Loader/Loader'

const withAuth = (WrappedComponent) => {
  const AuthRedirect = (props) => {
    let isAuthenticated
    const [viewer, loading] = useViewer()
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
      console.log('loading viewer is ', loading)
    }, [loading, viewer?._id, pathName, isAuthenticated])

    if (loading && !viewer?._id) {
      return (
        <>
          <Loader />
        </>
      )
    }

    // Consolidated condition to handle redirects
    if (!loading) {
      if (
        (viewer?._id && (pathName === '/signin' || pathName === '/signup')) ||
        (!viewer?._id && pathName === `/profile`) ||
        (!viewer?._id && pathName === `/profile/help`) ||
        (!viewer?._id && pathName === `/profile/preferences`) ||
        (!viewer?._id && pathName === `/profile/purchase-history`) ||
        (!viewer?._id && pathName === `/profile/payment-details`) ||
        (!viewer?._id && pathName === `/profile/ratings-and-reviews`) ||
        (!viewer?._id && pathName === `/profile/settings`)
      ) {
        isAuthenticated = false
      } else {
        isAuthenticated = true
      }
    }

    if (!isAuthenticated) {
      router.replace('/')
      return null
    }

    return <WrappedComponent {...props} />
  }

  return AuthRedirect
}

export default withAuth
