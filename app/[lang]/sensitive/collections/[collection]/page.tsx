import { PlaceholderPage } from "@/app/_components/placeholder-page"
import type { Metadata } from "next"

const SensitiveCollectionPage = async () => {
  return <PlaceholderPage>{"コレクション"}</PlaceholderPage>
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default SensitiveCollectionPage
