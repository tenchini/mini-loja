import styled, {css} from 'styled-components'

const variants = {
    solid: css`
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    &:hover:not(:disabled) {
      background-color: ${({theme}) => theme.colors.primaryHover};
    }
  `,
    outline: css`
    background-color: transparent;
    border-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
    &:hover:not(:disabled) {
      background-color: ${({theme}) => theme.colors.primary};
      color: white;
    }
  `,
    ghost: css`
    background-color: transparent;
    color: ${({theme}) => theme.colors.primary};
    &:hover:not(:disabled) {
      background-color: rgba(49, 130, 206, 0.1);
    }
  `,
}

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  border: 2px solid transparent;
  font-size: 1rem;

  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.primary};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({$variant = 'solid'}) => variants[$variant]}
`
