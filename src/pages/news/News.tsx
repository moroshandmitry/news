import React from 'react'
import styled from 'styled-components'

import { useLoadInfinityScrollNews } from 'lib/hooks'

import { NewsList } from './parts'

const StyledNews = styled.div`
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

const News: React.FC = () => {
  const { newsList = [] } = useLoadInfinityScrollNews()

  return (
    <StyledNews>
      <StyledTitle>Сегодня:</StyledTitle>
      {newsList && <NewsList newsList={newsList} />}
    </StyledNews>
  )
}

export default News
