import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import {Navbar} from './components/Navbar'
import {ProductCard} from './components/ProductCard'
import {Skeleton} from './components/Skeleton'
import {productData} from './products'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    font-family: system-ui, sans-serif;
    margin: 0;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  }
`

const MainLayout = styled.main`
  padding-top: 60px; /* Altura da Navbar */
`

const ProductGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme}) => `2rem ${theme.spacing[6]}`};
  display: grid;
  gap: ${({theme}) => theme.spacing[6]};
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 481px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 769px) { grid-template-columns: repeat(3, 1fr); }
`

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    const currentTheme = theme === 'light' ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <MainLayout>
                <ProductGrid>
                    {isLoading
                        ? Array.from({length: 6}).map((_, index) => <Skeleton key={index} />)
                        : productData.map((product) => <ProductCard key={product.id} product={product} />)}
                </ProductGrid>
            </MainLayout>
        </ThemeProvider>
    )
}

export default App
