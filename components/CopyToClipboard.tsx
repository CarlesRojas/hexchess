"use client"
import useAutoResetState from "@/hooks/useAutoResetState"
import { Route } from "@/shared/Route"
import Link from "next/link"
import { useRef } from "react"
import uuid from "react-uuid"
import Button, { ButtonType } from "./Button"

const CopyToClipboard = () => {
  const gameId = useRef(uuid())
  const [error, setError] = useAutoResetState(false, 2000)
  const [copied, setCopied] = useAutoResetState(false, 2000)

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${Route.INVITE}/${gameId.current}`

  const copyGameId = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setError(false)
      setCopied(true)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className="flex w-2/3 max-w-[20rem] flex-col items-center justify-center gap-4">
      <p className="whitespace-pre-wrap text-center text-sm font-bold opacity-50">
        {url}
      </p>

      <Button label="Copy" onClick={copyGameId} type="button" />
      <Link
        href={Route.HOME}
        className="hex-clip flex w-full items-center justify-center"
      >
        <Button label="Cancel" buttonType={ButtonType.SECONDARY} />
      </Link>

      <p
        className={`pointer-events-none ${
          copied || error ? "opacity-100" : "opacity-0"
        } ${error ? "text-red-500" : "text-green-500"}`}
      >
        {copied ? "Copied!" : "Failed to copy!"}
      </p>
    </div>
  )
}

export default CopyToClipboard
