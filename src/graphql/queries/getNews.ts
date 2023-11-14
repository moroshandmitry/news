import { gql } from '@apollo/client'

export const GET_NEWS = gql`
  query GetNews($skip: Int, $take: Int) {
    contents(project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", lang: "ru", skip: $skip, take: $take) {
      id
      url
      thumbnail
      dates {
        posted
      }
      title {
        long
        short
      }
      parents {
        id
        attachment
      }
      description {
        intro
      }
    }
  }
`
