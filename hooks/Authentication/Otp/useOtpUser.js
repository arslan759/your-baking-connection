import { useMutation } from '@apollo/client'
import otpUserMutation from './otpUser.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */

export default function useOtpUser() {
  // const [viewer, , refetchViewer] = useViewer()
  const [otpUserFunction, { data, loading }] = useMutation(otpUserMutation)
  return [otpUserFunction, loading]
}
