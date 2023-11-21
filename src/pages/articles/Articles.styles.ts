import styled from 'styled-components'

export const StyledArticles = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary};
`

export const StyledTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  text-align: left;
  margin: 0px 0px 24px 0px;
  color: ${({ theme }) => theme.colors.deepPlum};
`
