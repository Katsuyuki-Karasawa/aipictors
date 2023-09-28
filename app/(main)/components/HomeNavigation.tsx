"use client"
import {
  Box,
  Divider,
  Stack,
  Link as ChakraLink,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react"
import Link from "next/link"
import { useContext } from "react"
import {
  TbAlbum,
  TbAlertTriangle,
  TbAward,
  TbBolt,
  TbBox,
  TbBrandDiscordFilled,
  TbBrandThreads,
  TbBrandX,
  TbBrandYoutubeFilled,
  TbBulb,
  TbCamera,
  TbFolder,
  TbHome,
  TbLogin,
  TbLogout,
  TbMoonFilled,
  TbPhoto,
  TbPhotoPlus,
  TbRubberStamp,
  TbSettings,
  TbSunFilled,
} from "react-icons/tb"
import { HomeNavigationButton } from "app/(main)/components/HomeNavigationButton"
import { LoginModal } from "app/(main)/components/LoginModal"
import { LogoutModal } from "app/(main)/components/LogoutModal"
import { AppContext } from "app/contexts/appContext"
import { Config } from "config"

export const HomeNavigation: React.FC = () => {
  const appContext = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { colorMode, toggleColorMode } = useColorMode()

  const {
    isOpen: isOpenLogout,
    onOpen: onOpenLogout,
    onClose: onCloseLogout,
  } = useDisclosure()

  return (
    <Box
      as={"nav"}
      position={"sticky"}
      top={"64px"}
      h={"calc(100svh - 64px)"}
      minW={"12rem"}
      overflowY={"auto"}
    >
      <Stack pb={4} pl={4}>
        <HomeNavigationButton href={"/"} leftIcon={TbHome}>
          {"ホーム"}
        </HomeNavigationButton>
        <HomeNavigationButton
          isDisabled={Config.isReleaseMode}
          href={"/themes"}
          leftIcon={TbBulb}
        >
          {"創作アイデア"}
        </HomeNavigationButton>
        <HomeNavigationButton href={"/stickers"} leftIcon={TbRubberStamp}>
          {"スタンプ広場"}
        </HomeNavigationButton>
        <HomeNavigationButton
          isDisabled={Config.isReleaseMode}
          href={"/ranking"}
          leftIcon={TbAward}
        >
          {"ランキング"}
        </HomeNavigationButton>
        <HomeNavigationButton
          href={"https://www.aipictors.com/generate/"}
          leftIcon={TbBolt}
        >
          {"画像生成"}
        </HomeNavigationButton>
        <HomeNavigationButton
          isDisabled={Config.isReleaseMode}
          href={"/series"}
          leftIcon={TbAlbum}
        >
          {"シリーズ"}
        </HomeNavigationButton>
        <HomeNavigationButton
          isDisabled={Config.isReleaseMode}
          href={"/collections"}
          leftIcon={TbFolder}
        >
          {"コレクション"}
        </HomeNavigationButton>
        <Box py={2}>
          <Divider />
        </Box>
        <HomeNavigationButton href={"/works/2d"} leftIcon={TbPhoto}>
          {"イラスト"}
        </HomeNavigationButton>
        <HomeNavigationButton href={"/works/2.5d"} leftIcon={TbPhotoPlus}>
          {"セミリアル"}
        </HomeNavigationButton>
        <HomeNavigationButton href={"/works/3d"} leftIcon={TbCamera}>
          {"フォト"}
        </HomeNavigationButton>
        <HomeNavigationButton href={"/models"} leftIcon={TbBox}>
          {"モデル"}
        </HomeNavigationButton>
        <HomeNavigationButton href={"/sensitive"} leftIcon={TbAlertTriangle}>
          {"センシティブ"}
        </HomeNavigationButton>
        <Box py={2}>
          <Divider />
        </Box>
        {appContext.isLoggedIn && (
          <HomeNavigationButton href={"/settings/login"} leftIcon={TbSettings}>
            {"設定"}
          </HomeNavigationButton>
        )}
        {appContext.isLoggedIn && (
          <HomeNavigationButton
            onClick={() => {
              onOpenLogout()
            }}
            leftIcon={TbLogout}
          >
            {"ログアウト"}
          </HomeNavigationButton>
        )}
        {appContext.isNotLoggedIn && (
          <HomeNavigationButton
            onClick={() => {
              onOpen()
            }}
            leftIcon={TbLogin}
          >
            {"ログイン"}
          </HomeNavigationButton>
        )}
        <HomeNavigationButton
          onClick={() => {
            toggleColorMode()
          }}
          leftIcon={colorMode === "dark" ? TbSunFilled : TbMoonFilled}
        >
          {colorMode === "dark" ? "ライトモード" : "ダークモード"}
        </HomeNavigationButton>
        <Box py={2}>
          <Divider />
        </Box>
        <Stack>
          <HomeNavigationButton
            leftIcon={TbBrandX}
            href={"https://twitter.com/Aipictors"}
          >
            {"X（Twitter）"}
          </HomeNavigationButton>
          <HomeNavigationButton
            leftIcon={TbBrandDiscordFilled}
            href={"https://discord.gg/CsSbTHYY"}
          >
            {"Discord"}
          </HomeNavigationButton>
          <HomeNavigationButton
            href={"https://www.threads.net/@aipictors"}
            leftIcon={TbBrandThreads}
          >
            {"Threads"}
          </HomeNavigationButton>
          <HomeNavigationButton
            href={"https://www.youtube.com/@aipictors"}
            leftIcon={TbBrandYoutubeFilled}
          >
            {"YouTube"}
          </HomeNavigationButton>
        </Stack>
        <Box py={2}>
          <Divider />
        </Box>
        <Stack pl={3}>
          <ChakraLink href={"/about"} as={Link} fontSize={"xs"}>
            {"このサイトについて"}
          </ChakraLink>
          <ChakraLink href={"/about/us"} as={Link} fontSize={"xs"}>
            {"運営会社"}
          </ChakraLink>
          <ChakraLink href={"/terms"} as={Link} fontSize={"xs"}>
            {"利用規約"}
          </ChakraLink>
          <ChakraLink href={"/privacy"} as={Link} fontSize={"xs"}>
            {"プライバシーポリシー"}
          </ChakraLink>
          <ChakraLink
            href={"/specified-commercial-transaction-act"}
            as={Link}
            fontSize={"xs"}
          >
            {"特定商取引法に基づく表記"}
          </ChakraLink>
        </Stack>
      </Stack>
      <LoginModal isOpen={isOpen} onClose={onClose} />
      <LogoutModal
        isOpen={isOpenLogout}
        onClose={onCloseLogout}
        onOpen={onOpenLogout}
      />
    </Box>
  )
}
