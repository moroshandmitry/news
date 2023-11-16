import { css } from 'styled-components'

export interface ICardTimeProps extends React.PropsWithChildren {
  time?: string
  styledCss?: ReturnType<typeof css>
}
