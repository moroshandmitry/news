import { gql } from '@apollo/client'

export const GET_ARTICLE = gql`
  query GetArticle($fullUrl: String!) {
    content(id: "", project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", full_url: $fullUrl) {
      url
      title {
        short
        long
      }
      thumbnail
      dates {
        posted
      }
      parents {
        id
        attachment
      }
      description {
        intro
        long
      }
    }
  }
`
