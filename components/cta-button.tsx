import { ExternalLink } from "lucide-react"

interface CTAButtonProps {
  className?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function CTAButton({ className = "", variant = "primary", size = "md" }: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <a
      href="https://zerodha.com/open-account?c=ZMQMHQ"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      Open Demat Account with Zerodha
      <ExternalLink className="h-5 w-5 ml-2" />
    </a>
  )
}
