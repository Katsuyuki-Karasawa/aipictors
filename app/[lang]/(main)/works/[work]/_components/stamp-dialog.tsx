"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"

type Props = {
  isOpen: boolean
  onClose(): void
}

export const StampDialog = (props: Props) => {
  return (
    <Dialog onOpenChange={props.onClose} open={props.isOpen}>
      <DialogContent>
        <DialogHeader>
          <p>{"スタンプを選択"}</p>
        </DialogHeader>
        <div className="grid grid-cols-6 gap-2">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button>
            <Plus />
          </Button>
        </div>
        <DialogFooter>
          <Button onClick={props.onClose}>{"送信"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
