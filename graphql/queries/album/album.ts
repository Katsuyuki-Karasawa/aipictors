import { gql } from "@apollo/client"

export const ALBUM = gql`
  query Album($id: ID!) {
    album(id: $id) {
      id
      title
      description
      user {
        ...WorkUserFields
        isFollowee
        isFollowee
        isMuted
      }
      createdAt
      isSensitive
      thumbnailImage {
        id
        downloadURL
      }
    }
  }
`
