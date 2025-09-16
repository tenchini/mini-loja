import React from 'react'

export const Navbar = ({theme, toggleTheme}) => (
    <header className="navbar">
        <div>Mini-Loja</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem'}}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <span style={{fontSize: '1.5rem'}}>
                🛒<span style={{fontSize: '0.8rem', verticalAlign: 'top'}}>(0)</span>
            </span>
        </div>
    </header>
)
