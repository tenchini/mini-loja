import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = ({theme, toggleTheme}) => (
    <header className={styles.navbar}>
        <div>Mini-Loja</div>
        <div className={styles.controls}>
            <button onClick={toggleTheme} aria-label="Alternar tema" className={styles.themeToggle}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <span className={styles.cart}>
                🛒<span className={styles.cartBadge}>(0)</span>
            </span>
        </div>
    </header>
)
