"use client"

import { LoadingPage } from "app/_components/pages/LoadingPage"
import { LoginPage } from "app/_components/pages/LoginPage"
import { AppContext } from "app/_contexts/appContext"
import { useContext } from "react"

type Props = {
  children: React.ReactNode
}

const PlusLayout: React.FC<Props> = (props) => {
  const context = useContext(AppContext)

  if (context.isLoading) {
    return <LoadingPage />
  }

  if (context.isNotLoggedIn) {
    return <LoginPage />
  }

  return <>{props.children}</>
}

export default PlusLayout
