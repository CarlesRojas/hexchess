import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import Loading from "./Loading"

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string
  loading?: boolean
  disabled?: boolean
}

const Button = ({ label, loading, disabled, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      {...rest}
      className={`relative flex h-fit w-2/3 max-w-[20rem] select-none items-center justify-center border-none bg-primary-300 px-12 py-4 outline-none hover:bg-primary-400 ${
        loading ? "pointer-events-none" : ""
      } ${disabled ? "pointer-events-none opacity-40" : ""}`}
    >
      {loading && <Loading className="absolute" />}

      <div
        className={`flex items-center justify-center gap-2 ${
          loading ? "opacity-0" : ""
        }`}
      >
        {label && (
          <p className="whitespace-nowrap text-xl font-bold text-black">
            {label}
          </p>
        )}
      </div>
    </button>
  )
}

export default Button
