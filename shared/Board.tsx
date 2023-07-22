import useResize from "@/hooks/useResize"
import { RefObject, useState } from "react"

export const HEXAGON_ASPECT_RATIO = 0.866025

export enum COL {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  G = 7,
  H = 8,
  I = 9,
  K = 10,
  L = 11,
}

export interface HexSizes {
  tileHeight: number
  tileWidth: number
  boardHeight: number
  boardWidth: number
}

export const useHexSizes = (container: RefObject<HTMLDivElement | null>) => {
  const [size, setSize] = useState({
    tileHeight: 0,
    tileWidth: 0,
    boardHeight: 0,
    boardWidth: 0,
  })

  useResize(() => {
    console.log(container.current)
    const boardWidth = container.current?.offsetWidth || 0
    const tileWidth = boardWidth / 8.5
    const tileHeight = tileWidth * HEXAGON_ASPECT_RATIO

    setSize({
      tileHeight,
      tileWidth,
      boardHeight: tileHeight * 11,
      boardWidth,
    })
  }, true)

  return size
}

export const getHexColor = (col: COL, row: number) => {
  const colorIndex = (row + (11 - Math.abs(col - 6))) % 3
  const colors = ["bg-primary-300", "bg-primary-500", "bg-primary-400"]
  return colors[colorIndex]
}

export const getHexPosition = (col: COL, row: number, hexSizes: HexSizes) => {
  const { tileWidth, tileHeight } = hexSizes
  const halfTileHeight = tileHeight / 2
  const halfTileWidth = tileWidth / 2

  const x = halfTileWidth + (col - 1) * (halfTileWidth * 1.5)
  const y =
    Math.abs(col - 6) * halfTileHeight + (row - 1) * tileHeight - halfTileHeight
  return { x, y }
}

export const BoardTiles = [
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
