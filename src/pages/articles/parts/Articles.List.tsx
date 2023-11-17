import React from 'react'
import styled from 'styled-components'

import ArticlesItem from './Articles.Item'

import type { IArticlesItemResponse } from 'typings'

interface ArticlesListProps {
  articlesList: IArticlesItemResponse[]
}

const StyledDiv = styled.div``

const ArticlesList: React.FC<ArticlesListProps> = (props) => {
  const { articlesList = [] } = props

  const renderArticles = React.useMemo(() => {
    return articlesList?.map((article) => {
      return <ArticlesItem key={article.id} item={article} />
    })
  }, [articlesList])

  return <StyledDiv>{renderArticles}</StyledDiv>
}

export default ArticlesList
