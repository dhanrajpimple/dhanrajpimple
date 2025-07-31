"use client"
import { motion } from "framer-motion"

const Button = ({
  children,
  onClick,
  className = "",
  size = "default",
  variant = "default",
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-8 py-3 text-base",
  }

  const variantClasses = {
    default: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    primary:
      "bg-gradient-to-r from-[#00ff88] to-[#00aaff] hover:from-[#00aaff] hover:to-[#aa00ff] text-black font-bold",
    secondary: "bg-white/5 text-white border border-white/20 hover:bg-white/10",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
