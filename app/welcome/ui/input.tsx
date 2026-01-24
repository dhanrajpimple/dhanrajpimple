"use client"

import type { ChangeEventHandler, InputHTMLAttributes } from "react"

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ type = "text", placeholder, value, onChange, className = "", ...props }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all duration-300 ${className}`}
      {...props}
    />
  )
}

export default Input
