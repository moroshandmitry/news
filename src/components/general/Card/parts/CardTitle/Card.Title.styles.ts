import styled, { css } from 'styled-components'

import type { ICardTitleProps } from './Card.Title.types'

const commonStyles = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  position: relative;
  letter-spacing: 0px;
  margin: -2.5px 0px 8px;
  color: rgb(15, 23, 42);
  color: ${({ theme }) => theme.colors.tertiary};
`

export const StyledCardTitle = styled.h3<ICardTitleProps>`
  ${commonStyles}
  ${({ styledCss }) => styledCss && styledCss}
`
