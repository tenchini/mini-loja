import React from 'react'
import {Button} from './Button'

export const ProductCard = ({product}) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-700">
                <img src={product.imageUrl} alt={product.title} className="h-full w-full object-cover" loading="lazy" />
                {product.tag && (
                    <span className="absolute top-3 left-3 rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white dark:bg-blue-500">
                        {product.tag}
                    </span>
                )}
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="h-[3em] font-semibold leading-tight line-clamp-2" title={product.title}>
                    {product.title}
                </h3>
                <p className="mt-1 text-yellow-400">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))} ({product.rating})
                </p>
                <div className="mt-auto flex items-center justify-between pt-4">
                    <p className="text-xl font-bold">R$ {product.price.toFixed(2)}</p>
                    <Button variant="solid">Adicionar</Button>
                </div>
            </div>
        </div>
    )
}
