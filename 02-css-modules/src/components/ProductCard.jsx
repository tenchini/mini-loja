import React from 'react'
import {Button} from './Button'
import styles from './ProductCard.module.css'

export const ProductCard = ({product}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={product.imageUrl} alt={product.title} className={styles.image} loading="lazy" />
                {product.tag && <span className={styles.tag}>{product.tag}</span>}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title} title={product.title}>
                    {product.title}
                </h3>
                <p className={styles.rating}>
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))} ({product.rating})
                </p>
                <div className={styles.footer}>
                    <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
                    <Button variant="solid">Adicionar</Button>
                </div>
            </div>
        </div>
    )
}
