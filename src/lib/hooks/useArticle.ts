import { useQuery } from '@apollo/client'
import { GET_ARTICLE } from 'graphql/queries/getArticle'

import type { IArticleItemResponse } from 'types'

const useArticle = (fullUrl: string) => {
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { fullUrl },
  })

  const extractParents = (parents) => parents.map(({ id, attachment }) => ({ id, attachment }))

  const extractedData = loading
    ? null
    : error
      ? { error: error.message }
      : {
          url: data.content.url,
          title: {
            long: data.content.title.long,
            short: data.content.title.short,
          },
          thumbnail: data.content.thumbnail,
          dates: {
            posted: data.content.dates.posted,
          },
          parents: extractParents(data.content.parents),
          description: {
            long: data.content.description.long,
            intro: data.content.description.intro,
          },
        }

  return {
    loading,
    data: extractedData as IArticleItemResponse,
    error: error ? error.message : null,
  }
}

export default useArticle
