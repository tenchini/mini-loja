import React from 'react'
import styles from './Button.module.css'

export const Button = ({children, variant = 'solid', ...props}) => {
    const className = `${styles.btn} ${styles[variant]}`
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}
