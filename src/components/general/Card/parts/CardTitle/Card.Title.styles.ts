import styled, { css } from 'styled-components'

import type { ICardTitleProps } from './Card.Title.types'

const commonStyles = css`
  font-size: 14px;
  width: max-content;
  color: ${({ theme }) => theme.colors.tertiary};
`

export const StyledCardTitle = styled.time<ICardTitleProps>`
  ${commonStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

export const StyledDiv = styled.div``
