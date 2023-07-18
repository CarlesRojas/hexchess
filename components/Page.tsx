import { ReactNode } from "react"

interface PageProps {
  top: ReactNode
  middle: ReactNode
  bottom: ReactNode
}

export default function Page({ top, middle, bottom }: PageProps) {
  return (
    <main className="relative grid h-screen w-screen grid-rows-[minmax(0,_6rem)_minmax(0,_1fr)_minmax(0,_1fr)]">
      {top}

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
        {middle}
      </div>

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
        {bottom}
      </div>
    </main>
  )
}
