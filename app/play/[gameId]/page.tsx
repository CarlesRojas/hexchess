"use client"
import { COL, HEXAGON_ASPECT_RATIO } from "@/shared/Constant"
import { useEffect, useState } from "react"

interface PlayProps {
  params: { gameId: string }
}

export default function Play({ params }: PlayProps) {
  const squares = [
    { col: COL.A, row: 1 },
    { col: COL.A, row: 2 },
    { col: COL.A, row: 3 },
    { col: COL.A, row: 4 },
    { col: COL.A, row: 5 },
    { col: COL.A, row: 6 },

    { col: COL.B, row: 1 },
    { col: COL.B, row: 2 },
    { col: COL.B, row: 3 },
    { col: COL.B, row: 4 },
    { col: COL.B, row: 5 },
    { col: COL.B, row: 6 },
    { col: COL.B, row: 7 },

    { col: COL.C, row: 1 },
    { col: COL.C, row: 2 },
    { col: COL.C, row: 3 },
    { col: COL.C, row: 4 },
    { col: COL.C, row: 5 },
    { col: COL.C, row: 6 },
    { col: COL.C, row: 7 },
    { col: COL.C, row: 8 },

    { col: COL.D, row: 1 },
    { col: COL.D, row: 2 },
    { col: COL.D, row: 3 },
    { col: COL.D, row: 4 },
    { col: COL.D, row: 5 },
    { col: COL.D, row: 6 },
    { col: COL.D, row: 7 },
    { col: COL.D, row: 8 },
    { col: COL.D, row: 9 },

    { col: COL.E, row: 1 },
    { col: COL.E, row: 2 },
    { col: COL.E, row: 3 },
    { col: COL.E, row: 4 },
    { col: COL.E, row: 5 },
    { col: COL.E, row: 6 },
    { col: COL.E, row: 7 },
    { col: COL.E, row: 8 },
    { col: COL.E, row: 9 },
    { col: COL.E, row: 10 },

    { col: COL.F, row: 1 },
    { col: COL.F, row: 2 },
    { col: COL.F, row: 3 },
    { col: COL.F, row: 4 },
    { col: COL.F, row: 5 },
    { col: COL.F, row: 6 },
    { col: COL.F, row: 7 },
    { col: COL.F, row: 8 },
    { col: COL.F, row: 9 },
    { col: COL.F, row: 10 },
    { col: COL.F, row: 11 },

    { col: COL.G, row: 1 },
    { col: COL.G, row: 2 },
    { col: COL.G, row: 3 },
    { col: COL.G, row: 4 },
    { col: COL.G, row: 5 },
    { col: COL.G, row: 6 },
    { col: COL.G, row: 7 },
    { col: COL.G, row: 8 },
    { col: COL.G, row: 9 },
    { col: COL.G, row: 10 },

    { col: COL.H, row: 1 },
    { col: COL.H, row: 2 },
    { col: COL.H, row: 3 },
    { col: COL.H, row: 4 },
    { col: COL.H, row: 5 },
    { col: COL.H, row: 6 },
    { col: COL.H, row: 7 },
    { col: COL.H, row: 8 },
    { col: COL.H, row: 9 },

    { col: COL.I, row: 1 },
    { col: COL.I, row: 2 },
    { col: COL.I, row: 3 },
    { col: COL.I, row: 4 },
    { col: COL.I, row: 5 },
    { col: COL.I, row: 6 },
    { col: COL.I, row: 7 },
    { col: COL.I, row: 8 },

    { col: COL.K, row: 1 },
    { col: COL.K, row: 2 },
    { col: COL.K, row: 3 },
    { col: COL.K, row: 4 },
    { col: COL.K, row: 5 },
    { col: COL.K, row: 6 },
    { col: COL.K, row: 7 },

    { col: COL.L, row: 1 },
    { col: COL.L, row: 2 },
    { col: COL.L, row: 3 },
    { col: COL.L, row: 4 },
    { col: COL.L, row: 5 },
    { col: COL.L, row: 6 },
  ]

  const [hexSize, setHexSize] = useState({ h: 0, w: 0 })

  useEffect(() => {
    const hexWidth = window.innerWidth / 8.5
    const hexHeigh = hexWidth * HEXAGON_ASPECT_RATIO
    setHexSize({ h: hexHeigh, w: hexWidth })
  }, [])

  const halfHexHeight = hexSize.h / 2
  const halfHexWidth = hexSize.w / 2
  const hexSide = hexSize.w / 2

  console.log(hexSize.h * 11)

  return (
    <main className="relative grid h-screen w-screen grid-rows-[minmax(0,_1fr)_min-content_minmax(0,_1fr)]">
      <div />
      <div
        className="relative w-screen overflow-hidden"
        style={{ height: `${hexSize.h * 11}px` }}
      >
        {squares.map(({ col, row }) => (
          <div
            key={`${col}${row}`}
            data-col={col}
            data-row={row}
            className={`absolute ${
              (row + (11 - Math.abs(col - 6))) % 3 === 0
                ? "bg-primary-300"
                : (row + (11 - Math.abs(col - 6))) % 3 === 1
                ? "bg-primary-500"
                : "bg-primary-400"
            }`}
            style={{
              transform: `translate(-50%, -50%)`,

              bottom: `${
                Math.abs(col - 6) * halfHexHeight +
                (row - 1) * hexSize.h -
                halfHexHeight
              }px`,
              left: `${
                halfHexWidth + (col - 1) * (halfHexWidth + hexSide / 2)
              }px`,

              height: `${hexSize.h}px`,
              width: `${hexSize.w}px`,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        ))}
      </div>
      <div />
    </main>
  )
}
