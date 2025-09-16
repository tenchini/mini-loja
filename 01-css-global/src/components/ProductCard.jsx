import React from 'react'
import {Button} from './Button'

export const ProductCard = ({product}) => {
    return (
        <div className="card">
            <div className="card__image-container">
                <img src={product.imageUrl} alt={product.title} className="card__image" loading="lazy" />
                {product.tag && <span className="card__tag">{product.tag}</span>}
            </div>
            <div className="card__content">
                <h3 className="card__title" title={product.title}>
                    {product.title}
                </h3>
                <p className="card__rating">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))} ({product.rating})
                </p>
                <div className="card__footer">
                    <p className="card__price">R$ {product.price.toFixed(2)}</p>
                    <Button variant="solid">Adicionar</Button>
                </div>
            </div>
        </div>
    )
}
