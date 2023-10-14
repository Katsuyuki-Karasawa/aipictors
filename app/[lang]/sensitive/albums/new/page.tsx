import { NewAlbumForm } from "app/[lang]/(main)/albums/new/components/NewAlbumForm"
import { MainPage } from "app/components/MainPage"
import type { Metadata } from "next"

const NewAlbumPage = async () => {
  return (
    <MainPage>
      <NewAlbumForm />
    </MainPage>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default NewAlbumPage
