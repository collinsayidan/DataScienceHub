import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-bg-900',
  {
    variants: {
      variant: {
        default: 'bg-brand-blue text-white hover:brightness-110',
        outline: 'border border-white/20 hover:bg-white/10',
        ghost: 'hover:bg-white/10'
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-6'
      }
    },
    defaultVariants: { variant: 'default', size: 'md' }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button className={buttonStyles({ variant, size, className })} ref={ref} {...props} />
))
Button.displayName = 'Button'
