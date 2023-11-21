import React from 'react'

import { isEmpty } from 'lib/helpers'
import { useArticle } from 'lib/hooks'
import { useLocation } from 'react-router-dom'

import { ARTICLE_URL } from 'lib/constants'

import { Card, Loader, Spacer, Image } from 'components/general'
import { StyledDesc, StyledTitle, StyledTitleShort } from './Article.styles'

const Article: React.FC = () => {
  const location = useLocation()
  const { data, loading } = useArticle(location.pathname.slice(1))

  if (loading && isEmpty(data)) {
    return <Loader loading={loading} />
  }

  return (
    <Card>
      <Spacer ml={16} justifyContent="space-between">
        <StyledTitle children={data.title.long} />
        <StyledTitleShort children={data.description.intro} />

        <Image src={ARTICLE_URL + data.thumbnail} style={{ maxHeight: '418px', borderRadius: '8px' }} />

        <StyledDesc dangerouslySetInnerHTML={{ __html: data.description.long }} />
        <Spacer flexDirection="row">
          <Card.Time time={data.dates.posted} />
        </Spacer>
      </Spacer>
    </Card>
  )
}

export default Article
