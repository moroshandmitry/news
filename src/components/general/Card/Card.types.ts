import { css } from 'styled-components'

import * as Parts from './parts'

export interface ICardProps extends React.ComponentPropsWithRef<'article'>, React.PropsWithChildren {
  additionalStyles?: ReturnType<typeof css>
}

export interface ICardParts {
  Time: typeof Parts.CardTime
  Desc: typeof Parts.CardDesc
  Title: typeof Parts.CardTitle
}
