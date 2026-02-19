import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-heading font-bold cursor-pointer rounded-full transition-all duration-200 whitespace-nowrap no-underline'

  const variants = {
    primary:
      'bg-gradient-to-br from-orange to-orange-dark text-white shadow-orange hover:shadow-orange-hover hover:-translate-y-0.5 border-none',
    ghost:
      'bg-white/10 border-[1.5px] border-white/[0.28] text-white hover:bg-white/[0.18] hover:border-white/50',
  }

  const sizes = {
    sm: 'px-5 py-2 text-[13px]',
    md: 'px-7 py-3 text-[14.5px]',
    lg: 'px-8 py-3.5 text-[15px]',
  }

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
