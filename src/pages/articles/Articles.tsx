import React from 'react'

import { useLoadInfinityScrollArticles } from 'lib/hooks'

import { ArticlesList } from './parts'

import { StyledArticles, StyledTitle } from './Articles.styles'

const Articles: React.FC = () => {
  const { articlesList = [] } = useLoadInfinityScrollArticles()

  return (
    <StyledArticles>
      <StyledTitle>Сегодня:</StyledTitle>
      {articlesList && <ArticlesList articlesList={articlesList} />}
    </StyledArticles>
  )
}

export default Articles
