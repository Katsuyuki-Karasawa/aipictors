import type { StickersQuery } from "__generated__/apollo"
import { StickersDocument } from "__generated__/apollo"
import { StickerList } from "app/[lang]/(main)/stickers/_components/StickerList"
import { createClient } from "app/_contexts/client"
import type { Metadata } from "next"

/**
 * スタンプの一覧
 * @returns
 */
const StickersPage = async () => {
  const client = createClient()

  const stickersQuery = await client.query<StickersQuery>({
    query: StickersDocument,
    variables: {
      offset: 0,
      limit: 256,
    },
  })

  return <StickerList stickers={stickersQuery.data.stickers} />
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default StickersPage
