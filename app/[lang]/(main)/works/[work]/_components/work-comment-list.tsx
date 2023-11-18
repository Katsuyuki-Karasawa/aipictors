"use client"

import type { WorkCommentsQuery } from "@/__generated__/apollo"
import { WorkComment } from "@/app/[lang]/(main)/works/[work]/_components/work-comment"
import { WorkCommentResponse } from "@/app/[lang]/(main)/works/[work]/_components/work-comment-response"
import { Button } from "@/components/ui/button"
import { Stamp } from "lucide-react"

type Props = {
  work: NonNullable<WorkCommentsQuery["work"]>
}

export const WorkCommentList = (props: Props) => {
  return (
    <div className="space-y-4">
      <p>{"コメント"}</p>
      <div className="flex items-center space-x-2">
        <img className="rounded-full" src="" alt="" />
        <input
          className="text-sm rounded-full"
          type="text"
          placeholder="コメントする"
        />
        <Button size={"icon"}>
          <Stamp />
        </Button>
        <Button className="rounded-full">{"投稿"}</Button>
      </div>
      <div className="space-y-8">
        {props.work.comments.map((comment) => (
          <div key={comment.id} className="space-y-8">
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
          </div>
        ))}
      </div>
    </div>
  )
}
