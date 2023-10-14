import { PlaceholderPage } from "app/components/Placeholder"
import type { Metadata } from "next"

const RankingPage = async () => {
  return <PlaceholderPage>{"センシティブ"}</PlaceholderPage>
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default RankingPage
