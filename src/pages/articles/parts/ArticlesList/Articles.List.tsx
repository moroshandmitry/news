import React from 'react'

import ArticlesItem from '../ArticlesItem/Articles.Item'

import { StyledArticlesList } from './Articles.List.styles'

import type { ArticlesListProps } from './Articles.List.types'

const ArticlesList: React.FC<ArticlesListProps> = (props) => {
  const { articlesList = [] } = props

  const renderArticles = React.useMemo(() => {
    return articlesList?.map((article) => {
      return <ArticlesItem key={article.id} item={article} />
    })
  }, [articlesList])

  return <StyledArticlesList>{renderArticles}</StyledArticlesList>
}

export default ArticlesList
