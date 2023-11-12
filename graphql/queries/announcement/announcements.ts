import { gql } from "@apollo/client"

export default gql`
  query Announcements {
    announcements(offset: 0, limit: 16) {
      id
      title
      body
      publishedAt
    }
  }
`
