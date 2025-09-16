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
            <main>
                <div className="product-grid">
                    {isLoading
                        ? Array.from({length: 6}).map((_, index) => <Skeleton key={index} />)
                        : productData.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </main>
        </div>
    )
}

export default App
