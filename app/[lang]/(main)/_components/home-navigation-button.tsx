"use client"

import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { IconType } from "react-icons"

type Props = {
  icon?: LucideIcon | IconType
  href?: string
  children: React.ReactNode
  onClick?(): void
  isDisabled?: boolean
}

export const HomeNavigationButton = (props: Props) => {
  const Icon = props.icon

  if (props.isDisabled) {
    return (
      <Button
        variant={"ghost"}
        disabled={true}
        size={"sm"}
        className="w-full justify-start"
      >
        {Icon && <Icon className="w-4 mr-4" />}
        <span>{props.children}</span>
      </Button>
    )
  }

  if (props.href === undefined) {
    return (
      <Button
        variant={"ghost"}
        disabled={props.isDisabled}
        className="w-full justify-start"
        size={"sm"}
        onClick={props.onClick}
      >
        {Icon && <Icon className="w-4 mr-4" />}
        <span>{props.children}</span>
      </Button>
    )
  }

  if (props.href.startsWith("http")) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <Button variant={"ghost"} size={"sm"} className="w-full justify-start">
          {Icon && <Icon className="w-4 mr-4" />}
          <span>{props.children}</span>
        </Button>
      </a>
    )
  }

  return (
    <Link href={props.href}>
      <Button
        variant={"ghost"}
        className="w-full justify-start"
        size={"sm"}
        disabled={props.isDisabled}
      >
        {Icon && <Icon className="w-4 mr-4" />}
        <span>{props.children}</span>
      </Button>
    </Link>
  )
}
