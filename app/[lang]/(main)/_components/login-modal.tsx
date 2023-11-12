"use client"

import { LoginModalForm } from "@/app/[lang]/(main)/_components/login-modal-form"
import type { FormLogin } from "@/app/_types/form-login"
import { Modal, ModalContent, ModalOverlay, useToast } from "@chakra-ui/react"
import { useLoginWithPasswordMutation } from "@/__generated__/apollo"
import { getAuth, signInWithCustomToken } from "firebase/auth"

type Props = {
  isOpen: boolean
  onClose(): void
}

export const LoginModal: React.FC<Props> = (props) => {
  const [mutation, { loading: isLoading }] = useLoginWithPasswordMutation()

  const toast = useToast()

  const onLogin = async (form: FormLogin) => {
    try {
      const result = await mutation({
        variables: {
          input: {
            login: form.login,
            password: form.password,
          },
        },
      })
      const token = result.data?.loginWithPassword.token ?? null
      if (token === null) {
        toast({ status: "error", description: "ログインに失敗しました。" })
        return
      }
      await signInWithCustomToken(getAuth(), token)
      toast({ status: "success", description: "ログインしました。" })
      props.onClose()
    } catch (error) {
      if (error instanceof Error) {
        toast({ status: "error", description: error.message })
      }
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent maxW={"xs"}>
        <LoginModalForm
          onSubmit={onLogin}
          isLoading={isLoading}
          onClose={props.onClose}
        />
      </ModalContent>
    </Modal>
  )
}
