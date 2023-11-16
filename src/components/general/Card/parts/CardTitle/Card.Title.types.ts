import { css } from 'styled-components'

export interface ICardTitleProps extends React.PropsWithChildren {
  title?: string
  styledCss?: ReturnType<typeof css>
}
