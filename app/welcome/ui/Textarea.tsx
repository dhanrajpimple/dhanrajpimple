"use client"

import type { ChangeEventHandler, TextareaHTMLAttributes } from "react"

type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value"> & {
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const Textarea = ({ placeholder, value, onChange, className = "", rows = 4, ...props }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all duration-300 resize-none ${className}`}
      {...props}
    />
  )
}

export default Textarea
