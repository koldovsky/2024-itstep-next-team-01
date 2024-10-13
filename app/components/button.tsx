import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background font-sans',
    {
        variants: {
            variant: {
                default: 'border-primaryText border-2 text-primaryText hover:text-white hover:bg-primaryText',
                primary:'text-white bg-primaryButton hover:bg-primaryButtonHover',
                secondary: 'border-secondaryButton border-2 text-secondaryButton hover:text-white hover:bg-secondaryButton',
            },
            size: {
                default: 'h-12 py-6 px-8 ',
                sm: 'h-9 px-3 ',
                lg: 'h-12 py-6 px-8 ',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? 'span' : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }