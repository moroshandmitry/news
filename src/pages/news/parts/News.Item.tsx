import React from 'react'

import { decodeText, isEmpty } from 'lib/helpers'
import { LOGO_URL, THUMBNAIL_URL } from 'lib/constants'

import { Card, Spacer, Image, EmptyLogo } from 'components/general'

import type { INewsItem } from 'typings'

interface NewsItemProps {
  item: INewsItem
}

const NewsItem: React.FC<NewsItemProps> = ({ item }) => {
  const { title, description, dates, thumbnail, parents } = item
  const isPathEmpty = isEmpty(parents[1]?.attachment)
  const logoSrc = LOGO_URL + parents[1]?.attachment

  return (
    <Card>
      <Image style={{ borderRadius: '4px' }} src={`${THUMBNAIL_URL}${thumbnail}`} alt={decodeText(title.short)} width={240} />
      <Spacer ml={16} justifyContent="space-between">
        <Card.Title title={title.long} />
        <Card.Desc desc={description.intro} />
        <Spacer flexDirection="row">
          <RenderLogo isPathEmpty={isPathEmpty} src={logoSrc} />
          <Card.Time time={dates.posted} />
        </Spacer>
      </Spacer>
    </Card>
  )
}

interface RenderLogoProps {
  src: string
  isPathEmpty: boolean
}

const RenderLogo: React.FC<RenderLogoProps> = (props) => {
  const { isPathEmpty, src } = props

  if (!isPathEmpty) {
    return <Image src={src} mr={8} width={16} height={16} />
  }

  return <EmptyLogo />
}

export default NewsItem