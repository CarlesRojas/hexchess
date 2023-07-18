import CopyToClipboard from "@/components/CopyToClipboard"
import Page from "@/components/Page"
import User from "@/components/User"
import Image from "next/image"

export default function FriendPlay() {
  return (
    <Page
      top={<User />}
      middle={
        <>
          <Image
            src="/hexchess.png"
            className="w-1/3 max-w-[10rem]"
            width={512}
            height={512}
            alt="HexChess Logo"
          />

          <h1 className="balanced w-4/5 max-w-[20rem] text-center text-3xl font-bold opacity-90">
            To invite a friend, send them this link:
          </h1>
        </>
      }
      bottom={<CopyToClipboard />}
    />
  )
}
