import { css } from 'styled-components'

export interface ICardTitleProps extends React.PropsWithChildren {
  title?: string
  additionalStyles?: ReturnType<typeof css>
}
