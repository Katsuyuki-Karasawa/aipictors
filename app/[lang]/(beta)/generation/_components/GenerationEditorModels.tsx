"use client"

import {
  Button,
  Card,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react"
import type { ImageModelsQuery } from "__generated__/apollo"
import { ModelsModal } from "app/[lang]/(beta)/generation/_components/ModelsModal"
import { SelectedModel } from "app/[lang]/(beta)/generation/_components/SelectedModel"
import { TbQuestionMark } from "react-icons/tb"

type Props = {
  models: ImageModelsQuery["imageModels"]
  selectedImageModelId: string
  onSelectImageModelId(id: string): void
}

export const GenerationEditorModels: React.FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const selectedModelId = props.selectedImageModelId

  const selectedModel = props.models.find((model) => {
    return model.id === selectedModelId
  })

  return (
    <>
      <Card p={4} h={"100%"} overflowX={"hidden"} overflowY={"auto"} flex={1}>
        <Stack>
          <HStack justifyContent={"space-between"}>
            <HStack>
              <Text fontWeight={"bold"}>{"モデル"}</Text>
              <Tooltip
                label="イラスト生成に使用するモデルです。絵柄などが変わります。"
                fontSize="md"
              >
                <IconButton
                  aria-label={"メニュー"}
                  borderRadius={"full"}
                  icon={<Icon as={TbQuestionMark} />}
                />
              </Tooltip>
            </HStack>
            <Button size={"sm"} borderRadius={"full"} onClick={onOpen}>
              {"モデルを変更する"}
            </Button>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <SelectedModel
              imageURL={selectedModel?.thumbnailImageURL ?? ""}
              name={selectedModel?.displayName ?? ""}
            />
          </HStack>
        </Stack>
      </Card>
      <ModelsModal
        isOpen={isOpen}
        onClose={onClose}
        models={props.models}
        selectedModelId={props.selectedImageModelId}
        onSelect={props.onSelectImageModelId}
      />
    </>
  )
}
