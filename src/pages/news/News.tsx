import React from 'react'
import styled from 'styled-components'

import { useLoadInfinityScrollNews } from 'lib/hooks'

import { NewsList } from './parts'

const StyledNews = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.bgContent};
`

const StyledTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  text-align: left;
  color: rgb(15, 23, 42);
  margin: 0px 0px 24px 0px;
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
