import React, {useState, useEffect} from 'react'
import {Navbar} from './components/Navbar'
import {ProductCard} from './components/ProductCard'
import {Skeleton} from './components/Skeleton'
import {productData} from './products'

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <div>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="pt-16 py-12">
                <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
                    {isLoading
                        ? Array.from({length: 6}).map((_, index) => <Skeleton key={index} />)
                        : productData.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </main>
        </div>
    )
}

export default App
