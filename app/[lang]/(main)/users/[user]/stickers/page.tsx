import type {
  UserStickersQuery,
  UserStickersQueryVariables,
} from "__generated__/apollo"
import { UserStickersDocument } from "__generated__/apollo"
import { UserWorkListActions } from "app/[lang]/(main)/users/[user]/_components/user-work-list-actions"
import { UserStickerList } from "app/[lang]/(main)/users/[user]/stickers/_components/user-sticker-list"
import { createClient } from "app/_contexts/client"
import type { Metadata } from "next"

type Props = {
  params: { user: string }
}

const UserStickersPage = async (props: Props) => {
  const client = createClient()

  const stickersQuery = await client.query<
    UserStickersQuery,
    UserStickersQueryVariables
  >({
    query: UserStickersDocument,
    variables: {
      userId: props.params.user,
      offset: 0,
      limit: 256,
    },
  })

  return (
    <>
      <UserWorkListActions />
      <UserStickerList stickers={stickersQuery.data.user?.stickers ?? []} />
    </>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default UserStickersPage
