import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'

const CardWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.cardBg};
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: ${({theme}) => theme.radius};
  overflow: hidden;
  box-shadow: ${({theme}) => theme.shadows.md};
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme}) => theme.shadows.lg};
  }
`

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: ${({theme}) => theme.colors.border};
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const CardTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
`

const CardContent = styled.div`
  padding: ${({theme}) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0 0 0.5rem 0;
`

const Rating = styled.p`
  color: #f6e05e;
  margin: 0;
`

const Footer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`

export const ProductCard = ({product}) => {
    return (
        <CardWrapper>
            <ImageContainer>
                <CardImage src={product.imageUrl} alt={product.title} loading="lazy" />
                {product.tag && <CardTag>{product.tag}</CardTag>}
            </ImageContainer>
            <CardContent>
                <Title title={product.title}>{product.title}</Title>
                <Rating>
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))} ({product.rating})
                </Rating>
                <Footer>
                    <Price>R$ {product.price.toFixed(2)}</Price>
                    <Button $variant="solid">Adicionar</Button>
                </Footer>
            </CardContent>
        </CardWrapper>
    )
}
