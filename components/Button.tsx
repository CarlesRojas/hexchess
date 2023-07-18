import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import Loading from "./Loading"

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string
  loading?: boolean
  disabled?: boolean
  buttonType?: ButtonType
}

const Button = ({
  label,
  loading,
  disabled,
  buttonType = ButtonType.PRIMARY,
  ...rest
}: ButtonProps) => {
  const typeClass: Record<ButtonType, string> = {
    [ButtonType.PRIMARY]: "bg-gradient-to-tr from-primary-500 to-primary-300",
    [ButtonType.SECONDARY]: "bg-gradient-to-tr from-gray-400 to-gray-300",
  }

  return (
    <button
      disabled={disabled || loading}
      {...rest}
      className={`hex-clip relative flex h-14 w-full select-none items-center justify-center border-none ${
        typeClass[buttonType]
      } px-12 outline-none transition-transform hover:brightness-110 ${
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
          <p className="whitespace-nowrap text-lg font-bold text-black">
            {label}
          </p>
        )}
      </div>
    </button>
  )
}

export default Button
