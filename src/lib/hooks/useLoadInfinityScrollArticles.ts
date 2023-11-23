import React from 'react'

import { useQuery } from '@apollo/client'
import { GET_ARTICLES } from 'graphql/queries/getArticles'

import { ARTICLES_PER_PAGE } from 'lib/constants'

import type { IArticlesItemResponse } from 'types'

const useLoadInfinityScrollArticles = () => {
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [allArticles, setAllArticles] = React.useState<IArticlesItemResponse[]>([])
  const { data, fetchMore, networkStatus } = useQuery(GET_ARTICLES, {
    variables: { skip: ARTICLES_PER_PAGE * (page - 1), take: ARTICLES_PER_PAGE },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
  })

  const fetchMoreData = React.useCallback(
    async (newPage: number) => {
      if (loading) {
        return
      }

      setLoading(true)

      try {
        const { data: newData } = await fetchMore({
          variables: { skip: ARTICLES_PER_PAGE * (newPage - 1), take: ARTICLES_PER_PAGE },
        })

        if (!newData.contents || newData.contents.length === 0) {
          setHasMore(false)
        } else {
          setAllArticles((prevAllArticles) => {
            const uniqueArticles = newData.contents.filter((newItem) => {
              return !prevAllArticles.some((item) => item.id === newItem.id)
            })

            return [...prevAllArticles, ...uniqueArticles]
          })

          setPage(newPage)
        }
      } catch (error) {
        console.error('Error fetching more data:', error)
      } finally {
        setLoading(false)
      }
    },
    [loading, fetchMore]
  )

  React.useEffect(() => {
    if (data && data.contents) {
      setAllArticles((prevAllArticles) => {
        const uniqueArticles = data.contents.filter((newItem) => {
          return !prevAllArticles.some((item) => item.id === newItem.id)
        })
        return [...prevAllArticles, ...uniqueArticles]
      })
      setHasMore(data.contents.length === ARTICLES_PER_PAGE)
    }
  }, [data])

  React.useEffect(() => {
    if (networkStatus === 7) {
      setLoading(false)
    }
  }, [networkStatus])

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && hasMore) {
        fetchMoreData(page + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading, hasMore, fetchMoreData, page])

  return { articlesList: allArticles, loading, hasMore, setPage }
}

export default useLoadInfinityScrollArticles
