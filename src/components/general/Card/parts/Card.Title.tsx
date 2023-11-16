import React from 'react'
import styled, { css } from 'styled-components'

import { decodeText } from 'lib/helpers'

interface ICardTitleProps extends React.PropsWithChildren {
  title?: string
  additionalStyles?: ReturnType<typeof css>
}

const commonStyles = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  position: relative;
  letter-spacing: 0px;
  margin: -2.5px 0px 8px;
  color: ${({ theme }) => theme.colors.deepPlum};
`

const StyledCardTitle = styled.h3<ICardTitleProps>`
  ${commonStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

const StyledDiv = styled.div``

const CardTitle: React.FC<ICardTitleProps> = (props) => {
  const { title, children, additionalStyles } = props

  if (title) {
    return <StyledCardTitle additionalStyles={additionalStyles}>{decodeText(title)}</StyledCardTitle>
  }

  const renderedChildren = React.Children.map(children, (child, index) => <StyledDiv key={index}>{child}</StyledDiv>)

  return <>{renderedChildren}</>
}

export default CardTitle
