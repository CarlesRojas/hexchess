"use client"
import Page from "@/components/Page"
import Image from "next/image"

export default function HomeError() {
  return (
    <Page
      top={<div />}
      middle={
        <>
          <Image
            src="/hexchess.png"
            className="w-1/3 max-w-[10rem]"
            width={512}
            height={512}
            alt="HexChess Logo"
          />

          <h1 className="text-center text-3xl font-bold opacity-90">
            HexChess
          </h1>
        </>
      }
      bottom={
        <p className="text-red-500">There was an error loading your user.</p>
      }
    />
  )
}
