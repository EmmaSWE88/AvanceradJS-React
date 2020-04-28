import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState('')

    useEffect(() => {  
        setProduct(id)
    }, [id])


    return (
        <div>
            Product Details { product }
        </div>
    )
}