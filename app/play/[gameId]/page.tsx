"use client"

import Board from "@/components/Board"
import { HEXAGON_ASPECT_RATIO } from "@/shared/Board"
import { useRef } from "react"

interface PlayProps {
  params: { gameId: string }
}

export default function Play({ params }: PlayProps) {
  const boardContainer = useRef<HTMLDivElement>(null)

  return (
    <main className="relative grid h-screen w-screen grid-rows-[minmax(0,_1fr)_min-content_minmax(0,_1fr)] overflow-hidden">
      <div />
      <div
        className="relative w-screen"
        ref={boardContainer}
        style={{ maxWidth: `calc(100vh * ${HEXAGON_ASPECT_RATIO})` }}
      >
        <Board container={boardContainer} />
      </div>
      <div />
    </main>
  )
}
