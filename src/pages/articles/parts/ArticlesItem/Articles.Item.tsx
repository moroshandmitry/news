import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ARTICLES_URL, LOGO_URL } from 'lib/constants'
import { decodeText, isEmpty, truncateTextDesc } from 'lib/helpers'

import { Card, EmptyLogo, Image, Spacer } from 'components/general'

import { styledCardCss } from './Articles.Item.styles'

import type { ArticlesItemProps } from './Articles.Item.types'

const ArticlesItem: React.FC<ArticlesItemProps> = (props) => {
  const { item } = props
  const { title, description, dates, thumbnail, parents, url } = item

  const navigate = useNavigate()
  const logoSrc = LOGO_URL + parents[1]?.attachment
  const isPathEmpty = isEmpty(parents[1]?.attachment)

  return (
    <Card onClick={() => navigate(url)} styledCss={styledCardCss}>
      <Image style={{ borderRadius: '4px' }} src={`${ARTICLES_URL}${thumbnail}`} alt={decodeText(title.short)} width={240} />
      <Spacer ml={16} justifyContent="space-between">
        <Card.Title title={title.long} />
        <Card.Desc desc={truncateTextDesc(description.intro)} />
        <Spacer flexDirection="row">
          {!isPathEmpty ? <Image src={logoSrc} mr={8} width={16} height={16} /> : <EmptyLogo />}
          <Card.Time time={dates.posted} />
        </Spacer>
      </Spacer>
    </Card>
  )
}

export default ArticlesItem
