import { PlaceholderPage } from "app/components/Placeholder"
import type { Metadata } from "next"

const SensitiveCollectionsPage = async () => {
  return <PlaceholderPage>{"コレクションの一覧"}</PlaceholderPage>
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default SensitiveCollectionsPage
