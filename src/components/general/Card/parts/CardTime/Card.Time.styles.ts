import styled, { css } from 'styled-components'

import type { ICardTimeProps } from './Card.Time.types'

const commonStyles = css`
  font-size: 14px;
  width: max-content;
  color: ${({ theme }) => theme.colors.tertiary};
`

export const StyledCardTime = styled.time<ICardTimeProps>`
  ${commonStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

export const StyledDiv = styled.div``
