import Button, { ButtonType } from "@/components/Button"
import Page from "@/components/Page"
import User from "@/components/User"
import { Route } from "@/shared/Route"
import Image from "next/image"
import Link from "next/link"

export default function QuickPlay() {
  return (
    <Page
      top={<User />}
      middle={
        <>
          <Image
            src="/hexchess.png"
            className="w-1/3 max-w-[10rem] animate-scale-pulse"
            width={512}
            height={512}
            alt="HexChess Logo"
          />

          <h1 className="text-center text-3xl font-bold opacity-90">
            Looking for an opponent...
          </h1>
        </>
      }
      bottom={
        <>
          <Link
            href={Route.HOME}
            className="hex-clip flex w-2/3 max-w-[20rem] items-center justify-center"
          >
            <Button label="Cancel" buttonType={ButtonType.SECONDARY} />
          </Link>
        </>
      }
    />
  )
}
