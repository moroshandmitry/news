import React from 'react'
import styled, { css } from 'styled-components'

interface ICardTimeProps extends React.PropsWithChildren {
  time?: string
  additionalStyles?: ReturnType<typeof css>
}

const commonStyles = css`
  font-size: 14px;
  width: max-content;
  color: ${({ theme }) => theme.colors.tertiary};
`

export const StyledCardTitle = styled.time<ICardTimeProps>`
  ${commonStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

export const StyledDiv = styled.div``
