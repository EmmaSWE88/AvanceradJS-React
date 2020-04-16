import React from 'react'

export default function ProductList({product}) {
    return (
        <div>
            <p>{product.id}</p><p>{product.name}</p><p>{product.desc}</p>
        </div>
    )
}
