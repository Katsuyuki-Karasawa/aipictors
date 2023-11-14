"use client"

import type { WorkCommentsQuery } from "@/__generated__/apollo"
import { WorkComment } from "@/app/[lang]/(main)/works/[work]/_components/work-comment"
import { WorkCommentResponse } from "@/app/[lang]/(main)/works/[work]/_components/work-comment-response"
import {
  Avatar,
  Button,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Stamp } from "lucide-react"

type Props = {
  work: NonNullable<WorkCommentsQuery["work"]>
}

export const WorkCommentList = (props: Props) => {
  return (
    <Stack>
      <Text>{"コメント"}</Text>
      <HStack>
        <Avatar src={""} />
        <Input size={"sm"} placeholder="コメントする" borderRadius={"full"} />
        <IconButton
          aria-label={"スタンプ"}
          borderRadius={"full"}
          icon={<Stamp />}
        />
        <Button colorScheme={"primary"} borderRadius={"full"}>
          {"投稿"}
        </Button>
      </HStack>
      <Stack>
        {props.work.comments.map((comment) => (
          <Stack key={comment.id} spacing={8}>
            <WorkComment
              createdAt={comment.createdAt}
              stickerImageURL={comment.sticker?.image?.downloadURL}
              text={comment.text}
              userIconImageURL={comment.user?.iconImage?.downloadURL}
              userName={comment.user?.name}
            />
            {comment.responses.map((reply) => (
              <WorkCommentResponse
                key={reply.id}
                createdAt={reply.createdAt}
                stickerImageURL={reply.sticker?.image?.downloadURL}
                text={reply.text}
                userIconImageURL={reply.user?.iconImage?.downloadURL}
                userName={reply.user?.name}
              />
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
