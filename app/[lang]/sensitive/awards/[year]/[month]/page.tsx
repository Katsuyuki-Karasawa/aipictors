import { RankingHeader } from "app/[lang]/(main)/awards/_components/RankingHeader"
import { MainPage } from "app/_components/MainPage"
import type { Metadata } from "next"

const SensitiveAwardsPage = async () => {
  const year = new Date().getFullYear()

  const month = new Date().getMonth() + 1

  return (
    <MainPage>
      <RankingHeader year={year} month={month} day={1} />
    </MainPage>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default SensitiveAwardsPage
