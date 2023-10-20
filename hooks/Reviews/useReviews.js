import { useEffect } from 'react'
import { useQuery } from '@apollo/client'

// import catalogItemsQuery from '../../containers/catalog/catalogItems.gql'
import reviews from './reviews.gql'

/**
 * Gets the product catalog for the shops and filters specified
 *
 * @returns {Array} the product catalog, loading state, refetch function and total count
 */
export default function useCatalogItems(input) {
  const { loading, data, refetch } = useQuery(reviews, {
    variables: input,
  })
  console.log(data)
  const catalogItems = data?.reviews?.edges
  const totalCount = data?.reviews?.totalCount

  console.log('catalogItems', catalogItems)

  return [catalogItems, loading, refetch, totalCount]
}
