import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import ordersByAccountIdQuery from './ordersByAccountId.gql'

export default function useOrdersByAccountId(accountId, shopIds) {
  const { data, loading, refetch } = useQuery(ordersByAccountIdQuery, {
    variables: {
      accountId,
      shopIds: 'cmVhY3Rpb24vc2hvcDpYenZBUnhjanNmQVo5d3hzNQ==',
    },
  })
  const orders = data?.ordersByAccountId?.edges
  useEffect(() => {
    refetch()
  }, [accountId, shopIds])

  return [orders, loading]
}
