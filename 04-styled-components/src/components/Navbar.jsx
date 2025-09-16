import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 10;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.cardBg};
  padding: 0 ${({theme}) => theme.spacing[6]};
  box-shadow: ${({theme}) => theme.shadows.md};
  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
`

const Cart = styled.span`
  font-size: 1.5rem;
`

const CartBadge = styled.span`
  font-size: 0.8rem;
  vertical-align: top;
`

export const Navbar = ({theme, toggleTheme}) => (
    <Header>
        <div>Mini-Loja</div>
        <Controls>
            <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
                {theme === 'light' ? '🌙' : '☀️'}
            </ThemeToggle>
            <Cart>
                🛒<CartBadge>(0)</CartBadge>
            </Cart>
        </Controls>
    </Header>
)
