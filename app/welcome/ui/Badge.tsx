import type { HTMLAttributes, ReactNode } from "react"

type BadgeVariant = "default" | "secondary"

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const Badge = ({ children, variant = "default", className = "", ...props }: Props) => {
  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-white/10 text-white border-white/20",
    secondary: "bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 hover:bg-[#00ff88]/30",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
