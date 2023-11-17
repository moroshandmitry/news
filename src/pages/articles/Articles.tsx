import React from 'react'
import styled from 'styled-components'

import { useLoadInfinityScrollArticles } from 'lib/hooks'

import { ArticlesList } from './parts'

const StyledArticles = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary};
`

const StyledTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  text-align: left;
  margin: 0px 0px 24px 0px;
  color: ${({ theme }) => theme.colors.deepPlum};
`

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
