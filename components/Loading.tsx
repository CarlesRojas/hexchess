import { DetailedHTMLProps, HTMLAttributes } from "react"
import { RiLoader4Fill } from "react-icons/ri"

export type LoadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const Loading = ({ className, ...props }: LoadingProps) => {
  return (
    <div
      {...props}
      className={`relative flex h-full w-full items-center justify-center ${className}`}
      data-testid="loading"
    >
      <RiLoader4Fill className="relative h-12 w-12 animate-spin p-2 opacity-60" />
    </div>
  )
}

export default Loading
