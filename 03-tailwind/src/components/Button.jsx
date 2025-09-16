import React from 'react'

export const Button = ({children, variant = 'solid', ...props}) => {
    const baseClasses =
        'px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm'

    const variantClasses = {
        solid: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
        outline:
            'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white',
        ghost: 'text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-slate-700',
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
            {children}
        </button>
    )
}
