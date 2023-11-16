import styled, { css } from 'styled-components'

import type { ICardDescProps } from './Card.Desc.types'

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

export const StyledCardDesc = styled.p<ICardDescProps>`
  display: flex;
  ${commonStyles}
  ${mediaQueryStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

export const StyledDiv = styled.div``
