import React from 'react'

import { isEmpty } from 'lib/helpers'
import { useArticle } from 'lib/hooks'
import { useLocation } from 'react-router-dom'

import { Card, Loader, Spacer } from 'components/general'

const Article: React.FC = () => {
  const location = useLocation()
  const { data, loading } = useArticle(location.pathname.slice(1))

  if (loading && isEmpty(data)) {
    return <Loader loading={loading} />
  }

  return (
    <Card>
      <Spacer ml={16} justifyContent="space-between">
        <Card.Title title={data.title.long} />
        <div dangerouslySetInnerHTML={{ __html: data.description.long }}></div>
        <Spacer flexDirection="row">
          <Card.Time time={data.dates.posted} />
        </Spacer>
      </Spacer>
    </Card>
  )
}

export default Article
