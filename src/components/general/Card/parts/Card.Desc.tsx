import React from 'react'
import styled, { css } from 'styled-components'

interface ICardDescProps extends React.PropsWithChildren {
  desc?: string
  additionalStyles?: string
}

const commonStyles = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0px 0px 10px;
  color: ${({ theme }) => theme.colors.deepPlum};
`

const mediaQueryStyles = css`
  @media (max-width: 850px) {
    display: none;
  }
`

const StyledCardDesc = styled.p<ICardDescProps>`
  display: flex;
  ${commonStyles}
  ${mediaQueryStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

const StyledDiv = styled.div``

const CardDesc: React.FC<ICardDescProps> = (props) => {
  const { desc, children, additionalStyles } = props

  if (desc) {
    return <StyledCardDesc additionalStyles={additionalStyles}>{desc}</StyledCardDesc>
  }

  return <StyledDiv>{children}</StyledDiv>
}

export default CardDesc
