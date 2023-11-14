import React from 'react'
import styled from 'styled-components'

import NewsItem from './News.Item'

import type { INewsItem } from 'typings'

interface NewsListProps {
  newsList: INewsItem[]
}

const StyledDiv = styled.div``

const NewsList: React.FC<NewsListProps> = (props) => {
  const { newsList = [] } = props

  const renderArticles = React.useMemo(() => {
    return newsList?.map((article) => {
      return <NewsItem key={article.id} item={article} />
    })
  }, [newsList])

  return <StyledDiv>{renderArticles}</StyledDiv>
}

export default NewsList
