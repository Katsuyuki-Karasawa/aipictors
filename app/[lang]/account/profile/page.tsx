import { AccountProfileForm } from "@/app/[lang]/account/profile/_components/account-profile-form"
import type { Metadata } from "next"

const AccountProfilePage = async () => {
  return <AccountProfileForm />
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 0

export default AccountProfilePage
