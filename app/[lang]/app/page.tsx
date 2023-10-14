import { AppAboutHeader } from "app/[lang]/app/components/AppAboutHeader"
import { AppFooter } from "app/[lang]/app/components/AppFooter"
import type { Metadata } from "next"

const AppPage = async () => {
  return (
    <>
      <AppAboutHeader />
      <AppFooter />
    </>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: { absolute: "Aipictorsアプリ" },
  description: "Aipictorsのアプリをダウンロード",
}

export const revalidate = 3600

export default AppPage
