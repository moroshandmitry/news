import React from 'react'

import { useQuery } from '@apollo/client'

import { GET_NEWS } from 'graphql/queries/getNews'

import type { INewsItem } from 'typings'

const PAGE_SIZE = 10

const useLoadInfinityScrollNews = () => {
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [allNews, setAllNews] = React.useState<INewsItem[]>([])
  const { data, fetchMore, networkStatus } = useQuery(GET_NEWS, {
    variables: { skip: PAGE_SIZE * (page - 1), take: PAGE_SIZE },
    notifyOnNetworkStatusChange: true,
  })

  const fetchMoreData = React.useCallback(
    async (newPage: number) => {
      if (loading) {
        return
      }

      setLoading(true)

      try {
        const { data: newData } = await fetchMore({
          variables: { skip: PAGE_SIZE * (newPage - 1), take: PAGE_SIZE },
        })

        if (!newData.contents || newData.contents.length === 0) {
          setHasMore(false)
        } else {
          setAllNews((prevAllNews) => {
            const uniqueNews = newData.contents.filter((newItem) => {
              return !prevAllNews.some((item) => item.id === newItem.id)
            })

            return [...prevAllNews, ...uniqueNews]
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
      setAllNews((prevAllNews) => {
        const uniqueNews = data.contents.filter((newItem) => {
          return !prevAllNews.some((item) => item.id === newItem.id)
        })
        return [...prevAllNews, ...uniqueNews]
      })
      setHasMore(data.contents.length === PAGE_SIZE)
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

  return { newsList: allNews, loading, hasMore, setPage }
}

export default useLoadInfinityScrollNews
