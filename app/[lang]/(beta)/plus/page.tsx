import { PlusForm } from "app/[lang]/(beta)/plus/components/PlusForm"
import { MainCenterPage } from "app/components/MainCenterPage"
import type { Metadata } from "next"

/**
 * サブスク
 * @returns
 */
const PlusPage = async () => {
  return (
    <MainCenterPage>
      <PlusForm />
    </MainCenterPage>
  )
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    robots: { index: false },
    title: { absolute: "Aipictors+" },
  }
}

export const revalidate = 240

export default PlusPage
