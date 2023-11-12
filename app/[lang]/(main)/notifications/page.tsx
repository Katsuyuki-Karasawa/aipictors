import { NotificationArticle } from "app/[lang]/(main)/notifications/_components/notification-article"
import { MainPage } from "app/_components/page/main-page"
import type { Metadata } from "next"

/**
 * 通知の一覧
 * @returns
 */
const NotificationsPage = async () => {
  return (
    <MainPage>
      <NotificationArticle />
    </MainPage>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default NotificationsPage
