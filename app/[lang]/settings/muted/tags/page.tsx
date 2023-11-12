import { MutedTagList } from "@/app/[lang]/settings/muted/tags/_components/muted-tag-list"
import { MainCenterPage } from "@/app/_components/page/main-center-page"
import type { Metadata } from "next"

const SettingMutedTagsPage = async () => {
  return (
    <MainCenterPage>
      <MutedTagList />
    </MainCenterPage>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 0

export default SettingMutedTagsPage
