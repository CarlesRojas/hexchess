"use client"
import Image from "next/image"

export default function HomeError() {
  return (
    <main className="grid h-screen w-screen grid-rows-[minmax(0,_6rem)_minmax(0,_1fr)_minmax(0,_1fr)]">
      <div />

      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <Image
          src="/hexchess.png"
          className="w-1/3 max-w-[10rem]"
          width={512}
          height={512}
          alt="HexChess Logo"
        />

        <h1 className="text-3xl font-bold opacity-90">HexChess</h1>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <p>There was an error loading your user</p>
      </div>
    </main>
  )
}
