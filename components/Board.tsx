"use client"

import {
  BoardTiles,
  getHexColor,
  getHexPosition,
  useHexSizes,
} from "@/shared/Board"
import { RefObject } from "react"

interface BoardProps {
  container: RefObject<HTMLDivElement | null>
}

const Board = ({ container }: BoardProps) => {
  const hexSizes = useHexSizes(container)
  const { boardHeight, boardWidth, tileHeight, tileWidth } = hexSizes

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: `${boardHeight}px`, width: `${boardWidth}px` }}
    >
      {BoardTiles.map(({ col, row }) => {
        const { x, y } = getHexPosition(col, row, hexSizes)
        return (
          <div
            key={`${col}${row}`}
            data-col={col}
            data-row={row}
            className={`absolute -translate-x-1/2 -translate-y-1/2 ${getHexColor(
              col,
              row
            )}`}
            style={{
              bottom: `${y}px`,
              left: `${x}px`,
              height: `${tileHeight + 1}px`,
              width: `${tileWidth + 1}px`,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        )
      })}
    </div>
  )
}

export default Board
