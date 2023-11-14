import React from 'react'
import styled from 'styled-components'

import { isEmpty } from 'lib/helpers'
import { useArticle } from 'lib/hooks'
import { useLocation } from 'react-router-dom'

import { Card, Loader, Spacer, Image } from 'components/general'
import { ARTICLE_URL } from 'lib/constants'

const StyledDesc = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  color: rgb(15, 23, 42);

  & p {
    margin-bottom: 15px;
  }
`

const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1px;
  margin: 12px 0px 0px;
  color: rgb(15, 23, 42);
`

const StyledTitleShort = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: 16px;
  line-height: 28px;
  letter-spacing: 0px;
  margin-bottom: 24px;
  color: rgb(15, 23, 42);
`

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

        <Image src={ARTICLE_URL + data.thumbnail} style={{ maxHeight: '418px', objectFit: 'cover', borderRadius: '8px' }} />

        <StyledDesc dangerouslySetInnerHTML={{ __html: data.description.long }} />
        <Spacer flexDirection="row">
          <Card.Time time={data.dates.posted} />
        </Spacer>
      </Spacer>
    </Card>
  )
}

export default Article
