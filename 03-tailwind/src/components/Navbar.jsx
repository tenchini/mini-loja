import React from 'react'

export const Navbar = ({theme, toggleTheme}) => (
    <header className="fixed top-0 left-0 right-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="font-bold">Mini-Loja</div>
        <div className="flex items-center gap-4">
            <button onClick={toggleTheme} aria-label="Alternar tema" className="text-2xl">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="text-2xl">
                🛒<span className="align-top text-xs">(0)</span>
            </div>
        </div>
    </header>
)
