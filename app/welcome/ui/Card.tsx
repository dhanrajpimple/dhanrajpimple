import type { HTMLAttributes, ReactNode } from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = "", ...props }: Props) => {
  return (
    <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardContent = ({ children, className = "", ...props }: Props) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Card, CardContent }
